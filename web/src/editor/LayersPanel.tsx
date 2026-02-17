import { useEditorStore } from './store/editorStore'
import { useEffect, useState } from 'react'
import type { Object as FabricObject } from 'fabric'

export function LayersPanel() {
  const { canvas, selectedObjects } = useEditorStore()
  const [objects, setObjects] = useState<FabricObject[]>([])

  // Refresh objects list when canvas changes
  useEffect(() => {
    if (!canvas) return

    const updateObjects = () => {
      setObjects([...canvas.getObjects()].reverse())
    }

    updateObjects()
    canvas.on('object:added', updateObjects)
    canvas.on('object:removed', updateObjects)
    canvas.on('object:modified', updateObjects)

    return () => {
      canvas.off('object:added', updateObjects)
      canvas.off('object:removed', updateObjects)
      canvas.off('object:modified', updateObjects)
    }
  }, [canvas])

  const selectObject = (obj: FabricObject) => {
    if (!canvas) return
    canvas.setActiveObject(obj)
    canvas.requestRenderAll()
  }

  const deleteObject = (obj: FabricObject, e: React.MouseEvent) => {
    e.stopPropagation()
    if (!canvas) return
    canvas.remove(obj)
    canvas.requestRenderAll()
  }

  const moveUp = (obj: FabricObject, e: React.MouseEvent) => {
    e.stopPropagation()
    if (!canvas) return
    canvas.bringObjectForward(obj)
    canvas.requestRenderAll()
    setObjects([...canvas.getObjects()].reverse())
  }

  const moveDown = (obj: FabricObject, e: React.MouseEvent) => {
    e.stopPropagation()
    if (!canvas) return
    canvas.sendObjectBackwards(obj)
    canvas.requestRenderAll()
    setObjects([...canvas.getObjects()].reverse())
  }

  const getObjectName = (obj: FabricObject): string => {
    if (obj.type === 'i-text' || obj.type === 'text') {
      const text = (obj as any).text as string
      return text.length > 20 ? text.slice(0, 20) + '...' : text
    }
    if (obj.type === 'image') return 'Image'
    if (obj.type === 'rect') return 'Rectangle'
    if (obj.type === 'circle') return 'Circle'
    return obj.type || 'Object'
  }

  const getObjectIcon = (obj: FabricObject) => {
    if (obj.type === 'i-text' || obj.type === 'text') {
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    }
    if (obj.type === 'image') {
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
    return (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
      </svg>
    )
  }

  return (
    <div className="border-b border-gray-800">
      <div className="p-3 border-b border-gray-800">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Layers</h2>
      </div>
      
      <div className="max-h-64 overflow-y-auto">
        {objects.length === 0 ? (
          <div className="p-4 text-center text-gray-500 text-sm">
            No layers yet
          </div>
        ) : (
          <div className="p-2 space-y-1">
            {objects.map((obj, index) => {
              const isSelected = selectedObjects.includes(obj)
              return (
                <div
                  key={index}
                  onClick={() => selectObject(obj)}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer group transition ${
                    isSelected ? 'bg-blue-600' : 'hover:bg-gray-800'
                  }`}
                >
                  <span className={isSelected ? 'text-white' : 'text-gray-400'}>
                    {getObjectIcon(obj)}
                  </span>
                  <span className={`flex-1 text-sm truncate ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                    {getObjectName(obj)}
                  </span>
                  
                  {/* Actions */}
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition">
                    <button
                      onClick={(e) => moveUp(obj, e)}
                      className="p-1 hover:bg-gray-700 rounded"
                      title="Move up"
                    >
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => moveDown(obj, e)}
                      className="p-1 hover:bg-gray-700 rounded"
                      title="Move down"
                    >
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => deleteObject(obj, e)}
                      className="p-1 hover:bg-red-600 rounded"
                      title="Delete"
                    >
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
