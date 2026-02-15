import { useState, useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { toPng } from 'html-to-image'
import { BrandConfig, TemplateDefinition, DEFAULT_BRAND } from './types'
import { QuoteCard } from './templates/QuoteCard'
import { AnnouncementBanner } from './templates/AnnouncementBanner'

const fetchTemplates = async (): Promise<TemplateDefinition[]> => {
  const res = await fetch('/api/templates')
  if (!res.ok) throw new Error('Failed to fetch templates')
  return res.json()
}

export default function App() {
  const [brand, setBrand] = useState<BrandConfig>(DEFAULT_BRAND)
  const [selectedTemplate, setSelectedTemplate] = useState<string>('quote-card-1')
  const [variables, setVariables] = useState<Record<string, string>>({})
  const assetRef = useRef<HTMLDivElement>(null)

  const { data: templates, isLoading } = useQuery({
    queryKey: ['templates'],
    queryFn: fetchTemplates,
  })

  const currentTemplate = templates?.find(t => t.id === selectedTemplate)

  const handleExport = async () => {
    if (!assetRef.current) return
    try {
      const dataUrl = await toPng(assetRef.current, { 
        pixelRatio: 2,
        backgroundColor: brand.colors.background 
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
      colors: { ...prev.colors, [key]: value }
    }))
  }

  const renderTemplate = () => {
    const props = { brand, variables }
    switch (selectedTemplate) {
      case 'quote-card-1':
        return <QuoteCard {...props} />
      case 'announcement-banner-1':
        return <AnnouncementBanner {...props} />
      default:
        return <div className="text-white">Select a template</div>
    }
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
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Brand Asset Generator</h1>
        <p className="text-gray-400 mb-8">Generate on-brand social media assets instantly</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Brand Config */}
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Brand Settings</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Brand Name</label>
                  <input
                    type="text"
                    value={brand.name}
                    onChange={(e) => setBrand(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">Tagline</label>
                  <input
                    type="text"
                    value={brand.tagline || ''}
                    onChange={(e) => setBrand(prev => ({ ...prev, tagline: e.target.value }))}
                    className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">Logo URL</label>
                  <input
                    type="text"
                    value={brand.logo}
                    onChange={(e) => setBrand(prev => ({ ...prev, logo: e.target.value }))}
                    className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:border-blue-500 focus:outline-none text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Primary</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={brand.colors.primary}
                        onChange={(e) => updateBrandColor('primary', e.target.value)}
                        className="w-10 h-10 rounded cursor-pointer"
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
                    <label className="block text-sm text-gray-400 mb-1">Background</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={brand.colors.background}
                        onChange={(e) => updateBrandColor('background', e.target.value)}
                        className="w-10 h-10 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={brand.colors.background}
                        onChange={(e) => updateBrandColor('background', e.target.value)}
                        className="flex-1 bg-gray-800 rounded-lg px-2 py-1 text-xs border border-gray-700"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Accent</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={brand.colors.accent || '#00D395'}
                        onChange={(e) => updateBrandColor('accent', e.target.value)}
                        className="w-10 h-10 rounded cursor-pointer"
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
                    <label className="block text-sm text-gray-400 mb-1">Text</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={brand.colors.text}
                        onChange={(e) => updateBrandColor('text', e.target.value)}
                        className="w-10 h-10 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={brand.colors.text}
                        onChange={(e) => updateBrandColor('text', e.target.value)}
                        className="flex-1 bg-gray-800 rounded-lg px-2 py-1 text-xs border border-gray-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Template Selection */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Template</h2>
              <div className="space-y-2">
                {templates?.map(template => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                      selectedTemplate === template.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    <div className="font-medium">{template.name}</div>
                    <div className="text-sm opacity-70">{template.aspectRatio}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Template Variables */}
            {currentTemplate && (
              <div className="bg-gray-900 rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Content</h2>
                <div className="space-y-4">
                  {currentTemplate.variables.map(v => (
                    <div key={v.name}>
                      <label className="block text-sm text-gray-400 mb-1">{v.label}</label>
                      <textarea
                        value={variables[v.name] ?? v.default ?? ''}
                        onChange={(e) => updateVariable(v.name, e.target.value)}
                        maxLength={v.maxLength}
                        rows={v.name === 'quote' ? 3 : 2}
                        className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
                      />
                      {v.maxLength && (
                        <div className="text-xs text-gray-500 mt-1">
                          {(variables[v.name] ?? v.default ?? '').length}/{v.maxLength}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Center/Right - Preview */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Preview</h2>
                <button
                  onClick={handleExport}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Export PNG
                </button>
              </div>

              {/* Asset Preview */}
              <div className="flex items-center justify-center bg-gray-800 rounded-lg p-8 min-h-[400px]">
                <div ref={assetRef}>
                  {renderTemplate()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
