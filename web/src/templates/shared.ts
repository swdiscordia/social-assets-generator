import { BrandConfig } from '../types'

export interface TemplateProps {
  brand: BrandConfig
  variables: Record<string, string>
}

export const DIMENSIONS = {
  '16:9': { width: 1200, height: 675 },
  '1:1': { width: 1080, height: 1080 },
  '9:16': { width: 1080, height: 1920 },
  '4:5': { width: 1080, height: 1350 },
} as const

export const FONT_FAMILY = "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"

export function hexAlpha(hex: string, alpha: number): string {
  const a = Math.round(alpha * 255).toString(16).padStart(2, '0')
  return `${hex}${a}`
}
