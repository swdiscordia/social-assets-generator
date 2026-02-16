import { TemplateProps, DIMENSIONS, FONT_FAMILY, hexAlpha } from './shared'

export function SwapTokenPair({ brand, variables }: TemplateProps) {
  const tokenA = variables.tokenA || 'ETH'
  const tokenB = variables.tokenB || 'USDC'
  const headline = variables.headline || 'Swap Instantly'
  const subtitle = variables.subtitle || 'Best rates. Zero hidden fees.'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${hexAlpha(brand.colors.primary, 0.06)} 0%, transparent 40%, ${hexAlpha(accent, 0.06)} 100%)` }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 100, height: 100, borderRadius: '50%', background: hexAlpha(brand.colors.primary, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 700, color: brand.colors.text, border: `2px solid ${hexAlpha(brand.colors.primary, 0.3)}` }}>{tokenA}</div>
        </div>
        <div style={{ fontSize: 36, color: accent, fontWeight: 300 }}>→</div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 100, height: 100, borderRadius: '50%', background: hexAlpha(accent, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 700, color: brand.colors.text, border: `2px solid ${hexAlpha(accent, 0.3)}` }}>{tokenB}</div>
        </div>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 36, fontWeight: 700, color: brand.colors.text, marginBottom: 8 }}>{headline}</div>
        <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.5) }}>{subtitle}</div>
      </div>
    </div>
  )
}

export function SwapBestRates({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Best Rates Guaranteed'
  const subtitle = variables.subtitle || 'We aggregate 15+ DEXs to find you the best price'
  const stat = variables.stat || '15+ DEXs'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', background: `linear-gradient(180deg, ${hexAlpha(brand.colors.primary, 0.06)} 0%, ${hexAlpha(accent, 0.04)} 100%)` }} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>

        <div>
          <div style={{ fontSize: 44, fontWeight: 700, color: brand.colors.text, lineHeight: 1.1, marginBottom: 16, maxWidth: 500 }}>{headline}</div>
          <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.6), maxWidth: 450 }}>{subtitle}</div>
        </div>

        <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.3) }}>{brand.website?.replace('https://', '') || ''}</div>
      </div>

      <div style={{ position: 'absolute', right: 80, top: '50%', transform: 'translateY(-50%)', textAlign: 'center', zIndex: 1 }}>
        <div style={{ fontSize: 64, fontWeight: 700, color: accent, lineHeight: 1 }}>{stat}</div>
        <div style={{ fontSize: 14, color: hexAlpha(brand.colors.text, 0.5), marginTop: 8, fontWeight: 500 }}>Aggregated</div>
      </div>
    </div>
  )
}

export function SwapNewToken({ brand, variables }: TemplateProps) {
  const tokenName = variables.tokenName || 'ARB'
  const tokenFullName = variables.tokenFullName || 'Arbitrum'
  const subtitle = variables.subtitle || 'Now available for trading'
  const { width, height } = DIMENSIONS['1:1']
  const accent = brand.colors.accent || brand.colors.primary

  const dots = Array.from({ length: 12 }, (_, i) => ({
    left: `${15 + (i * 41) % 70}%`,
    top: `${10 + (i * 47) % 80}%`,
    size: 4 + (i % 3) * 2,
  }))

  return (
    <div style={{ width, height, background: brand.colors.background, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      {dots.map((d, i) => (
        <div key={i} style={{ position: 'absolute', left: d.left, top: d.top, width: d.size, height: d.size, borderRadius: '50%', background: hexAlpha(i % 2 === 0 ? brand.colors.primary : accent, 0.2) }} />
      ))}

      <div style={{ position: 'absolute', top: 48, left: 48, display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ position: 'absolute', top: 48, right: 48 }}>
        <div style={{ padding: '6px 16px', borderRadius: 20, background: hexAlpha(accent, 0.15), color: accent, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>NOW LISTED</div>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 96, fontWeight: 700, color: brand.colors.text, lineHeight: 1 }}>{tokenName}</div>
        <div style={{ fontSize: 24, color: hexAlpha(brand.colors.text, 0.6), marginTop: 8, fontWeight: 500 }}>{tokenFullName}</div>
        <div style={{ fontSize: 16, color: hexAlpha(brand.colors.text, 0.4), marginTop: 16 }}>{subtitle}</div>
      </div>
    </div>
  )
}

export function SwapZeroFees({ brand, variables }: TemplateProps) {
  const headline = variables.headline || '0% Trading Fees'
  const subtitle = variables.subtitle || 'Trade any token with zero platform fees. Only gas.'
  const cta = variables.cta || 'Start trading →'
  const { width, height } = DIMENSIONS['16:9']

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle, ${hexAlpha(brand.colors.accent || brand.colors.primary, 0.1)} 0%, transparent 60%)` }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 64, fontWeight: 700, color: brand.colors.text, lineHeight: 1.1, marginBottom: 16 }}>{headline}</div>
        <div style={{ fontSize: 20, color: hexAlpha(brand.colors.text, 0.5), maxWidth: 500, margin: '0 auto', marginBottom: 28 }}>{subtitle}</div>
        <div style={{ display: 'inline-flex', padding: '14px 32px', borderRadius: 10, background: brand.colors.primary, color: '#FFFFFF', fontSize: 16, fontWeight: 600 }}>{cta}</div>
      </div>

      <div style={{ textAlign: 'center', fontSize: 13, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.website?.replace('https://', '') || ''}</div>
    </div>
  )
}

