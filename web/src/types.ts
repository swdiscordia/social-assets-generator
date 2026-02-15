export interface BrandConfig {
  name: string;
  tagline?: string;
  logo: string;
  colors: {
    primary: string;
    secondary: string;
    accent?: string;
    background: string;
    text: string;
  };
  fonts?: {
    heading?: string;
    body?: string;
  };
  website?: string;
  twitter?: string;
}

export type TemplateCategory =
  | 'chain'
  | 'feature'
  | 'swap'
  | 'portfolio'
  | 'wallet'
  | 'multichain'
  | 'thread'
  | 'stats'
  | 'community'
  | 'announcement'
  | 'quote';

export interface TemplateDefinition {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  aspectRatio: '1:1' | '16:9' | '9:16' | '4:5';
  variables: TemplateVariable[];
}

export interface TemplateVariable {
  name: string;
  type: 'text' | 'image' | 'color';
  label: string;
  default?: string;
  maxLength?: number;
}

export interface GeneratedAsset {
  templateId: string;
  brand: BrandConfig;
  variables: Record<string, string>;
}

// Default brand for ShapeShift example
export const DEFAULT_BRAND: BrandConfig = {
  name: 'ShapeShift',
  tagline: 'Your Keys. Your Crypto.',
  logo: 'https://assets.coincap.io/assets/icons/fox@2x.png',
  colors: {
    primary: '#3761F9',
    secondary: '#1D4ED8',
    accent: '#00D395',
    background: '#0A0B0D',
    text: '#FFFFFF',
  },
  website: 'https://shapeshift.com',
  twitter: '@ShapeShift',
};
