import { useEditorStore } from './store/editorStore'
import { useEffect, useState } from 'react'

interface ObjectProps {
  left: number
  top: number
  width: number
  height: number
  angle: number
  scaleX: number
  scaleY: number
  opacity: number
  fill?: string
  fontSize?: number
  fontWeight?: string
  text?: string
}

export function PropertiesPanel() {
  const { canvas, selectedObjects } = useEditorStore()
  const [props, setProps] = useState<ObjectProps | null>(null)

  const obj = selectedObjects[0]

  useEffect(() => {
    if (!obj) {
      setProps(null)
      return
    }

    const updateProps = () => {
      const bounds = obj.getBoundingRect()
      setProps({
        left: Math.round(obj.left || 0),
        top: Math.round(obj.top || 0),
        width: Math.round(bounds.width),
        height: Math.round(bounds.height),
        angle: Math.round(obj.angle || 0),
        scaleX: obj.scaleX || 1,
        scaleY: obj.scaleY || 1,
        opacity: obj.opacity ?? 1,
        fill: (obj as any).fill,
        fontSize: (obj as any).fontSize,
        fontWeight: (obj as any).fontWeight,
        text: (obj as any).text,
      })
    }

    updateProps()
  }, [obj, selectedObjects])

  const updateObject = (key: string, value: any) => {
    if (!obj || !canvas) return
    obj.set(key as keyof typeof obj, value)
    canvas.requestRenderAll()
    // Force props update
    setProps(prev => prev ? { ...prev, [key]: value } : null)
  }

  if (!props || selectedObjects.length === 0) {
    return (
      <div className="flex-1 p-3">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Properties</h2>
        <p className="text-gray-500 text-sm">Select an object to edit</p>
      </div>
    )
  }

  const isText = obj?.type === 'i-text' || obj?.type === 'text'
  const isShape = obj?.type === 'rect' || obj?.type === 'circle'

  return (
    <div className="flex-1 p-3 overflow-y-auto">
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Properties</h2>
      
      <div className="space-y-4">
        {/* Position */}
        <div>
          <label className="text-xs text-gray-500 block mb-1">Position</label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-[10px] text-gray-600">X</span>
              <input
                type="number"
                value={props.left}
                onChange={(e) => updateObject('left', Number(e.target.value))}
                className="w-full bg-gray-800 text-white text-sm px-2 py-1 rounded border border-gray-700"
              />
            </div>
            <div>
              <span className="text-[10px] text-gray-600">Y</span>
              <input
                type="number"
                value={props.top}
                onChange={(e) => updateObject('top', Number(e.target.value))}
                className="w-full bg-gray-800 text-white text-sm px-2 py-1 rounded border border-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Size */}
        <div>
          <label className="text-xs text-gray-500 block mb-1">Size</label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-[10px] text-gray-600">W</span>
              <input
                type="number"
                value={props.width}
                disabled
                className="w-full bg-gray-800 text-gray-400 text-sm px-2 py-1 rounded border border-gray-700"
              />
            </div>
            <div>
              <span className="text-[10px] text-gray-600">H</span>
              <input
                type="number"
                value={props.height}
                disabled
                className="w-full bg-gray-800 text-gray-400 text-sm px-2 py-1 rounded border border-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Rotation */}
        <div>
          <label className="text-xs text-gray-500 block mb-1">Rotation</label>
          <input
            type="number"
            value={props.angle}
            onChange={(e) => updateObject('angle', Number(e.target.value))}
            className="w-full bg-gray-800 text-white text-sm px-2 py-1 rounded border border-gray-700"
          />
        </div>

        {/* Opacity */}
        <div>
          <label className="text-xs text-gray-500 block mb-1">Opacity</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={props.opacity}
            onChange={(e) => updateObject('opacity', Number(e.target.value))}
            className="w-full"
          />
          <span className="text-xs text-gray-500">{Math.round(props.opacity * 100)}%</span>
        </div>

        {/* Text properties */}
        {isText && (
          <>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Font Size</label>
              <input
                type="number"
                value={props.fontSize || 48}
                onChange={(e) => updateObject('fontSize', Number(e.target.value))}
                className="w-full bg-gray-800 text-white text-sm px-2 py-1 rounded border border-gray-700"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Text Color</label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={props.fill || '#FFFFFF'}
                  onChange={(e) => updateObject('fill', e.target.value)}
                  className="w-10 h-8 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={props.fill || '#FFFFFF'}
                  onChange={(e) => updateObject('fill', e.target.value)}
                  className="flex-1 bg-gray-800 text-white text-sm px-2 py-1 rounded border border-gray-700"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Font Weight</label>
              <select
                value={props.fontWeight || 'normal'}
                onChange={(e) => updateObject('fontWeight', e.target.value)}
                className="w-full bg-gray-800 text-white text-sm px-2 py-1 rounded border border-gray-700"
              >
                <option value="normal">Normal</option>
                <option value="500">Medium</option>
                <option value="600">Semi Bold</option>
                <option value="700">Bold</option>
                <option value="800">Extra Bold</option>
              </select>
            </div>
          </>
        )}

        {/* Shape properties */}
        {isShape && (
          <div>
            <label className="text-xs text-gray-500 block mb-1">Fill Color</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={props.fill || '#3B82F6'}
                onChange={(e) => updateObject('fill', e.target.value)}
                className="w-10 h-8 rounded cursor-pointer"
              />
              <input
                type="text"
                value={props.fill || '#3B82F6'}
                onChange={(e) => updateObject('fill', e.target.value)}
                className="flex-1 bg-gray-800 text-white text-sm px-2 py-1 rounded border border-gray-700"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
