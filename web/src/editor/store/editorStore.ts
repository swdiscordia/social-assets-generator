import { create } from 'zustand'
import type { Canvas, Object as FabricObject } from 'fabric'

interface EditorState {
  canvas: Canvas | null
  selectedObjects: FabricObject[]
  zoom: number
  canvasSize: { width: number; height: number }
  
  // Actions
  setCanvas: (canvas: Canvas | null) => void
  setSelectedObjects: (objects: FabricObject[]) => void
  setZoom: (zoom: number) => void
  setCanvasSize: (size: { width: number; height: number }) => void
}

export const useEditorStore = create<EditorState>((set) => ({
  canvas: null,
  selectedObjects: [],
  zoom: 1,
  canvasSize: { width: 1080, height: 1080 },
  
  setCanvas: (canvas) => set({ canvas }),
  setSelectedObjects: (objects) => set({ selectedObjects: objects }),
  setZoom: (zoom) => set({ zoom }),
  setCanvasSize: (size) => set({ canvasSize: size }),
}))
