import { TemplateProps, DIMENSIONS, FONT_FAMILY, hexAlpha } from './shared'

export function FeatureHeroBold({ brand, variables }: TemplateProps) {
  const featureName = variables.featureName || 'Cross-Chain Swaps'
  const description = variables.description || 'Swap any token across any chain in a single click'
  const cta = variables.cta || 'Try it now →'
  const { width, height } = DIMENSIONS['16:9']

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -2, left: -2, right: -2, height: 4, background: `linear-gradient(90deg, ${brand.colors.primary}, ${brand.colors.accent || brand.colors.primary})` }} />
      <div style={{ position: 'absolute', bottom: -2, left: -2, right: -2, height: 4, background: `linear-gradient(90deg, ${brand.colors.accent || brand.colors.primary}, ${brand.colors.primary})` }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: 300, height: 300, background: `radial-gradient(circle at top right, ${hexAlpha(brand.colors.primary, 0.12)} 0%, transparent 70%)` }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.05, marginBottom: 16, background: `linear-gradient(135deg, ${brand.colors.text} 0%, ${brand.colors.accent || brand.colors.primary} 100%)`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{featureName}</div>
        <div style={{ fontSize: 20, color: hexAlpha(brand.colors.text, 0.6), marginBottom: 24, maxWidth: 550, lineHeight: 1.5 }}>{description}</div>
        <div style={{ display: 'inline-flex', padding: '14px 28px', borderRadius: 10, background: brand.colors.primary, color: '#FFFFFF', fontSize: 16, fontWeight: 600 }}>{cta}</div>
      </div>

      <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.website?.replace('https://', '') || ''}</div>
    </div>
  )
}

export function FeatureHeroMinimal({ brand, variables }: TemplateProps) {
  const featureName = variables.featureName || 'Portfolio Analytics'
  const description = variables.description || 'Track your DeFi positions across every chain'
  const cta = variables.cta || 'Learn more →'
  const { width, height } = DIMENSIONS['16:9']

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 80, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 40, left: 48, display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 14, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.4) }}>{brand.name}</span>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ width: 40, height: 1, background: hexAlpha(brand.colors.text, 0.15), margin: '0 auto 32px' }} />
        <div style={{ fontSize: 48, fontWeight: 400, color: brand.colors.text, lineHeight: 1.2, letterSpacing: -1, marginBottom: 16 }}>{featureName}</div>
        <div style={{ width: 40, height: 1, background: hexAlpha(brand.colors.text, 0.15), margin: '0 auto 24px' }} />
        <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.5), marginBottom: 32 }}>{description}</div>
        <div style={{ fontSize: 15, fontWeight: 500, color: brand.colors.accent || brand.colors.primary }}>{cta}</div>
      </div>

      <div style={{ position: 'absolute', bottom: 40, fontSize: 12, color: hexAlpha(brand.colors.text, 0.2) }}>{brand.website?.replace('https://', '') || ''}</div>
    </div>
  )
}

