import { useState, useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { toPng } from 'html-to-image'
import { BrandConfig, TemplateDefinition, DEFAULT_BRAND } from './types'
import { templateRegistry } from './templates/registry'
import { GalleryView } from './GalleryView'
import { MediaSelector } from './components/MediaSelector'

const fetchTemplates = async (): Promise<TemplateDefinition[]> => {
  const res = await fetch('/api/templates')
  if (!res.ok) throw new Error('Failed to fetch templates')
  return res.json()
}

type AppMode = 'gallery' | 'editor'

export default function App() {
  const [brand, setBrand] = useState<BrandConfig>(DEFAULT_BRAND)
  const [mode, setMode] = useState<AppMode>('gallery')
  const [selectedTemplate, setSelectedTemplate] = useState<string>('chain-launch-hero')
  const [variables, setVariables] = useState<Record<string, string>>({})
  const [brandPanelOpen, setBrandPanelOpen] = useState(false)
  const assetRef = useRef<HTMLDivElement>(null)

  const { data: templates, isLoading } = useQuery({
    queryKey: ['templates'],
    queryFn: fetchTemplates,
  })

  const currentTemplate = templates?.find(t => t.id === selectedTemplate)

  const handleSelectTemplate = (templateId: string) => {
    const template = templates?.find(t => t.id === templateId)
    if (!template) return

    setSelectedTemplate(templateId)
    const defaultVars: Record<string, string> = {}
    template.variables.forEach(v => {
      if (v.default) defaultVars[v.name] = v.default
    })
    setVariables(defaultVars)
    setMode('editor')
  }

  const handleExport = async () => {
    if (!assetRef.current) return
    try {
      const dataUrl = await toPng(assetRef.current, {
        pixelRatio: 2,
        backgroundColor: brand.colors.background,
      })
      const link = document.createElement('a')
      link.download = `${brand.name}-${selectedTemplate}.png`
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error('Export failed:', err)
    }
  }

  const updateVariable = (name: string, value: string) => {
    setVariables(prev => ({ ...prev, [name]: value }))
  }

  const updateBrandColor = (key: keyof BrandConfig['colors'], value: string) => {
    setBrand(prev => ({
      ...prev,
      colors: { ...prev.colors, [key]: value },
    }))
  }

  const renderTemplate = () => {
    const Component = templateRegistry[selectedTemplate]
    if (!Component) return <div className="text-gray-500">Template not found</div>
    return <Component brand={brand} variables={variables} />
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-white">Loading templates...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-[1600px] mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Brand Asset Generator</h1>
            <p className="text-gray-500 text-sm">Generate on-brand social media assets instantly</p>
          </div>

          <div className="flex items-center gap-3">
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

            <div className="flex bg-gray-800 rounded-lg p-0.5">
              <button
                onClick={() => setMode('gallery')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
                  mode === 'gallery' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Gallery
              </button>
              <button
                onClick={() => setMode('editor')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
                  mode === 'editor' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Editor
              </button>
            </div>
          </div>
        </div>

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

        {mode === 'gallery' && templates && (
          <GalleryView
            brand={brand}
            templates={templates}
            onSelectTemplate={handleSelectTemplate}
          />
        )}

        {mode === 'editor' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Template</h2>
                  <button
                    onClick={() => setMode('gallery')}
                    className="text-xs text-blue-400 hover:text-blue-300 transition"
                  >
                    Browse all
                  </button>
                </div>
                <div className="text-white font-medium">{currentTemplate?.name}</div>
                <div className="text-xs text-gray-500 mt-1">{currentTemplate?.aspectRatio} · {currentTemplate?.category}</div>
              </div>

              {currentTemplate && (
                <div className="bg-gray-900 rounded-xl p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">Content</h2>
                  <div className="space-y-3">
                    {currentTemplate.variables.map(v => (
                      <div key={v.name}>
                        <label className="block text-xs text-gray-400 mb-1">{v.label}</label>
                        {v.type === 'image' ? (
                          <>
                            {v.name === 'backgroundImage' ? (
                              <MediaSelector
                                value={variables[v.name] ?? v.default ?? ''}
                                onChange={(url) => updateVariable(v.name, url)}
                              />
                            ) : (
                              <div className="space-y-2">
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0]
                                    if (file) {
                                      const reader = new FileReader()
                                      reader.onload = (event) => {
                                        updateVariable(v.name, event.target?.result as string)
                                      }
                                      reader.readAsDataURL(file)
                                    }
                                  }}
                                  className="w-full text-xs text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                                />
                                {variables[v.name] && (
                                  <img 
                                    src={variables[v.name]} 
                                    alt="Preview" 
                                    className="w-full h-20 object-contain rounded bg-gray-800"
                                  />
                                )}
                              </div>
                            )}
                          </>
                        ) : (
                          <textarea
                            value={variables[v.name] ?? v.default ?? ''}
                            onChange={(e) => updateVariable(v.name, e.target.value)}
                            maxLength={v.maxLength}
                            rows={v.name.includes('description') || v.name.includes('content') || v.name.includes('quote') ? 3 : 1}
                            className="w-full bg-gray-800 rounded-lg px-3 py-2 text-white text-sm border border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
                          />
                        )}
                        {v.maxLength && (
                          <div className="text-xs text-gray-600 mt-0.5">
                            {(variables[v.name] ?? v.default ?? '').length}/{v.maxLength}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-3">
              <div className="bg-gray-900 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Preview</h2>
                  <button
                    onClick={handleExport}
                    className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Export PNG
                  </button>
                </div>

                <div className="flex items-center justify-center bg-gray-800 rounded-lg p-6 min-h-[400px] overflow-auto">
                  <div ref={assetRef} style={{ flexShrink: 0 }}>
                    {renderTemplate()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
