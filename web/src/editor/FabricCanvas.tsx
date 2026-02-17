import { useEffect, useRef } from 'react'
import { Canvas, FabricObject } from 'fabric'
import { useEditorStore } from './store/editorStore'

// Configure Fabric defaults
FabricObject.prototype.set({
  transparentCorners: false,
  cornerColor: '#3B82F6',
  cornerStyle: 'circle',
  cornerSize: 10,
  borderColor: '#3B82F6',
  borderScaleFactor: 2,
})

export function FabricCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { setCanvas, setSelectedObjects, canvasSize } = useEditorStore()

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = new Canvas(canvasRef.current, {
      width: canvasSize.width,
      height: canvasSize.height,
      backgroundColor: '#0A0B0D',
      selection: true,
      preserveObjectStacking: true,
    })

    // Selection events
    canvas.on('selection:created', (e) => {
      setSelectedObjects(e.selected || [])
    })
    canvas.on('selection:updated', (e) => {
      setSelectedObjects(e.selected || [])
    })
    canvas.on('selection:cleared', () => {
      setSelectedObjects([])
    })
    canvas.on('object:modified', () => {
      // Force re-render of properties panel
      const active = canvas.getActiveObjects()
      setSelectedObjects([...active])
    })

    setCanvas(canvas)

    return () => {
      canvas.dispose()
      setCanvas(null)
    }
  }, [canvasSize.width, canvasSize.height])

  // Calculate scale to fit canvas in container
  const scale = Math.min(
    (containerRef.current?.clientWidth || 800) / canvasSize.width,
    (containerRef.current?.clientHeight || 600) / canvasSize.height,
    1
  ) * 0.9

  return (
    <div 
      ref={containerRef}
      className="flex-1 flex items-center justify-center bg-gray-950 overflow-hidden p-4"
    >
      <div 
        className="shadow-2xl"
        style={{ 
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        <canvas ref={canvasRef} />
      </div>
    </div>
  )
}