export function FeatureSpotlight({ brand, variables }: TemplateProps) {
  const featureName = variables.featureName || 'Limit Orders'
  const description = variables.description || "Set your price. We'll handle the rest."
  const badge = variables.badge || 'NEW'
  const { width, height } = DIMENSIONS['16:9']

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${hexAlpha(brand.colors.primary, 0.15)} 0%, transparent 60%)` }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>
        <div style={{ padding: '6px 16px', borderRadius: 20, background: brand.colors.accent || brand.colors.primary, color: '#FFFFFF', fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>{badge}</div>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 56, fontWeight: 700, color: brand.colors.text, lineHeight: 1.1, marginBottom: 16 }}>{featureName}</div>
        <div style={{ fontSize: 20, color: hexAlpha(brand.colors.text, 0.6), maxWidth: 500, margin: '0 auto' }}>{description}</div>
      </div>

      <div style={{ textAlign: 'center', fontSize: 13, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.website?.replace('https://', '') || ''}</div>
    </div>
  )
}

export function FeatureListCard({ brand, variables }: TemplateProps) {
  const headline = variables.headline || "What's New"
  const features = (variables.features || 'Cross-chain swaps, Limit orders, Portfolio tracking, Gas optimization').split(',').map(f => f.trim())
  const cta = variables.cta || 'Explore features →'
  const { width, height } = DIMENSIONS['1:1']

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 64, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, background: `radial-gradient(circle at top right, ${hexAlpha(brand.colors.primary, 0.06)} 0%, transparent 70%)` }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 40, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 18, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 40, fontWeight: 700, color: brand.colors.text, marginBottom: 32 }}>{headline}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {features.map((f, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: hexAlpha(brand.colors.accent || brand.colors.primary, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center', color: brand.colors.accent || brand.colors.primary, fontSize: 14, fontWeight: 700, flexShrink: 0 }}>✓</div>
              <span style={{ fontSize: 20, color: hexAlpha(brand.colors.text, 0.8), fontWeight: 500 }}>{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: 16, fontWeight: 500, color: brand.colors.accent || brand.colors.primary }}>{cta}</span>
        <span style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.3) }}>{brand.twitter || ''}</span>
      </div>
    </div>
  )
}

export function FeatureUpdateLog({ brand, variables }: TemplateProps) {
  const version = variables.version || 'v2.5.0'
  const headline = variables.headline || 'Platform Update'
  const changes = (variables.changes || 'Faster swaps, New token support, Bug fixes, UI improvements').split(',').map(c => c.trim())
  const { width, height } = DIMENSIONS['1:1']

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 64, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(180deg, ${brand.colors.primary}, ${brand.colors.accent || brand.colors.primary})` }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>
        <div style={{ fontSize: 20, fontWeight: 600, color: brand.colors.accent || brand.colors.primary, fontFamily: "'SF Mono', 'Fira Code', monospace" }}>{version}</div>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 36, fontWeight: 700, color: brand.colors.text, marginBottom: 32 }}>{headline}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {changes.map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: brand.colors.primary, flexShrink: 0 }} />
              <span style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.7), fontWeight: 500 }}>{c}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.website?.replace('https://', '') || ''}</div>
    </div>
  )
}

export function FeatureComingSoon({ brand, variables }: TemplateProps) {
  const featureName = variables.featureName || 'Smart Routing'
  const description = variables.description || 'Find the best price across every DEX automatically'
  const launchText = variables.launchText || 'Coming Q1 2026'
  const { width, height } = DIMENSIONS['16:9']

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 6, borderRadius: 16, border: `2px solid transparent`, background: `linear-gradient(${brand.colors.background}, ${brand.colors.background}) padding-box, linear-gradient(135deg, ${brand.colors.primary}, ${brand.colors.accent || brand.colors.primary}, ${brand.colors.primary}) border-box` }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase' as const, color: hexAlpha(brand.colors.text, 0.4) }}>COMING SOON</div>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 52, fontWeight: 700, color: brand.colors.text, lineHeight: 1.1, marginBottom: 16 }}>{featureName}</div>
        <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.5), maxWidth: 500, margin: '0 auto', marginBottom: 24 }}>{description}</div>
        <div style={{ display: 'inline-flex', padding: '10px 24px', borderRadius: 8, border: `1px solid ${hexAlpha(brand.colors.primary, 0.3)}`, fontSize: 14, fontWeight: 600, color: brand.colors.primary }}>{launchText}</div>
      </div>

      <div style={{ textAlign: 'center', fontSize: 13, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.website?.replace('https://', '') || ''}</div>
    </div>
  )
}

export function FeatureVersionBadge({ brand, variables }: TemplateProps) {
  const version = variables.version || 'v3.0'
  const releaseName = variables.releaseName || 'Phoenix'
  const subtitle = variables.subtitle || 'The biggest update yet'
  const { width, height } = DIMENSIONS['1:1']

  return (
    <div style={{ width, height, background: brand.colors.background, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 350, height: 350, borderRadius: '50%', border: `1px solid ${hexAlpha(brand.colors.primary, 0.08)}` }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 280, height: 280, borderRadius: '50%', border: `1px solid ${hexAlpha(brand.colors.primary, 0.12)}` }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 200, height: 200, borderRadius: '50%', background: hexAlpha(brand.colors.primary, 0.06) }} />

      <div style={{ position: 'absolute', top: 48, left: 48, display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.5) }}>{brand.name}</span>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 96, fontWeight: 700, color: brand.colors.text, lineHeight: 1 }}>{version}</div>
        <div style={{ fontSize: 28, fontWeight: 600, color: brand.colors.accent || brand.colors.primary, marginTop: 8, letterSpacing: 2 }}>{releaseName}</div>
        <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.5), marginTop: 12 }}>{subtitle}</div>
      </div>
    </div>
  )
}
