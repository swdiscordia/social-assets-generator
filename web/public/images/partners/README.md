# Partner Brand Assets

Add partner logos and brand assets here. Each partner should have their own folder.

## Structure

```
partners/
├── <partner-name>/
│   ├── logo.svg          # Primary logo
│   ├── logo-full.svg     # Full logo with text
│   ├── icon.svg          # Icon/symbol only
│   ├── token.svg         # Token icon (if applicable)
│   └── ...               # Other brand assets
└── README.md
```

## Adding a Partner

1. Create a folder with the partner name (lowercase, hyphenated)
2. Add their logo assets (preferably SVG for scalability)
3. Assets will appear in the Canvas editor under "Partners" tab

## Example

```
partners/
├── katana/
│   ├── logo.svg
│   ├── logo-full.svg
│   └── token.svg
├── chainflip/
│   ├── logo.svg
│   └── icon.svg
└── thorchain/
    ├── logo.svg
    └── rune.svg
```

## Usage in Editor

Partner assets appear in the **Partners** tab of the Assets panel in the Canvas editor.
Click any asset to add it to your canvas for positioning and editing.
