import { useEffect, useRef, useCallback } from 'react'
import { createRoot } from 'react-dom/client'
import { toPng } from 'html-to-image'
import { Toolbar } from './Toolbar'
import { FabricCanvas } from './FabricCanvas'
import { AssetsPanel } from './AssetsPanel'
import { LayersPanel } from './LayersPanel'
import { PropertiesPanel } from './PropertiesPanel'
import { useEditorStore } from './store/editorStore'
import { templateRegistry } from '../templates/registry'
import { DIMENSIONS } from '../templates/shared'
import { BrandConfig, TemplateDefinition } from '../types'
import { FabricImage } from 'fabric'

interface EditorProps {
  onBack?: () => void
  templateId?: string | null
  brand: BrandConfig
  templates: TemplateDefinition[]
}

export function Editor({ onBack, templateId, brand, templates }: EditorProps) {
  const { canvas, setCanvasSize } = useEditorStore()
  const loadedTemplateRef = useRef<string | null>(null)

  // Load template into canvas
  const loadTemplate = useCallback(async (id: string) => {
    if (!canvas) return
    
    const template = templates.find(t => t.id === id)
    const Component = templateRegistry[id]
    
    if (!template || !Component) {
      console.error(`Template not found: ${id}`)
      return
    }

    // Clear existing canvas
    canvas.clear()
    loadedTemplateRef.current = id

    // Get template dimensions
    const dims = DIMENSIONS[template.aspectRatio as keyof typeof DIMENSIONS] || DIMENSIONS['1:1']
    
    // Update canvas size
    setCanvasSize(dims)
    canvas.setDimensions(dims)

    // Get default variables
    const defaultVars: Record<string, string> = {}
    template.variables.forEach(v => {
      if (v.default) defaultVars[v.name] = v.default
    })

    // Render template to image
    const container = document.createElement('div')
    container.style.position = 'absolute'
    container.style.left = '-9999px'
    container.style.top = '-9999px'
    container.style.width = `${dims.width}px`
    container.style.height = `${dims.height}px`
    document.body.appendChild(container)

    const root = createRoot(container)
    root.render(<Component brand={brand} variables={defaultVars} />)

    // Wait for render then capture
    await new Promise(resolve => setTimeout(resolve, 150))
    
    try {
      const dataUrl = await toPng(container, {
        width: dims.width,
        height: dims.height,
        pixelRatio: 1,
      })
      
      // Add as background image
      const img = await FabricImage.fromURL(dataUrl)
      img.set({
        left: 0,
        top: 0,
        selectable: false,
        evented: false,
        name: 'background',
      })
      canvas.add(img)
      canvas.sendObjectToBack(img)
      canvas.requestRenderAll()
    } catch (err) {
      console.error('Failed to load template:', err)
    } finally {
      root.unmount()
      document.body.removeChild(container)
    }
  }, [canvas, templates, brand, setCanvasSize])

  // Load initial template when canvas is ready
  useEffect(() => {
    if (!canvas || !templateId || loadedTemplateRef.current === templateId) return
    loadTemplate(templateId)
  }, [canvas, templateId, loadTemplate])

  // Handle loading a different template from AssetsPanel
  const handleLoadTemplate = (newTemplateId: string) => {
    if (loadedTemplateRef.current === newTemplateId) return
    loadTemplate(newTemplateId)
  }

  return (
    <div className="h-screen flex flex-col bg-gray-950 text-white">
      <Toolbar onBack={onBack} />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Templates & Assets */}
        <AssetsPanel 
          templates={templates}
          brand={brand}
          onLoadTemplate={handleLoadTemplate}
        />
        
        {/* Canvas Area */}
        <FabricCanvas />
        
        {/* Right Sidebar - Layers & Properties */}
        <div className="w-64 bg-gray-900 border-l border-gray-800 flex flex-col">
          <LayersPanel />
          <PropertiesPanel />
        </div>
      </div>
    </div>
  )
}
