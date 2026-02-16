// Default background images for ShapeShift templates
export const DEFAULT_BACKGROUNDS = {
  mountains: '/images/mountains.webp',
  foxMoon: '/images/fox-moon.webp',
  gridPattern: '/images/grid-pattern.svg',
  foxLogo: '/images/fox-logo.svg',
}

// Available background options for media selector
export const BACKGROUND_OPTIONS = [
  {
    id: 'mountains',
    name: 'Mountains',
    url: DEFAULT_BACKGROUNDS.mountains,
    thumbnail: DEFAULT_BACKGROUNDS.mountains,
  },
  {
    id: 'fox-moon',
    name: 'Fox Moon',
    url: DEFAULT_BACKGROUNDS.foxMoon,
    thumbnail: DEFAULT_BACKGROUNDS.foxMoon,
  },
  {
    id: 'fox-logo',
    name: 'Fox Logo (Watermark)',
    url: DEFAULT_BACKGROUNDS.foxLogo,
    thumbnail: DEFAULT_BACKGROUNDS.foxLogo,
  },
  {
    id: 'grid-pattern',
    name: 'Grid Pattern',
    url: DEFAULT_BACKGROUNDS.gridPattern,
    thumbnail: DEFAULT_BACKGROUNDS.gridPattern,
  },
  {
    id: 'gradient',
    name: 'Gradient Only',
    url: '',
    thumbnail: '',
  },
]
