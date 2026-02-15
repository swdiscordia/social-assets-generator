# Brand Asset Generator

Generate on-brand social media assets instantly. Input your brand settings (logo, colors, fonts) and get ready-to-use assets.

## Features

- 🎨 Template-based generation (consistent, not AI-slop)
- 🎯 Brand-aware: respects your colors, logo, typography
- 📦 Batch export (coming soon)
- 🖼️ Multiple formats: 1:1, 16:9, 9:16, 4:5

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install all dependencies
npm run install:all

# Or manually:
npm install
cd api && npm install
cd ../web && npm install
```

### Development

```bash
# Run both API and web
npm run dev

# Or separately:
cd api && npm run dev    # http://localhost:3001
cd web && npm run dev    # http://localhost:5173
```

### Usage

1. Open http://localhost:5173
2. Configure your brand (logo URL, colors, name)
3. Select a template
4. Edit the content
5. Export as PNG

## Project Structure

```
brand-assets-generator/
├── api/                    # Express backend
│   └── src/
│       ├── index.ts        # API routes
│       ├── types.ts        # Shared types
│       └── templates.json  # Template definitions
├── web/                    # React frontend
│   └── src/
│       ├── App.tsx         # Main app
│       ├── types.ts        # TypeScript types
│       └── templates/      # React template components
│           ├── QuoteCard.tsx
│           └── AnnouncementBanner.tsx
└── README.md
```

## Adding New Templates

1. Add template definition to `api/src/templates.json`
2. Create React component in `web/src/templates/`
3. Add case to `renderTemplate()` in `App.tsx`

Example template definition:
```json
{
  "id": "my-template",
  "name": "My Template",
  "description": "Description here",
  "category": "social",
  "aspectRatio": "1:1",
  "variables": [
    {
      "name": "headline",
      "type": "text",
      "label": "Headline",
      "default": "Hello World",
      "maxLength": 100
    }
  ]
}
```

## Tech Stack

- **Frontend**: React + TypeScript + Vite + TanStack Query + Tailwind
- **Backend**: Express + TypeScript
- **Export**: html-to-image

## Roadmap

- [ ] AI copy suggestions (Kimi/GPT)
- [ ] Batch generation
- [ ] More templates
- [ ] Font uploads
- [ ] Direct social posting
- [ ] Team workspaces

## License

MIT
# social-assets-generator
