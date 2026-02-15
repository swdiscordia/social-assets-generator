import { TemplateProps, DIMENSIONS, FONT_FAMILY, hexAlpha } from './shared'

export function ChainLaunchHero({ brand, variables }: TemplateProps) {
  const chainName = variables.chainName || 'Ethereum'
  const chainLogo = variables.chainLogo || ''
  const subtitle = variables.subtitle || 'Trade, track, and manage your crypto'
  const { width, height } = DIMENSIONS['16:9']

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${hexAlpha(brand.colors.primary, 0.2)} 0%, transparent 70%)` }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 350, height: 350, borderRadius: '50%', border: `2px solid ${hexAlpha(brand.colors.primary, 0.15)}` }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 450, height: 450, borderRadius: '50%', border: `1px solid ${hexAlpha(brand.colors.accent || brand.colors.primary, 0.08)}` }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative', zIndex: 1 }}>
        <img src={brand.logo} alt={brand.name} style={{ height: 40, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 18, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase' as const, color: brand.colors.accent || brand.colors.primary, marginBottom: 16 }}>NOW LIVE ON</div>
        {chainLogo && <img src={chainLogo} alt={chainName} style={{ height: 80, width: 'auto', objectFit: 'contain', margin: '0 auto 20px', display: 'block' }} />}
        <div style={{ fontSize: 52, fontWeight: 700, color: brand.colors.text, lineHeight: 1.1, marginBottom: 12 }}>{chainName}</div>
        <div style={{ fontSize: 20, color: hexAlpha(brand.colors.text, 0.7), maxWidth: 500, margin: '0 auto' }}>{subtitle}</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 24, position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: 14, color: hexAlpha(brand.colors.text, 0.4) }}>{brand.website?.replace('https://', '') || ''}</span>
        <span style={{ fontSize: 14, color: hexAlpha(brand.colors.text, 0.4) }}>{brand.twitter || ''}</span>
      </div>
    </div>
  )
}

export function ChainLaunchMinimal({ brand, variables }: TemplateProps) {
  const chainName = variables.chainName || 'Arbitrum'
  const chainLogo = variables.chainLogo || ''
  const subtitle = variables.subtitle || 'Now available on our platform'
  const { width, height } = DIMENSIONS['16:9']

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 64, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '40%', height: '100%', background: `linear-gradient(135deg, transparent 0%, ${hexAlpha(brand.colors.primary, 0.03)} 100%)` }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.6) }}>{brand.name}</span>
        </div>
        {chainLogo && <img src={chainLogo} alt={chainName} style={{ height: 48, width: 'auto', objectFit: 'contain' }} />}
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ width: 48, height: 2, background: brand.colors.accent || brand.colors.primary, marginBottom: 24 }} />
        <div style={{ fontSize: 44, fontWeight: 300, color: brand.colors.text, lineHeight: 1.2, letterSpacing: -1 }}>Now on <span style={{ fontWeight: 700 }}>{chainName}</span></div>
        <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.5), marginTop: 16 }}>{subtitle}</div>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ width: '100%', height: 1, background: hexAlpha(brand.colors.text, 0.08), marginBottom: 16 }} />
        <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.3) }}>{brand.website?.replace('https://', '') || brand.twitter || ''}</div>
      </div>
    </div>
  )
}

export function ChainLaunchDark({ brand, variables }: TemplateProps) {
  const chainName = variables.chainName || 'Optimism'
  const chainLogo = variables.chainLogo || ''
  const subtitle = variables.subtitle || 'Lightning-fast trades are here'
  const { width, height } = DIMENSIONS['16:9']
  const glow = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: `linear-gradient(180deg, ${brand.colors.background} 0%, ${hexAlpha(brand.colors.primary, 0.05)} 100%)`, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${hexAlpha(brand.colors.text, 0.03)} 1px, transparent 1px), linear-gradient(90deg, ${hexAlpha(brand.colors.text, 0.03)} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, ${hexAlpha(glow, 0.25)} 0%, transparent 70%)`, filter: 'blur(40px)' }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 48, position: 'relative', zIndex: 1 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase' as const, color: glow, marginBottom: 12 }}>NEW CHAIN</div>
          <div style={{ fontSize: 48, fontWeight: 700, color: brand.colors.text, lineHeight: 1.1, marginBottom: 16 }}>{chainName}</div>
          <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.6) }}>{subtitle}</div>
        </div>
        {chainLogo && (
          <div style={{ width: 140, height: 140, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: hexAlpha(glow, 0.1), boxShadow: `0 0 60px ${hexAlpha(glow, 0.3)}, 0 0 120px ${hexAlpha(glow, 0.1)}` }}>
            <img src={chainLogo} alt={chainName} style={{ height: 72, width: 'auto', objectFit: 'contain' }} />
          </div>
        )}
      </div>

      <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.twitter || brand.website?.replace('https://', '') || ''}</div>
    </div>
  )
}

