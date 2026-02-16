import { TemplateProps, DIMENSIONS, FONT_FAMILY, hexAlpha } from './shared'

export function ChainLaunchHero({ brand, variables }: TemplateProps) {
  const chainName = variables.chainName || 'Ethereum'
  const chainLogo = variables.chainLogo || ''
  const subtitle = variables.subtitle || 'Trade, track, and manage your crypto'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 80% 50% at 50% 50%, ${hexAlpha(brand.colors.primary, 0.25)} 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 20% 80%, ${hexAlpha(accent, 0.15)} 0%, transparent 50%)` }} />
      <div style={{ position: 'absolute', top: -100, left: '20%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${hexAlpha(brand.colors.primary, 0.2)} 0%, transparent 70%)`, filter: 'blur(60px)' }} />
      <div style={{ position: 'absolute', bottom: -150, right: '10%', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${hexAlpha(accent, 0.15)} 0%, transparent 70%)`, filter: 'blur(80px)' }} />
      {[300, 400, 500].map((size, i) => <div key={i} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: size, height: size, borderRadius: '50%', border: `2px solid ${hexAlpha(brand.colors.primary, 0.08 - i * 0.02)}` }} />)}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative', zIndex: 1 }}>
        <div style={{ padding: 10, borderRadius: 12, background: `${hexAlpha(brand.colors.primary, 0.15)}`, border: `1px solid ${hexAlpha(brand.colors.primary, 0.25)}` }}>
          <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
        </div>
        <span style={{ fontSize: 18, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase' as const, color: accent, marginBottom: 20 }}>Now Live On</div>
        {chainLogo && <div style={{ marginBottom: 24 }}><div style={{ display: 'inline-block', padding: 20, borderRadius: 24, background: `${hexAlpha(brand.colors.primary, 0.1)}`, border: `1px solid ${hexAlpha(brand.colors.primary, 0.2)}`, boxShadow: `0 8px 32px ${hexAlpha(brand.colors.primary, 0.15)}` }}><img src={chainLogo} alt={chainName} style={{ height: 80, width: 'auto', objectFit: 'contain' }} /></div></div>}
        <div style={{ fontSize: 56, fontWeight: 800, color: brand.colors.text, lineHeight: 1.1, marginBottom: 16, letterSpacing: '-0.02em' }}>{chainName}</div>
        <div style={{ fontSize: 20, color: hexAlpha(brand.colors.text, 0.7), maxWidth: 500, margin: '0 auto', lineHeight: 1.5 }}>{subtitle}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 32, position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: 14, color: hexAlpha(brand.colors.text, 0.5), fontWeight: 500 }}>{brand.website?.replace('https://', '')}</span>
        <span style={{ fontSize: 14, color: hexAlpha(brand.colors.text, 0.5), fontWeight: 500 }}>{brand.twitter}</span>
      </div>
    </div>
  )
}

export function ChainLaunchMinimal({ brand, variables }: TemplateProps) {
  const chainName = variables.chainName || 'Arbitrum'
  const chainLogo = variables.chainLogo || ''
  const subtitle = variables.subtitle || 'Now available on our platform'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 64, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '50%', height: '100%', background: `linear-gradient(135deg, transparent 0%, ${hexAlpha(brand.colors.primary, 0.06)} 100%)` }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.6) }}>{brand.name}</span>
        </div>
        {chainLogo && <div style={{ padding: 12, borderRadius: 16, background: hexAlpha(brand.colors.primary, 0.08), border: `1px solid ${hexAlpha(brand.colors.primary, 0.12)}` }}><img src={chainLogo} alt={chainName} style={{ height: 40, width: 'auto', objectFit: 'contain' }} /></div>}
      </div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 600 }}>
        <div style={{ width: 60, height: 3, background: `linear-gradient(90deg, ${accent} 0%, ${brand.colors.primary} 100%)`, marginBottom: 28, borderRadius: 2 }} />
        <div style={{ fontSize: 20, color: accent, fontWeight: 600, marginBottom: 12, letterSpacing: 2, textTransform: 'uppercase' as const }}>New Integration</div>
        <div style={{ fontSize: 52, fontWeight: 300, color: brand.colors.text, lineHeight: 1.15, letterSpacing: -1, marginBottom: 20 }}>Now on <span style={{ fontWeight: 800 }}>{chainName}</span></div>
        <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.6), lineHeight: 1.6 }}>{subtitle}</div>
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ width: '100%', height: 1, background: hexAlpha(brand.colors.text, 0.08), marginBottom: 20 }} />
        <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.4), fontWeight: 500 }}>{brand.website?.replace('https://', '') || brand.twitter}</div>
      </div>
    </div>
  )
}

export function ChainLaunchDark({ brand, variables }: TemplateProps) {
  const chainName = variables.chainName || 'Optimism'
  const chainLogo = variables.chainLogo || ''
  const subtitle = variables.subtitle || 'Lightning-fast trades are here'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: `linear-gradient(180deg, ${brand.colors.background} 0%, ${hexAlpha(brand.colors.primary, 0.08)} 100%)`, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${hexAlpha(brand.colors.text, 0.03)} 1px, transparent 1px), linear-gradient(90deg, ${hexAlpha(brand.colors.text, 0.03)} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      <div style={{ position: 'absolute', top: '50%', right: '15%', transform: 'translateY(-50%)', width: 350, height: 350, borderRadius: '50%', background: `radial-gradient(circle, ${hexAlpha(accent, 0.3)} 0%, transparent 70%)`, filter: 'blur(60px)' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative', zIndex: 1 }}>
        <div style={{ padding: 8, borderRadius: 10, background: hexAlpha(brand.colors.primary, 0.12) }}>
          <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
        </div>
        <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 48, position: 'relative', zIndex: 1 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'inline-block', padding: '6px 14px', borderRadius: 20, background: hexAlpha(accent, 0.15), color: accent, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, marginBottom: 16 }}>New Chain</div>
          <div style={{ fontSize: 56, fontWeight: 800, color: brand.colors.text, lineHeight: 1.05, marginBottom: 16, letterSpacing: '-0.02em' }}>{chainName}</div>
          <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.6), lineHeight: 1.5 }}>{subtitle}</div>
        </div>
        {chainLogo && <div style={{ width: 160, height: 160, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: hexAlpha(accent, 0.1), border: `2px solid ${hexAlpha(accent, 0.2)}`, boxShadow: `0 0 80px ${hexAlpha(accent, 0.25)}, 0 0 120px ${hexAlpha(accent, 0.1)}` }}><img src={chainLogo} alt={chainName} style={{ height: 80, width: 'auto', objectFit: 'contain' }} /></div>}
      </div>
      <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.4), fontWeight: 500, position: 'relative', zIndex: 1 }}>{brand.twitter || brand.website?.replace('https://', '')}</div>
    </div>
  )
}

export function ChainLaunchSplit({ brand, variables }: TemplateProps) {
  const chainName = variables.chainName || 'Polygon'
  const chainLogo = variables.chainLogo || ''
  const subtitle = variables.subtitle || 'Swap, bridge, and earn on Polygon'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, display: 'flex', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ width: '42%', height: '100%', background: hexAlpha(brand.colors.primary, 0.06), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: 48 }}>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${hexAlpha(brand.colors.primary, 0.1)} 0%, transparent 100%)` }} />
        {chainLogo ? <div style={{ position: 'relative', zIndex: 1, padding: 32, borderRadius: 28, background: hexAlpha(brand.colors.primary, 0.08), border: `1px solid ${hexAlpha(brand.colors.primary, 0.15)}`, boxShadow: `0 20px 60px ${hexAlpha(brand.colors.primary, 0.15)}` }}><img src={chainLogo} alt={chainName} style={{ height: 100, width: 'auto', objectFit: 'contain' }} /></div> : <div style={{ fontSize: 72, fontWeight: 800, color: brand.colors.text }}>{chainName[0]}</div>}
      </div>
      <div style={{ width: 2, background: `linear-gradient(180deg, transparent 0%, ${hexAlpha(brand.colors.primary, 0.4)} 50%, transparent 100%)` }} />
      <div style={{ flex: 1, padding: 56, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ padding: 8, borderRadius: 10, background: hexAlpha(brand.colors.primary, 0.1) }}><img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 32, width: 'auto', objectFit: 'contain' }} /></div>
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' as const, color: accent, marginBottom: 12 }}>Now Live</div>
          <div style={{ fontSize: 52, fontWeight: 800, color: brand.colors.text, lineHeight: 1.08, marginBottom: 20, letterSpacing: '-0.02em' }}>{chainName}</div>
          <div style={{ fontSize: 17, color: hexAlpha(brand.colors.text, 0.65), lineHeight: 1.6, maxWidth: 400 }}>{subtitle}</div>
        </div>
        <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.4), fontWeight: 500 }}>{brand.website?.replace('https://', '')}</div>
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
  const sparkles = Array.from({ length: 24 }, (_, i) => ({ left: `${5 + (i * 37) % 90}%`, top: `${5 + (i * 53) % 90}%`, size: 4 + (i % 5) * 3, color: i % 3 === 0 ? accent : brand.colors.primary, opacity: 0.1 + (i % 7) * 0.06, rotation: (i * 45) % 360 }))

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 64, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      {sparkles.map((s, i) => <div key={i} style={{ position: 'absolute', left: s.left, top: s.top, width: s.size, height: s.size, background: hexAlpha(s.color, s.opacity), transform: `rotate(${s.rotation}deg)`, borderRadius: i % 4 === 0 ? '50%' : 2 }} />)}
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${hexAlpha(brand.colors.primary, 0.1)} 0%, transparent 60%)` }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative', zIndex: 1 }}>
        <div style={{ padding: 10, borderRadius: 12, background: hexAlpha(brand.colors.primary, 0.12) }}><img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 32, width: 'auto', objectFit: 'contain' }} /></div>
        <span style={{ fontSize: 18, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 5, textTransform: 'uppercase' as const, color: accent, marginBottom: 28 }}>Welcome</div>
        {chainLogo && <div style={{ marginBottom: 28 }}><div style={{ display: 'inline-block', padding: 24, borderRadius: 32, background: hexAlpha(brand.colors.primary, 0.08), border: `2px solid ${hexAlpha(brand.colors.primary, 0.15)}`, boxShadow: `0 12px 40px ${hexAlpha(brand.colors.primary, 0.12)}` }}><img src={chainLogo} alt={chainName} style={{ height: 90, width: 'auto', objectFit: 'contain' }} /></div></div>}
        <div style={{ fontSize: 52, fontWeight: 800, color: brand.colors.text, marginBottom: 16, letterSpacing: '-0.01em' }}>{chainName}</div>
        <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.6), fontWeight: 500 }}>{subtitle}</div>
      </div>
      <div style={{ fontSize: 14, color: hexAlpha(brand.colors.text, 0.35), fontWeight: 500, position: 'relative', zIndex: 1 }}>{brand.twitter}</div>
    </div>
  )
}

export function ChainSupportedBadge({ brand, variables }: TemplateProps) {
  const chainName = variables.chainName || 'Base'
  const chainLogo = variables.chainLogo || ''
  const tagline = variables.tagline || 'Now Supported'
  const { width, height } = DIMENSIONS['1:1']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      {[450, 380, 310, 240].map((size, i) => <div key={i} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: size, height: size, borderRadius: '50%', border: `2px solid ${hexAlpha(brand.colors.primary, 0.08 - i * 0.015)}`, background: i === 3 ? hexAlpha(brand.colors.primary, 0.04) : 'transparent' }} />)}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${hexAlpha(accent, 0.12)} 0%, transparent 70%)`, filter: 'blur(40px)' }} />
      <div style={{ position: 'absolute', top: 48, left: 48, display: 'flex', alignItems: 'center', gap: 10, zIndex: 1 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 15, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.5) }}>{brand.name}</span>
      </div>
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {chainLogo && <div style={{ marginBottom: 24 }}><img src={chainLogo} alt={chainName} style={{ height: 85, width: 'auto', objectFit: 'contain' }} /></div>}
        <div style={{ fontSize: 40, fontWeight: 800, color: brand.colors.text, marginBottom: 12, letterSpacing: '-0.01em' }}>{chainName}</div>
        <div style={{ display: 'inline-block', padding: '8px 20px', borderRadius: 20, background: hexAlpha(accent, 0.12), border: `1px solid ${hexAlpha(accent, 0.2)}` }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' as const, color: accent }}>{tagline}</span>
        </div>
      </div>
    </div>
  )
}

