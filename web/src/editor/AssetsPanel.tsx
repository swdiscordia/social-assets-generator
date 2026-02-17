import { useEditorStore } from './store/editorStore'
import { FabricImage } from 'fabric'

interface Asset {
  name: string
  url: string
  category: string
}

// Assets library
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

export function AssetsPanel() {
  const { canvas, canvasSize } = useEditorStore()

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

  // Group by category
  const categories = ASSETS.reduce((acc, asset) => {
    if (!acc[asset.category]) acc[asset.category] = []
    acc[asset.category].push(asset)
    return acc
  }, {} as Record<string, Asset[]>)

  return (
    <div className="w-56 bg-gray-900 border-r border-gray-800 flex flex-col overflow-hidden">
      <div className="p-3 border-b border-gray-800">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Assets</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 space-y-4">
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
      </div>
    </div>
  )
}
