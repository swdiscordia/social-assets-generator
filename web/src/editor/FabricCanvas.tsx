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
  const fabricRef = useRef<Canvas | null>(null)
  const { canvas, setCanvas, setSelectedObjects, canvasSize } = useEditorStore()

  // Initialize canvas once
  useEffect(() => {
    if (!canvasRef.current || fabricRef.current) return

    const fabricCanvas = new Canvas(canvasRef.current, {
      width: canvasSize.width,
      height: canvasSize.height,
      backgroundColor: '#0A0B0D',
      selection: true,
      preserveObjectStacking: true,
    })

    // Selection events
    fabricCanvas.on('selection:created', (e) => {
      setSelectedObjects(e.selected || [])
    })
    fabricCanvas.on('selection:updated', (e) => {
      setSelectedObjects(e.selected || [])
    })
    fabricCanvas.on('selection:cleared', () => {
      setSelectedObjects([])
    })
    fabricCanvas.on('object:modified', () => {
      const active = fabricCanvas.getActiveObjects()
      setSelectedObjects([...active])
    })

    fabricRef.current = fabricCanvas
    setCanvas(fabricCanvas)

    return () => {
      fabricCanvas.dispose()
      fabricRef.current = null
      setCanvas(null)
    }
  }, []) // Only run once on mount

  // Update canvas size when canvasSize changes (without recreating)
  useEffect(() => {
    if (!fabricRef.current) return
    fabricRef.current.setDimensions({
      width: canvasSize.width,
      height: canvasSize.height,
    })
    fabricRef.current.requestRenderAll()
  }, [canvasSize.width, canvasSize.height])

  // Calculate scale to fit canvas in container
  const containerWidth = containerRef.current?.clientWidth || 800
  const containerHeight = containerRef.current?.clientHeight || 600
  const scale = Math.min(
    containerWidth / canvasSize.width,
    containerHeight / canvasSize.height,
    1
  ) * 0.85

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