export function ChainEcosystemGrid({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Our Ecosystem'
  const chains = (variables.chains || 'Ethereum, Arbitrum, Optimism, Polygon, Avalanche, Base, BNB Chain, Gnosis').split(',').map(c => c.trim())
  const subtitle = variables.subtitle || 'Trade across 8+ chains seamlessly'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${hexAlpha(brand.colors.primary, 0.05)} 0%, transparent 50%, ${hexAlpha(accent, 0.04)} 100%)` }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ padding: 8, borderRadius: 10, background: hexAlpha(brand.colors.primary, 0.1) }}><img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 32, width: 'auto', objectFit: 'contain' }} /></div>
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>
        <div style={{ fontSize: 14, color: hexAlpha(brand.colors.text, 0.5), fontWeight: 500 }}>{subtitle}</div>
      </div>
      <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: 40, fontWeight: 800, color: brand.colors.text, marginBottom: 40, textAlign: 'center', letterSpacing: '-0.01em' }}>{headline}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 14, justifyContent: 'center', maxWidth: 1000, margin: '0 auto' }}>
          {chains.map((chain, i) => <div key={i} style={{ padding: '16px 28px', borderRadius: 14, background: hexAlpha(brand.colors.primary, 0.06 + (i % 4) * 0.025), border: `1px solid ${hexAlpha(brand.colors.primary, 0.12)}`, fontSize: 16, fontWeight: 600, color: brand.colors.text, boxShadow: `0 2px 8px ${hexAlpha(brand.colors.primary, 0.05)}` }}>{chain}</div>)}
        </div>
      </div>
      <div style={{ textAlign: 'center', fontSize: 13, color: hexAlpha(brand.colors.text, 0.35), fontWeight: 500, position: 'relative', zIndex: 1 }}>{brand.website?.replace('https://', '')}</div>
    </div>
  )
}
