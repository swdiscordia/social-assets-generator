import { useState, useRef, useEffect } from 'react'
import { createRoot, Root } from 'react-dom/client'
import { toPng } from 'html-to-image'
import { useEditorStore } from './store/editorStore'
import { FabricImage } from 'fabric'
import { templateRegistry } from '../templates/registry'
import { DIMENSIONS } from '../templates/shared'
import { BrandConfig, TemplateDefinition } from '../types'

interface Asset {
  name: string
  url: string
  category: string
}

// Partner assets - dynamically loaded from /images/partners/
const PARTNER_ASSETS: Asset[] = [
  // ShapeShift brand
  { name: 'Fox Logo', url: '/images/fox-logo.svg', category: 'ShapeShift' },
  { name: 'Mountains', url: '/images/mountains.webp', category: 'ShapeShift' },
  { name: 'Fox Moon', url: '/images/fox-moon.webp', category: 'ShapeShift' },
]

interface AssetsPanelProps {
  templates?: TemplateDefinition[]
  brand?: BrandConfig
  onLoadTemplate?: (templateId: string) => void
}

export function AssetsPanel({ templates = [], brand, onLoadTemplate }: AssetsPanelProps) {
  const [activeTab, setActiveTab] = useState<'templates' | 'partners'>('templates')
  const { canvas, canvasSize, setCanvasSize } = useEditorStore()
  const [templatePreviews, setTemplatePreviews] = useState<Record<string, string>>({})
  const previewContainerRef = useRef<HTMLDivElement | null>(null)

  // Generate template previews
  useEffect(() => {
    if (!brand || templates.length === 0) return

    // Create hidden container for rendering
    const container = document.createElement('div')
    container.style.position = 'absolute'
    container.style.left = '-9999px'
    container.style.top = '-9999px'
    document.body.appendChild(container)
    previewContainerRef.current = container

    const generatePreviews = async () => {
      const previews: Record<string, string> = {}
      
      for (const template of templates) {
        const Component = templateRegistry[template.id]
        if (!Component) continue

        const dims = DIMENSIONS[template.aspectRatio as keyof typeof DIMENSIONS] || DIMENSIONS['1:1']
        const defaultVars: Record<string, string> = {}
        template.variables.forEach(v => {
          if (v.default) defaultVars[v.name] = v.default
        })

        // Create wrapper for this template
        const wrapper = document.createElement('div')
        wrapper.style.width = `${dims.width}px`
        wrapper.style.height = `${dims.height}px`
        container.appendChild(wrapper)

        const root = createRoot(wrapper)
        root.render(<Component brand={brand} variables={defaultVars} />)

        // Wait for render
        await new Promise(resolve => setTimeout(resolve, 150))

        try {
          const dataUrl = await toPng(wrapper, {
            width: dims.width,
            height: dims.height,
            pixelRatio: 0.25, // Small preview
          })
          previews[template.id] = dataUrl
        } catch (err) {
          console.error(`Failed to generate preview for ${template.id}:`, err)
        }

        root.unmount()
        container.removeChild(wrapper)
      }

      setTemplatePreviews(previews)
    }

    generatePreviews()

    return () => {
      if (previewContainerRef.current) {
        document.body.removeChild(previewContainerRef.current)
      }
    }
  }, [templates, brand])

  const addAsset = async (url: string) => {
    if (!canvas) return
    try {
      const img = await FabricImage.fromURL(url, { crossOrigin: 'anonymous' })
      img.set({
        left: canvasSize.width / 2,
        top: canvasSize.height / 2,
        originX: 'center',
        originY: 'center',
      })
      // Scale down if too big
      const maxSize = Math.min(canvasSize.width, canvasSize.height) * 0.3
      if (img.width && img.width > maxSize) {
        img.scaleToWidth(maxSize)
      }
      canvas.add(img)
      canvas.setActiveObject(img)
      canvas.requestRenderAll()
    } catch (err) {
      console.error('Failed to load asset:', err)
    }
  }

  const handleLoadTemplate = (templateId: string) => {
    if (onLoadTemplate) {
      onLoadTemplate(templateId)
    }
  }

  // Group assets by category
  const categories = PARTNER_ASSETS.reduce((acc, asset) => {
    if (!acc[asset.category]) acc[asset.category] = []
    acc[asset.category].push(asset)
    return acc
  }, {} as Record<string, Asset[]>)

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col overflow-hidden">
      {/* Tab Header */}
      <div className="flex border-b border-gray-800">
        <button
          onClick={() => setActiveTab('templates')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition ${
            activeTab === 'templates'
              ? 'text-white bg-gray-800 border-b-2 border-blue-500'
              : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
          }`}
        >
          Templates
        </button>
        <button
          onClick={() => setActiveTab('partners')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition ${
            activeTab === 'partners'
              ? 'text-white bg-gray-800 border-b-2 border-blue-500'
              : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
          }`}
        >
          Partners
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3">
        {activeTab === 'templates' ? (
          <div className="space-y-3">
            <p className="text-xs text-gray-500 mb-3">Click to load a template</p>
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => handleLoadTemplate(template.id)}
                className="w-full bg-gray-800 hover:bg-gray-700 rounded-lg overflow-hidden transition group"
              >
                <div className="aspect-square bg-gray-900 relative">
                  {templatePreviews[template.id] ? (
                    <img
                      src={templatePreviews[template.id]}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-gray-600 border-t-blue-500 rounded-full animate-spin" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white text-xs font-medium bg-blue-600 px-2 py-1 rounded">
                      Load
                    </span>
                  </div>
                </div>
                <div className="p-2">
                  <p className="text-xs text-gray-300 truncate">{template.name}</p>
                  <p className="text-[10px] text-gray-500">{template.aspectRatio}</p>
                </div>
              </button>
            ))}
            {templates.length === 0 && (
              <p className="text-sm text-gray-500 text-center py-4">No templates available</p>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {Object.entries(categories).map(([category, assets]) => (
              <div key={category}>
                <h3 className="text-xs font-medium text-gray-500 mb-2">{category}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {assets.map((asset) => (
                    <button
                      key={asset.url}
                      onClick={() => addAsset(asset.url)}
                      className="aspect-square bg-gray-800 hover:bg-gray-700 rounded-lg p-2 flex items-center justify-center transition group relative"
                      title={asset.name}
                    >
                      <img
                        src={asset.url}
                        alt={asset.name}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />
                      <span className="absolute bottom-1 left-1 right-1 text-[10px] text-gray-400 truncate opacity-0 group-hover:opacity-100 transition">
                        {asset.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Upload partner assets */}
            <div className="pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500 mb-2">
                Add partner assets to:<br/>
                <code className="text-[10px] text-gray-600">/images/partners/</code>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