export function SwapCrossChain({ brand, variables }: TemplateProps) {
  const chainA = variables.chainA || 'Ethereum'
  const chainB = variables.chainB || 'Arbitrum'
  const headline = variables.headline || 'Bridge & Swap in One Click'
  const subtitle = variables.subtitle || 'No manual bridging required'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${hexAlpha(brand.colors.primary, 0.2)}, ${hexAlpha(accent, 0.2)}, transparent)`, transform: 'translateY(-50%)' }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 80, position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 80, height: 80, borderRadius: 16, background: hexAlpha(brand.colors.primary, 0.12), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: brand.colors.text, border: `1px solid ${hexAlpha(brand.colors.primary, 0.2)}`, margin: '0 auto 8px' }}>{chainA.slice(0, 3).toUpperCase()}</div>
          <div style={{ fontSize: 14, color: hexAlpha(brand.colors.text, 0.5) }}>{chainA}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, color: accent }}>BRIDGE</div>
          <div style={{ width: 120, height: 2, background: `linear-gradient(90deg, ${brand.colors.primary}, ${accent})`, borderRadius: 1 }} />
          <div style={{ fontSize: 24, color: accent }}>→</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 80, height: 80, borderRadius: 16, background: hexAlpha(accent, 0.12), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: brand.colors.text, border: `1px solid ${hexAlpha(accent, 0.2)}`, margin: '0 auto 8px' }}>{chainB.slice(0, 3).toUpperCase()}</div>
          <div style={{ fontSize: 14, color: hexAlpha(brand.colors.text, 0.5) }}>{chainB}</div>
        </div>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 32, fontWeight: 700, color: brand.colors.text, marginBottom: 8 }}>{headline}</div>
        <div style={{ fontSize: 16, color: hexAlpha(brand.colors.text, 0.5) }}>{subtitle}</div>
      </div>
    </div>
  )
}

export function SwapVolumeMilestone({ brand, variables }: TemplateProps) {
  const volume = variables.volume || '$1B+'
  const headline = variables.headline || 'Total Volume Swapped'
  const subtitle = variables.subtitle || 'Thank you to our amazing community'
  const { width, height } = DIMENSIONS['1:1']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${hexAlpha(accent, 0.12)} 0%, transparent 60%)` }} />

      <div style={{ position: 'absolute', top: 48, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 10 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text, lineHeight: '36px' }}>{brand.name}</span>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase' as const, color: hexAlpha(brand.colors.text, 0.4), marginBottom: 12 }}>{headline}</div>
        <div style={{ fontSize: 96, fontWeight: 700, color: accent, lineHeight: 1 }}>{volume}</div>
        <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.5), marginTop: 16 }}>{subtitle}</div>
      </div>
    </div>
  )
}
