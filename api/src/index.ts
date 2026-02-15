import express from 'express';
import cors from 'cors';
import { BrandConfigSchema, GenerateRequestSchema, TemplateDefinition } from './types.js';
import templates from './templates.json' assert { type: 'json' };

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Get all templates
app.get('/api/templates', (_req, res) => {
  res.json(templates as TemplateDefinition[]);
});

// Get single template
app.get('/api/templates/:id', (req, res) => {
  const template = (templates as TemplateDefinition[]).find(t => t.id === req.params.id);
  if (!template) {
    return res.status(404).json({ error: 'Template not found' });
  }
  res.json(template);
});

// Validate brand config
app.post('/api/brand/validate', (req, res) => {
  const result = BrandConfigSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ 
      valid: false, 
      errors: result.error.errors 
    });
  }
  res.json({ valid: true, brand: result.data });
});

// Generate asset (returns HTML that frontend will render)
app.post('/api/generate', (req, res) => {
  const result = GenerateRequestSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: result.error.errors });
  }
  
  const { templateId, brand, variables } = result.data;
  const template = (templates as TemplateDefinition[]).find(t => t.id === templateId);
  
  if (!template) {
    return res.status(404).json({ error: 'Template not found' });
  }
  
  // Return the config - frontend handles rendering
  res.json({
    templateId,
    brand,
    variables,
    template,
  });
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 API running on http://localhost:${PORT}`);
});
