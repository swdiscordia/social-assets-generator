import { TemplateProps, DIMENSIONS, FONT_FAMILY, hexAlpha } from './shared'

export function PortfolioTrackerPromo({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Track Everything'
  const subtitle = variables.subtitle || 'Your entire crypto portfolio in one place'
  const cta = variables.cta || 'Connect wallet →'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  const chartPoints = [40, 35, 50, 45, 65, 55, 70, 80, 75, 90, 85, 95]

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <svg style={{ position: 'absolute', bottom: 40, right: 40, opacity: 0.15 }} width="500" height="250" viewBox="0 0 500 250">
        <polyline fill="none" stroke={accent} strokeWidth="3" points={chartPoints.map((p, i) => `${i * (500 / (chartPoints.length - 1))},${250 - p * 2.5}`).join(' ')} />
        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
        <polygon fill="url(#cg)" points={`0,250 ${chartPoints.map((p, i) => `${i * (500 / (chartPoints.length - 1))},${250 - p * 2.5}`).join(' ')} 500,250`} />
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 550 }}>
        <div style={{ fontSize: 48, fontWeight: 700, color: brand.colors.text, lineHeight: 1.1, marginBottom: 16 }}>{headline}</div>
        <div style={{ fontSize: 20, color: hexAlpha(brand.colors.text, 0.6), marginBottom: 28, lineHeight: 1.5 }}>{subtitle}</div>
        <div style={{ display: 'inline-flex', padding: '14px 28px', borderRadius: 10, background: brand.colors.primary, color: '#FFFFFF', fontSize: 16, fontWeight: 600 }}>{cta}</div>
      </div>

      <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.website?.replace('https://', '') || ''}</div>
    </div>
  )
}

export function PortfolioMultichain({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'One Portfolio. Every Chain.'
  const chains = (variables.chains || 'Ethereum, Arbitrum, Optimism, Polygon, Base').split(',').map(c => c.trim())
  const subtitle = variables.subtitle || 'Unified portfolio tracking across all networks'
  const { width, height } = DIMENSIONS['16:9']

  return (
    <div style={{ width, height, background: `linear-gradient(135deg, ${brand.colors.background} 0%, ${hexAlpha(brand.colors.primary, 0.08)} 100%)`, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 44, fontWeight: 700, color: brand.colors.text, lineHeight: 1.1, marginBottom: 24, textAlign: 'center' }}>{headline}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' as const }}>
          {chains.map((chain, i) => (
            <div key={i} style={{ padding: '10px 20px', borderRadius: 10, background: hexAlpha(brand.colors.primary, 0.1), border: `1px solid ${hexAlpha(brand.colors.primary, 0.15)}`, fontSize: 15, fontWeight: 500, color: brand.colors.text }}>{chain}</div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: 16, color: hexAlpha(brand.colors.text, 0.5), position: 'relative', zIndex: 1 }}>{subtitle}</div>
    </div>
  )
}

export function PortfolioPerformance({ brand, variables }: TemplateProps) {
  const metric = variables.metric || '+127%'
  const period = variables.period || 'This Year'
  const subtitle = variables.subtitle || 'Track your gains in real-time'
  const { width, height } = DIMENSIONS['1:1']
  const isPositive = metric.startsWith('+')
  const metricColor = isPositive ? (brand.colors.accent || '#00D395') : '#EF4444'

  return (
    <div style={{ width, height, background: brand.colors.background, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      {isPositive && (
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: 0, height: 0, borderLeft: '120px solid transparent', borderRight: '120px solid transparent', borderBottom: `200px solid ${hexAlpha(metricColor, 0.06)}` }} />
      )}

      <div style={{ position: 'absolute', top: 48, left: 48, display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.5) }}>{brand.name}</span>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 110, fontWeight: 700, color: metricColor, lineHeight: 1 }}>{metric}</div>
        <div style={{ fontSize: 22, color: hexAlpha(brand.colors.text, 0.5), marginTop: 12, fontWeight: 500 }}>{period}</div>
        <div style={{ fontSize: 16, color: hexAlpha(brand.colors.text, 0.35), marginTop: 8 }}>{subtitle}</div>
      </div>
    </div>
  )
}

export function PortfolioDefiDashboard({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Your DeFi Command Center'
  const features = (variables.features || 'Lending, Staking, LPs, Yield Farming').split(',').map(f => f.trim())
  const subtitle = variables.subtitle || 'Track all your DeFi positions in real-time'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>

        <div>
          <div style={{ fontSize: 40, fontWeight: 700, color: brand.colors.text, lineHeight: 1.15, marginBottom: 12, maxWidth: 450 }}>{headline}</div>
          <div style={{ fontSize: 16, color: hexAlpha(brand.colors.text, 0.5) }}>{subtitle}</div>
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' as const }}>
          {features.map((f, i) => (
            <div key={i} style={{ padding: '8px 16px', borderRadius: 8, background: hexAlpha(accent, 0.1), border: `1px solid ${hexAlpha(accent, 0.15)}`, fontSize: 13, fontWeight: 600, color: accent }}>{f}</div>
          ))}
        </div>
      </div>

      <div style={{ width: 380, display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', zIndex: 1, paddingLeft: 24 }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ borderRadius: 12, background: hexAlpha(brand.colors.text, 0.03), border: `1px solid ${hexAlpha(brand.colors.text, 0.06)}`, padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ width: 80 + i * 20, height: 8, borderRadius: 4, background: hexAlpha(brand.colors.text, 0.08), marginBottom: 6 }} />
              <div style={{ width: 50 + i * 10, height: 6, borderRadius: 3, background: hexAlpha(brand.colors.text, 0.05) }} />
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: accent }}>+{i * 12}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PortfolioAllInOne({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Everything You Need'
  const subtitle = variables.subtitle || 'Swap, bridge, track, and earn — all in one app'
  const cta = variables.cta || 'Get started →'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary
  const items = ['Swap', 'Bridge', 'Track', 'Earn']

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>

        <div>
          <div style={{ fontSize: 44, fontWeight: 700, color: brand.colors.text, lineHeight: 1.1, marginBottom: 16 }}>{headline}</div>
          <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.5), marginBottom: 28 }}>{subtitle}</div>
          <div style={{ display: 'inline-flex', padding: '14px 28px', borderRadius: 10, background: brand.colors.primary, color: '#FFFFFF', fontSize: 16, fontWeight: 600 }}>{cta}</div>
        </div>

        <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.3) }}>{brand.website?.replace('https://', '') || ''}</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, width: 280, alignSelf: 'center', position: 'relative', zIndex: 1 }}>
        {items.map((item, i) => (
          <div key={i} style={{ width: 130, height: 130, borderRadius: 16, background: hexAlpha(i % 2 === 0 ? brand.colors.primary : accent, 0.08), border: `1px solid ${hexAlpha(i % 2 === 0 ? brand.colors.primary : accent, 0.12)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: hexAlpha(i % 2 === 0 ? brand.colors.primary : accent, 0.2) }} />
            <div style={{ fontSize: 14, fontWeight: 600, color: brand.colors.text }}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
