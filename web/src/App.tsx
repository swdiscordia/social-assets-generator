import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { BrandConfig, TemplateDefinition, DEFAULT_BRAND } from './types'
import { GalleryView } from './GalleryView'
import { Editor } from './editor'

const fetchTemplates = async (): Promise<TemplateDefinition[]> => {
  const res = await fetch('/api/templates')
  if (!res.ok) throw new Error('Failed to fetch templates')
  return res.json()
}

type AppMode = 'gallery' | 'canvas'

export default function App() {
  const [brand, setBrand] = useState<BrandConfig>(DEFAULT_BRAND)
  const [mode, setMode] = useState<AppMode>('gallery')
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null)
  const [brandPanelOpen, setBrandPanelOpen] = useState(false)

  const { data: templates, isLoading } = useQuery({
    queryKey: ['templates'],
    queryFn: fetchTemplates,
  })

  // Click template in gallery → open in canvas
  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplateId(templateId)
    setMode('canvas')
  }

  // Open blank canvas
  const handleOpenBlankCanvas = () => {
    setSelectedTemplateId(null)
    setMode('canvas')
  }

  // Back to gallery
  const handleBackToGallery = () => {
    setMode('gallery')
    setSelectedTemplateId(null)
  }

  const updateBrandColor = (key: keyof BrandConfig['colors'], value: string) => {
    setBrand(prev => ({
      ...prev,
      colors: { ...prev.colors, [key]: value },
    }))
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white">Loading templates...</div>
      </div>
    )
  }

  // Canvas mode = fullscreen editor
  if (mode === 'canvas') {
    return (
      <Editor 
        onBack={handleBackToGallery}
        templateId={selectedTemplateId}
        brand={brand}
        templates={templates || []}
      />
    )
  }

  // Gallery mode
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-[1600px] mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Brand Asset Generator</h1>
            <p className="text-gray-500 text-sm">Generate on-brand social media assets</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Brand Settings Toggle */}
            <button
              onClick={() => setBrandPanelOpen(!brandPanelOpen)}
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2"
            >
              <div
                className="w-4 h-4 rounded-full border border-gray-600"
                style={{ background: brand.colors.primary }}
              />
              {brand.name}
            </button>

            {/* Blank Canvas Button */}
            <button
              onClick={handleOpenBlankCanvas}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Canvas
            </button>
          </div>
        </div>

        {/* Brand Settings Panel */}
        {brandPanelOpen && (
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Brand Settings</h2>
              <button
                onClick={() => setBrandPanelOpen(false)}
                className="text-gray-500 hover:text-white transition"
              >
                Close
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Brand Name</label>
                <input
                  type="text"
                  value={brand.name}
                  onChange={(e) => setBrand(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-gray-800 rounded-lg px-3 py-2 text-white text-sm border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Tagline</label>
                <input
                  type="text"
                  value={brand.tagline || ''}
                  onChange={(e) => setBrand(prev => ({ ...prev, tagline: e.target.value }))}
                  className="w-full bg-gray-800 rounded-lg px-3 py-2 text-white text-sm border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Logo URL</label>
                <input
                  type="text"
                  value={brand.logo}
                  onChange={(e) => setBrand(prev => ({ ...prev, logo: e.target.value }))}
                  className="w-full bg-gray-800 rounded-lg px-3 py-2 text-white text-xs border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Primary</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={brand.colors.primary}
                    onChange={(e) => updateBrandColor('primary', e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={brand.colors.primary}
                    onChange={(e) => updateBrandColor('primary', e.target.value)}
                    className="flex-1 bg-gray-800 rounded-lg px-2 py-1 text-xs border border-gray-700"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Accent</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={brand.colors.accent || '#00D395'}
                    onChange={(e) => updateBrandColor('accent', e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={brand.colors.accent || '#00D395'}
                    onChange={(e) => updateBrandColor('accent', e.target.value)}
                    className="flex-1 bg-gray-800 rounded-lg px-2 py-1 text-xs border border-gray-700"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Background</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={brand.colors.background}
                    onChange={(e) => updateBrandColor('background', e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={brand.colors.background}
                    onChange={(e) => updateBrandColor('background', e.target.value)}
                    className="flex-1 bg-gray-800 rounded-lg px-2 py-1 text-xs border border-gray-700"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery */}
        {templates && (
          <GalleryView
            brand={brand}
            templates={templates}
            onSelectTemplate={handleSelectTemplate}
          />
        )}
      </div>
    </div>
  )
}
