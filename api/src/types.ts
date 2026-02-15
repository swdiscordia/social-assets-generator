import { z } from 'zod';

// Brand configuration schema
export const BrandConfigSchema = z.object({
  name: z.string(),
  tagline: z.string().optional(),
  logo: z.string(), // URL or base64
  colors: z.object({
    primary: z.string(),
    secondary: z.string(),
    accent: z.string().optional(),
    background: z.string(),
    text: z.string(),
  }),
  fonts: z.object({
    heading: z.string().optional(),
    body: z.string().optional(),
  }).optional(),
  website: z.string().optional(),
  twitter: z.string().optional(),
});

export type BrandConfig = z.infer<typeof BrandConfigSchema>;

// Template definition
export interface TemplateDefinition {
  id: string;
  name: string;
  description: string;
  category: 'social' | 'banner' | 'announcement' | 'quote';
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

// Asset generation request
export const GenerateRequestSchema = z.object({
  templateId: z.string(),
  brand: BrandConfigSchema,
  variables: z.record(z.string()),
});

export type GenerateRequest = z.infer<typeof GenerateRequestSchema>;
