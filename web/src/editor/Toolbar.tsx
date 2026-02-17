import { useEditorStore } from './store/editorStore'
import { IText, FabricImage, Rect } from 'fabric'

interface ToolbarProps {
  onBack?: () => void
}

export function Toolbar({ onBack }: ToolbarProps) {
  const { canvas, canvasSize, setCanvasSize } = useEditorStore()

  const addText = () => {
    if (!canvas) return
    const text = new IText('Double-click to edit', {
      left: canvasSize.width / 2,
      top: canvasSize.height / 2,
      originX: 'center',
      originY: 'center',
      fontFamily: 'Inter, sans-serif',
      fontSize: 48,
      fill: '#FFFFFF',
      fontWeight: '700',
    })
    canvas.add(text)
    canvas.setActiveObject(text)
    canvas.requestRenderAll()
  }

  const addRectangle = () => {
    if (!canvas) return
    const rect = new Rect({
      left: canvasSize.width / 2,
      top: canvasSize.height / 2,
      originX: 'center',
      originY: 'center',
      width: 200,
      height: 200,
      fill: '#3B82F6',
      rx: 10,
      ry: 10,
    })
    canvas.add(rect)
    canvas.setActiveObject(rect)
    canvas.requestRenderAll()
  }

  const addImageFromUrl = async (url: string) => {
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
      const maxSize = Math.min(canvasSize.width, canvasSize.height) * 0.5
      if (img.width && img.width > maxSize) {
        img.scaleToWidth(maxSize)
      }
      if (img.height && img.height > maxSize) {
        img.scaleToHeight(maxSize)
      }
      canvas.add(img)
      canvas.setActiveObject(img)
      canvas.requestRenderAll()
    } catch (err) {
      console.error('Failed to load image:', err)
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string
      addImageFromUrl(dataUrl)
    }
    reader.readAsDataURL(file)
    e.target.value = ''
  }

  const exportPng = () => {
    if (!canvas) return
    const dataUrl = canvas.toDataURL({
      format: 'png',
      multiplier: 2,
    })
    const link = document.createElement('a')
    link.download = 'design.png'
    link.href = dataUrl
    link.click()
  }

  const deleteSelected = () => {
    if (!canvas) return
    const activeObjects = canvas.getActiveObjects()
    if (activeObjects.length) {
      activeObjects.forEach((obj) => canvas.remove(obj))
      canvas.discardActiveObject()
      canvas.requestRenderAll()
    }
  }

  const sizes = [
    { label: '1:1 (1080×1080)', width: 1080, height: 1080 },
    { label: '16:9 (1200×675)', width: 1200, height: 675 },
    { label: '9:16 (1080×1920)', width: 1080, height: 1920 },
    { label: '4:5 (1080×1350)', width: 1080, height: 1350 },
  ]

  return (
    <div className="h-14 bg-gray-900 border-b border-gray-800 flex items-center px-4 gap-2">
      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-3 py-1.5 rounded-lg transition flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
      )}

      {onBack && <div className="w-px h-6 bg-gray-700 mx-2" />}

      {/* Canvas Size */}
      <select
        value={`${canvasSize.width}x${canvasSize.height}`}
        onChange={(e) => {
          const [w, h] = e.target.value.split('x').map(Number)
          setCanvasSize({ width: w, height: h })
        }}
        className="bg-gray-800 text-white text-sm px-3 py-1.5 rounded-lg border border-gray-700"
      >
        {sizes.map((s) => (
          <option key={s.label} value={`${s.width}x${s.height}`}>
            {s.label}
          </option>
        ))}
      </select>

      <div className="w-px h-6 bg-gray-700 mx-2" />

      {/* Add Elements */}
      <button
        onClick={addText}
        className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-3 py-1.5 rounded-lg transition flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        Text
      </button>

      <label className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-3 py-1.5 rounded-lg transition flex items-center gap-2 cursor-pointer">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Image
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </label>

      <button
        onClick={addRectangle}
        className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-3 py-1.5 rounded-lg transition flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
        </svg>
        Shape
      </button>

      <div className="w-px h-6 bg-gray-700 mx-2" />

      {/* Actions */}
      <button
        onClick={deleteSelected}
        className="bg-gray-800 hover:bg-red-600 text-white text-sm px-3 py-1.5 rounded-lg transition flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        Delete
      </button>

      <div className="flex-1" />

      {/* Export */}
      <button
        onClick={exportPng}
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-lg transition flex items-center gap-2 font-medium"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Export PNG
      </button>
    </div>
  )
}
