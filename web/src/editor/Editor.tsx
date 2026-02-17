import { Toolbar } from './Toolbar'
import { FabricCanvas } from './FabricCanvas'
import { AssetsPanel } from './AssetsPanel'
import { LayersPanel } from './LayersPanel'
import { PropertiesPanel } from './PropertiesPanel'

interface EditorProps {
  onBack?: () => void
}

export function Editor({ onBack }: EditorProps) {
  return (
    <div className="h-screen flex flex-col bg-gray-950 text-white">
      <Toolbar onBack={onBack} />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Assets */}
        <AssetsPanel />
        
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
