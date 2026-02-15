import { useState, useRef } from 'react'
import { toPng } from 'html-to-image'
import { BrandConfig, TemplateDefinition, TemplateCategory } from './types'
import { templateRegistry } from './templates/registry'
import { DIMENSIONS } from './templates/shared'

interface GalleryViewProps {
  brand: BrandConfig
  templates: TemplateDefinition[]
  onSelectTemplate: (templateId: string) => void
}

const CATEGORY_LABELS: Record<TemplateCategory, string> = {
  chain: 'Chain Announcements',
  feature: 'Feature Announcements',
  swap: 'Swap & Trading',
  portfolio: 'Portfolio',
  wallet: 'Wallet',
  multichain: 'Multi-Chain',
  thread: 'Thread Assets',
  stats: 'Stats & Metrics',
  community: 'Community',
  announcement: 'Announcements',
  quote: 'Quotes',
}

const CATEGORY_ORDER: TemplateCategory[] = [
  'chain', 'feature', 'swap', 'portfolio', 'wallet',
  'multichain', 'thread', 'stats', 'community', 'announcement', 'quote',
]

const THUMBNAIL_SCALE = 0.28

export function GalleryView({ brand, templates, onSelectTemplate }: GalleryViewProps) {
  const [activeCategory, setActiveCategory] = useState<TemplateCategory | 'all'>('all')
  const [exportingId, setExportingId] = useState<string | null>(null)
  const exportRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const filteredTemplates = activeCategory === 'all'
    ? templates
    : templates.filter(t => t.category === activeCategory)

  const categoriesWithTemplates = CATEGORY_ORDER.filter(cat =>
    templates.some(t => t.category === cat)
  )

  const handleQuickExport = async (templateId: string) => {
    const el = exportRefs.current[templateId]
    if (!el) return
    setExportingId(templateId)
    try {
      const dataUrl = await toPng(el, { pixelRatio: 2 })
      const link = document.createElement('a')
      link.download = `${brand.name}-${templateId}.png`
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error('Export failed:', err)
    } finally {
      setExportingId(null)
    }
  }

  const getDefaultVariables = (template: TemplateDefinition): Record<string, string> => {
    const vars: Record<string, string> = {}
    template.variables.forEach(v => {
      if (v.default) vars[v.name] = v.default
    })
    return vars
  }

  const renderThumbnail = (template: TemplateDefinition) => {
    const Component = templateRegistry[template.id]
    if (!Component) return null

    const dims = DIMENSIONS[template.aspectRatio as keyof typeof DIMENSIONS] || DIMENSIONS['16:9']
    const thumbWidth = dims.width * THUMBNAIL_SCALE
    const thumbHeight = dims.height * THUMBNAIL_SCALE
    const defaultVars = getDefaultVariables(template)

    return (
      <div
        key={template.id}
        className="group relative cursor-pointer"
        style={{ width: thumbWidth, flexShrink: 0 }}
      >
        <div
          className="rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10"
          style={{ width: thumbWidth, height: thumbHeight }}
        >
          <div
            style={{
              width: dims.width,
              height: dims.height,
              transform: `scale(${THUMBNAIL_SCALE})`,
              transformOrigin: 'top left',
            }}
          >
            <div ref={el => { exportRefs.current[template.id] = el }}>
              <Component brand={brand} variables={defaultVars} />
            </div>
          </div>
        </div>

        <div className="mt-2 px-1">
          <div className="text-sm font-medium text-gray-200 truncate">{template.name}</div>
          <div className="text-xs text-gray-500">{template.aspectRatio}</div>
        </div>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 rounded-lg flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100"
          style={{ height: thumbHeight }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); onSelectTemplate(template.id) }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-xs font-medium transition"
          >
            Edit
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handleQuickExport(template.id) }}
            disabled={exportingId === template.id}
            className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1.5 rounded-md text-xs font-medium transition disabled:opacity-50"
          >
            {exportingId === template.id ? '...' : 'PNG'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
          }`}
        >
          All ({templates.length})
        </button>
        {categoriesWithTemplates.map(cat => {
          const count = templates.filter(t => t.category === cat).length
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
              }`}
            >
              {CATEGORY_LABELS[cat]} ({count})
            </button>
          )
        })}
      </div>

      {activeCategory === 'all' ? (
        categoriesWithTemplates.map(cat => {
          const catTemplates = filteredTemplates.filter(t => t.category === cat)
          if (catTemplates.length === 0) return null
          return (
            <div key={cat} className="mb-10">
              <h3 className="text-lg font-semibold text-gray-200 mb-4">
                {CATEGORY_LABELS[cat]}
              </h3>
              <div className="flex flex-wrap gap-4">
                {catTemplates.map(t => renderThumbnail(t))}
              </div>
            </div>
          )
        })
      ) : (
        <div className="flex flex-wrap gap-4">
          {filteredTemplates.map(t => renderThumbnail(t))}
        </div>
      )}
    </div>
  )
}