export function ChainLaunchSplit({ brand, variables }: TemplateProps) {
  const chainName = variables.chainName || 'Polygon'
  const chainLogo = variables.chainLogo || ''
  const subtitle = variables.subtitle || 'Swap, bridge, and earn on Polygon'
  const { width, height } = DIMENSIONS['16:9']

  return (
    <div style={{ width, height, background: brand.colors.background, display: 'flex', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ width: '40%', height: '100%', background: hexAlpha(brand.colors.primary, 0.06), display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${hexAlpha(brand.colors.primary, 0.08)} 0%, transparent 100%)` }} />
        {chainLogo && <img src={chainLogo} alt={chainName} style={{ height: 120, width: 'auto', objectFit: 'contain', position: 'relative', zIndex: 1 }} />}
      </div>

      <div style={{ width: 2, background: `linear-gradient(180deg, ${hexAlpha(brand.colors.primary, 0.3)}, transparent)` }} />

      <div style={{ flex: 1, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>

        <div>
          <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase' as const, color: brand.colors.accent || brand.colors.primary, marginBottom: 8 }}>NOW LIVE</div>
          <div style={{ fontSize: 42, fontWeight: 700, color: brand.colors.text, lineHeight: 1.1, marginBottom: 16 }}>{chainName}</div>
          <div style={{ fontSize: 17, color: hexAlpha(brand.colors.text, 0.6), lineHeight: 1.5 }}>{subtitle}</div>
        </div>

        <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.3) }}>{brand.website?.replace('https://', '') || ''}</div>
      </div>
    </div>
  )
}

export function ChainLaunchCelebration({ brand, variables }: TemplateProps) {
  const chainName = variables.chainName || 'Avalanche'
  const chainLogo = variables.chainLogo || ''
  const subtitle = variables.subtitle || 'A new chain joins the family!'
  const { width, height } = DIMENSIONS['1:1']
  const accent = brand.colors.accent || brand.colors.primary

  const dots = Array.from({ length: 20 }, (_, i) => ({
    left: `${10 + (i * 37) % 80}%`,
    top: `${5 + (i * 53) % 90}%`,
    size: 4 + (i % 4) * 3,
    color: i % 2 === 0 ? brand.colors.primary : accent,
    opacity: 0.15 + (i % 5) * 0.05,
  }))

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 64, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      {dots.map((d, i) => (
        <div key={i} style={{ position: 'absolute', left: d.left, top: d.top, width: d.size, height: d.size, borderRadius: i % 3 === 0 ? '50%' : 2, background: hexAlpha(d.color, d.opacity), transform: i % 3 === 2 ? 'rotate(45deg)' : 'none' }} />
      ))}

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <img src={brand.logo} alt={brand.name} style={{ height: 40, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 18, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: 4, textTransform: 'uppercase' as const, color: accent, marginBottom: 24 }}>WELCOME</div>
        {chainLogo && <img src={chainLogo} alt={chainName} style={{ height: 100, width: 'auto', objectFit: 'contain', margin: '0 auto 24px', display: 'block' }} />}
        <div style={{ fontSize: 48, fontWeight: 700, color: brand.colors.text, marginBottom: 16 }}>{chainName}</div>
        <div style={{ fontSize: 20, color: hexAlpha(brand.colors.text, 0.6) }}>{subtitle}</div>
      </div>

      <div style={{ fontSize: 14, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.twitter || ''}</div>
    </div>
  )
}

export function ChainSupportedBadge({ brand, variables }: TemplateProps) {
  const chainName = variables.chainName || 'Base'
  const chainLogo = variables.chainLogo || ''
  const tagline = variables.tagline || 'Now Supported'
  const { width, height } = DIMENSIONS['1:1']

  return (
    <div style={{ width, height, background: brand.colors.background, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, height: 400, borderRadius: '50%', border: `2px solid ${hexAlpha(brand.colors.primary, 0.1)}` }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 320, height: 320, borderRadius: '50%', border: `2px solid ${hexAlpha(brand.colors.primary, 0.15)}` }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 240, height: 240, borderRadius: '50%', background: hexAlpha(brand.colors.primary, 0.05) }} />

      <div style={{ position: 'absolute', top: 48, left: 48, display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.5) }}>{brand.name}</span>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {chainLogo && <img src={chainLogo} alt={chainName} style={{ height: 80, width: 'auto', objectFit: 'contain', margin: '0 auto 20px', display: 'block' }} />}
        <div style={{ fontSize: 36, fontWeight: 700, color: brand.colors.text, marginBottom: 8 }}>{chainName}</div>
        <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase' as const, color: brand.colors.accent || brand.colors.primary }}>{tagline}</div>
      </div>
    </div>
  )
}

export function ChainEcosystemGrid({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Our Ecosystem'
  const chains = (variables.chains || 'Ethereum, Arbitrum, Optimism, Polygon, Avalanche, Base, BNB Chain, Gnosis').split(',').map(c => c.trim())
  const subtitle = variables.subtitle || 'Trade across 8+ chains seamlessly'
  const { width, height } = DIMENSIONS['16:9']

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${hexAlpha(brand.colors.primary, 0.04)} 0%, transparent 50%, ${hexAlpha(brand.colors.accent || brand.colors.primary, 0.04)} 100%)` }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>
        <div style={{ fontSize: 14, color: hexAlpha(brand.colors.text, 0.4) }}>{subtitle}</div>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 36, fontWeight: 700, color: brand.colors.text, marginBottom: 32, textAlign: 'center' }}>{headline}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 12, justifyContent: 'center', maxWidth: 900, margin: '0 auto' }}>
          {chains.map((chain, i) => (
            <div key={i} style={{ padding: '12px 24px', borderRadius: 12, background: hexAlpha(brand.colors.primary, 0.08 + (i % 3) * 0.03), border: `1px solid ${hexAlpha(brand.colors.primary, 0.12)}`, fontSize: 16, fontWeight: 500, color: brand.colors.text }}>{chain}</div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: 13, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.website?.replace('https://', '') || ''}</div>
    </div>
  )
}
