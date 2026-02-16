import { TemplateProps, DIMENSIONS, FONT_FAMILY, hexAlpha } from './shared'

export function MultichainSupportedGrid({ brand, variables }: TemplateProps) {
  const headline = variables.headline || '13+ Chains Supported'
  const chains = (variables.chains || 'Ethereum, Arbitrum, Optimism, Polygon, Avalanche, Base, BNB Chain, Gnosis, Cosmos, THORChain').split(',').map(c => c.trim())
  const subtitle = variables.subtitle || 'And more coming soon'
  const { width, height } = DIMENSIONS['16:9']

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at center, ${hexAlpha(brand.colors.primary, 0.06)} 0%, transparent 70%)` }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{ fontSize: 36, fontWeight: 700, color: brand.colors.text, marginBottom: 28 }}>{headline}</div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(chains.length, 5)}, 1fr)`, gap: 12, maxWidth: 800, margin: '0 auto' }}>
          {chains.map((chain, i) => (
            <div key={i} style={{ padding: '16px 12px', borderRadius: 14, background: hexAlpha(brand.colors.primary, 0.06 + (i % 3) * 0.02), border: `1px solid ${hexAlpha(brand.colors.primary, 0.1)}`, fontSize: 15, fontWeight: 500, color: brand.colors.text, textAlign: 'center' }}>{chain}</div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: 15, color: hexAlpha(brand.colors.text, 0.4), position: 'relative', zIndex: 1 }}>{subtitle}</div>
    </div>
  )
}

export function MultichainBridge({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Bridge Seamlessly'
  const subtitle = variables.subtitle || 'Move assets between chains in seconds'
  const chainCount = variables.chainCount || '13+'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '15%', transform: 'translateY(-50%)', width: 120, height: 120, borderRadius: 20, background: hexAlpha(brand.colors.primary, 0.08), border: `1px solid ${hexAlpha(brand.colors.primary, 0.15)}` }} />
      <div style={{ position: 'absolute', top: '50%', left: '15%', transform: 'translateY(-50%)', width: 120, height: 2, marginLeft: 120, background: `repeating-linear-gradient(90deg, ${hexAlpha(accent, 0.3)} 0px, ${hexAlpha(accent, 0.3)} 8px, transparent 8px, transparent 16px)` }} />
      <div style={{ position: 'absolute', top: '50%', right: '15%', transform: 'translateY(-50%)', width: 120, height: 120, borderRadius: 20, background: hexAlpha(accent, 0.08), border: `1px solid ${hexAlpha(accent, 0.15)}` }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>
        <div style={{ width: 48, height: 48, borderRadius: '50%', background: hexAlpha(accent, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, color: accent }}>{chainCount}</div>
      </div>

      <div style={{ position: 'relative', zIndex: 2 }} />

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 40, fontWeight: 700, color: brand.colors.text, marginBottom: 8 }}>{headline}</div>
        <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.5) }}>{subtitle}</div>
      </div>
    </div>
  )
}

export function MultichainExpansion({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'The Network Grows'
  const chainCount = variables.chainCount || '13+'
  const subtitle = variables.subtitle || 'Now supporting more chains than ever'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      {[180, 260, 350, 450].map((size, i) => (
        <div key={i} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: size, height: size, borderRadius: '50%', border: `1px solid ${hexAlpha(brand.colors.primary, 0.06 + i * 0.02)}` }} />
      ))}

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 80, fontWeight: 700, color: accent, lineHeight: 1 }}>{chainCount}</div>
        <div style={{ fontSize: 16, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.4), letterSpacing: 2, textTransform: 'uppercase' as const, marginTop: 8 }}>CHAINS</div>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 32, fontWeight: 700, color: brand.colors.text, marginBottom: 8 }}>{headline}</div>
        <div style={{ fontSize: 16, color: hexAlpha(brand.colors.text, 0.5) }}>{subtitle}</div>
      </div>
    </div>
  )
}

export function MultichainComparison({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Pick Your Chain'
  const features = (variables.features || 'Speed, Low Fees, Security, DeFi Ecosystem').split(',').map(f => f.trim())
  const subtitle = variables.subtitle || 'Every chain has its strengths. We support them all.'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 40, fontWeight: 700, color: brand.colors.text, marginBottom: 28, textAlign: 'center' }}>{headline}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
          {features.map((f, i) => (
            <div key={i} style={{ flex: 1, maxWidth: 220, padding: '20px 16px', borderRadius: 14, background: hexAlpha(brand.colors.text, 0.03), border: `1px solid ${hexAlpha(brand.colors.text, 0.06)}`, textAlign: 'center' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: hexAlpha(i % 2 === 0 ? brand.colors.primary : accent, 0.12), margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 16, height: 16, borderRadius: 4, background: hexAlpha(i % 2 === 0 ? brand.colors.primary : accent, 0.4) }} />
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{f}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: 15, color: hexAlpha(brand.colors.text, 0.4), position: 'relative', zIndex: 1 }}>{subtitle}</div>
    </div>
  )
}

export function MultichainEcosystemMap({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'The Multi-Chain Future'
  const subtitle = variables.subtitle || 'One platform. Every blockchain. Infinite possibilities.'
  const chains = (variables.chains || 'ETH, ARB, OP, MATIC, AVAX, BASE').split(',').map(c => c.trim())
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  const positions = [
    { x: 50, y: 50 }, { x: 75, y: 30 }, { x: 25, y: 35 },
    { x: 65, y: 70 }, { x: 35, y: 65 }, { x: 50, y: 20 },
    { x: 80, y: 55 }, { x: 20, y: 50 },
  ]

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      {chains.slice(0, positions.length).map((chain, i) => {
        const pos = positions[i]
        return (
          <div key={i} style={{ position: 'absolute', left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)', zIndex: 0 }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: hexAlpha(i % 2 === 0 ? brand.colors.primary : accent, 0.1), border: `1px solid ${hexAlpha(i % 2 === 0 ? brand.colors.primary : accent, 0.15)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: hexAlpha(brand.colors.text, 0.6) }}>{chain}</div>
          </div>
        )
      })}

      {chains.length > 1 && chains.slice(0, -1).map((_, i) => {
        const a = positions[i], b = positions[i + 1]
        if (!a || !b) return null
        return (
          <svg key={`line-${i}`} style={{ position: 'absolute', inset: 0, zIndex: 0 }} width={width} height={height}>
            <line x1={`${a.x}%`} y1={`${a.y}%`} x2={`${b.x}%`} y2={`${b.y}%`} stroke={hexAlpha(brand.colors.primary, 0.06)} strokeWidth="1" />
          </svg>
        )
      })}

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ position: 'relative', zIndex: 2 }} />

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 36, fontWeight: 700, color: brand.colors.text, marginBottom: 8 }}>{headline}</div>
        <div style={{ fontSize: 17, color: hexAlpha(brand.colors.text, 0.5) }}>{subtitle}</div>
      </div>
    </div>
  )
}
