import { useState, useEffect, useRef } from 'react'
import { useEditorStore } from './store/editorStore'
import { FabricImage, IText, Rect } from 'fabric'
import { TEMPLATE_PRESETS, TemplatePreset } from './templates/presets'

interface Asset {
  name: string
  url: string
  category: string
}

// Static list of assets - could be loaded from API
const ASSETS: Asset[] = [
  // ShapeShift brand
  { name: 'Fox Logo', url: '/images/fox-logo.svg', category: 'ShapeShift' },
  { name: 'Mountains', url: '/images/mountains.webp', category: 'ShapeShift' },
  { name: 'Fox Moon', url: '/images/fox-moon.webp', category: 'ShapeShift' },
  
  // Katana partner
  { name: 'Logo', url: '/images/partners/katana/logo.svg', category: 'Katana' },
  { name: 'Logo Full', url: '/images/partners/katana/logo-full.svg', category: 'Katana' },
  { name: 'Social Icon', url: '/images/partners/katana/social-icon.svg', category: 'Katana' },
  { name: 'Token', url: '/images/partners/katana/token.svg', category: 'Katana' },
]

type Tab = 'templates' | 'assets'

interface AssetsPanelProps {
  initialTemplateId?: string | null
}

export function AssetsPanel({ initialTemplateId }: AssetsPanelProps) {
  const [activeTab, setActiveTab] = useState<Tab>('templates')
  const { canvas, canvasSize, setCanvasSize } = useEditorStore()
  const hasLoadedInitial = useRef(false)

  const loadTemplate = async (template: TemplatePreset) => {
    if (!canvas) return
    
    // Clear canvas
    canvas.clear()
    
    // Set canvas size
    setCanvasSize(template.canvasSize)
    canvas.setDimensions(template.canvasSize)
    canvas.backgroundColor = '#0A0B0D'
    
    // Load objects
    for (const objData of template.objects) {
      try {
        if (objData.type === 'rect') {
          const rect = new Rect({
            ...objData,
          })
          canvas.add(rect)
        } else if (objData.type === 'i-text') {
          const text = new IText(objData.text || '', {
            ...objData,
          })
          canvas.add(text)
        } else if (objData.type === 'image' && objData.src) {
          const img = await FabricImage.fromURL(objData.src, { crossOrigin: 'anonymous' })
          img.set({
            left: objData.left,
            top: objData.top,
            scaleX: objData.scaleX || 1,
            scaleY: objData.scaleY || 1,
            originX: objData.originX || 'left',
            originY: objData.originY || 'top',
          })
          canvas.add(img)
        }
      } catch (err) {
        console.error('Failed to load object:', err)
      }
    }
    
    canvas.requestRenderAll()
  }

  // Load initial template if provided
  useEffect(() => {
    if (!canvas || !initialTemplateId || hasLoadedInitial.current) return
    
    // Find matching preset
    const preset = TEMPLATE_PRESETS.find(p => p.id === initialTemplateId)
    if (preset) {
      hasLoadedInitial.current = true
      loadTemplate(preset)
    }
  }, [canvas, initialTemplateId])

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

  // Group assets by category
  const assetCategories = ASSETS.reduce((acc, asset) => {
    if (!acc[asset.category]) acc[asset.category] = []
    acc[asset.category].push(asset)
    return acc
  }, {} as Record<string, Asset[]>)

  // Group templates by category
  const templateCategories = TEMPLATE_PRESETS.reduce((acc, template) => {
    if (!acc[template.category]) acc[template.category] = []
    acc[template.category].push(template)
    return acc
  }, {} as Record<string, TemplatePreset[]>)

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-800">
        <button
          onClick={() => setActiveTab('templates')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition ${
            activeTab === 'templates'
              ? 'text-white border-b-2 border-blue-500'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Templates
        </button>
        <button
          onClick={() => setActiveTab('assets')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition ${
            activeTab === 'assets'
              ? 'text-white border-b-2 border-blue-500'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Assets
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 space-y-4">
        {activeTab === 'templates' && (
          <>
            {Object.entries(templateCategories).map(([category, templates]) => (
              <div key={category}>
                <h3 className="text-xs font-medium text-gray-500 mb-2">{category}</h3>
                <div className="space-y-2">
                  {templates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => loadTemplate(template)}
                      className="w-full bg-gray-800 hover:bg-gray-700 rounded-lg p-3 text-left transition group"
                    >
                      <div className="text-sm font-medium text-white group-hover:text-blue-400 transition">
                        {template.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {template.canvasSize.width}×{template.canvasSize.height}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        {activeTab === 'assets' && (
          <>
            {Object.entries(assetCategories).map(([category, assets]) => (
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
          </>
        )}
      </div>
    </div>
  )
}
