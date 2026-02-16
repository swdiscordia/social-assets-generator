import { BACKGROUND_OPTIONS } from '../backgrounds'

interface MediaSelectorProps {
  value: string
  onChange: (url: string) => void
}

export function MediaSelector({ value, onChange }: MediaSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="block text-xs text-gray-400 mb-2">Select Background</label>
      <div className="grid grid-cols-4 gap-2">
        {BACKGROUND_OPTIONS.map((bg) => (
          <button
            key={bg.id}
            onClick={() => onChange(bg.url)}
            className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
              value === bg.url
                ? 'border-blue-500 ring-2 ring-blue-500/20'
                : 'border-gray-700 hover:border-gray-600'
            }`}
          >
            {bg.thumbnail ? (
              <img
                src={bg.thumbnail}
                alt={bg.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <span className="text-xs text-gray-500">None</span>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-black/60 py-1">
              <span className="text-[10px] text-white font-medium truncate px-1">
                {bg.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
