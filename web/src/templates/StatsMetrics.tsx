import { TemplateProps, DIMENSIONS, FONT_FAMILY, hexAlpha } from './shared'

export function StatsTvlMilestone({ brand, variables }: TemplateProps) {
  const metricValue = variables.metricValue || '$2.5B'
  const metricLabel = variables.metricLabel || 'Total Value Locked'
  const subtitle = variables.subtitle || 'A new milestone for our community'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  const bars = [40, 55, 45, 65, 60, 80, 75, 95]

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 0, right: 48, display: 'flex', alignItems: 'flex-end', gap: 8, opacity: 0.15 }}>
        {bars.map((h, i) => (
          <div key={i} style={{ width: 32, height: h * 4, borderRadius: '6px 6px 0 0', background: `linear-gradient(180deg, ${accent}, ${hexAlpha(accent, 0.3)})` }} />
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 16, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.4), letterSpacing: 2, textTransform: 'uppercase' as const, marginBottom: 8 }}>{metricLabel}</div>
        <div style={{ fontSize: 80, fontWeight: 700, color: brand.colors.text, lineHeight: 1 }}>{metricValue}</div>
        <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.5), marginTop: 12 }}>{subtitle}</div>
      </div>

      <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.website?.replace('https://', '') || ''}</div>
    </div>
  )
}

export function StatsUsersMilestone({ brand, variables }: TemplateProps) {
  const metricValue = variables.metricValue || '1M+'
  const metricLabel = variables.metricLabel || 'Active Users'
  const subtitle = variables.subtitle || 'Thank you for building with us'
  const { width, height } = DIMENSIONS['1:1']
  const accent = brand.colors.accent || brand.colors.primary

  const dots = Array.from({ length: 30 }, (_, i) => ({
    left: `${8 + (i * 31) % 84}%`,
    top: `${8 + (i * 43) % 84}%`,
    size: 4 + (i % 4) * 2,
  }))

  return (
    <div style={{ width, height, background: brand.colors.background, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      {dots.map((d, i) => (
        <div key={i} style={{ position: 'absolute', left: d.left, top: d.top, width: d.size, height: d.size, borderRadius: '50%', background: hexAlpha(i % 3 === 0 ? accent : brand.colors.primary, 0.1 + (i % 5) * 0.03) }} />
      ))}

      <div style={{ position: 'absolute', top: 48, left: 48, display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.5) }}>{brand.name}</span>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 100, fontWeight: 700, color: brand.colors.text, lineHeight: 1 }}>{metricValue}</div>
        <div style={{ fontSize: 20, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.4), marginTop: 8, letterSpacing: 2, textTransform: 'uppercase' as const }}>{metricLabel}</div>
        <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.5), marginTop: 16 }}>{subtitle}</div>
      </div>
    </div>
  )
}

export function StatsVolume24h({ brand, variables }: TemplateProps) {
  const metricValue = variables.metricValue || '$48M'
  const metricLabel = variables.metricLabel || '24h Trading Volume'
  const change = variables.change || '+23%'
  const { width, height } = DIMENSIONS['1:1']
  const isPositive = change.startsWith('+')
  const changeColor = isPositive ? (brand.colors.accent || '#00D395') : '#EF4444'

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 64, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${hexAlpha(brand.colors.primary, 0.06)} 0%, transparent 60%)` }} />

      <div style={{ position: 'absolute', top: 48, left: 48, display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.5) }}>{brand.name}</span>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 16, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.4), letterSpacing: 2, textTransform: 'uppercase' as const, marginBottom: 12 }}>{metricLabel}</div>
        <div style={{ fontSize: 88, fontWeight: 700, color: brand.colors.text, lineHeight: 1, marginBottom: 12 }}>{metricValue}</div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 8, background: hexAlpha(changeColor, 0.1) }}>
          <span style={{ fontSize: 14 }}>{isPositive ? '↑' : '↓'}</span>
          <span style={{ fontSize: 18, fontWeight: 600, color: changeColor }}>{change}</span>
        </div>
      </div>
    </div>
  )
}

export function StatsGrowthChart({ brand, variables }: TemplateProps) {
  const metricValue = variables.metricValue || '+340%'
  const metricLabel = variables.metricLabel || 'Year-over-Year Growth'
  const subtitle = variables.subtitle || '2025 was our biggest year yet'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  const bars = [20, 35, 28, 45, 55, 50, 70, 65, 85, 95]

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 48, right: 48, display: 'flex', alignItems: 'flex-end', gap: 6, opacity: 0.2 }}>
        {bars.map((h, i) => (
          <div key={i} style={{ width: 24, height: h * 3.5, borderRadius: '4px 4px 0 0', background: i === bars.length - 1 ? accent : brand.colors.primary }} />
        ))}
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>

        <div>
          <div style={{ fontSize: 16, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.4), letterSpacing: 2, textTransform: 'uppercase' as const, marginBottom: 8 }}>{metricLabel}</div>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1, background: `linear-gradient(135deg, ${brand.colors.text} 0%, ${accent} 100%)`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{metricValue}</div>
          <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.5), marginTop: 12 }}>{subtitle}</div>
        </div>

        <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.3) }}>{brand.website?.replace('https://', '') || ''}</div>
      </div>
    </div>
  )
}

export function StatsYearReview({ brand, variables }: TemplateProps) {
  const year = variables.year || '2025'
  const stats = (variables.stats || '$5B Volume, 1M+ Users, 13 Chains, 500K+ Swaps').split(',').map(s => s.trim())
  const headline = variables.headline || 'Year in Review'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', right: -100, transform: 'translateY(-50%)', fontSize: 300, fontWeight: 700, color: hexAlpha(brand.colors.primary, 0.03), lineHeight: 1 }}>{year}</div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>
        <div style={{ fontSize: 48, fontWeight: 700, color: hexAlpha(brand.colors.text, 0.1) }}>{year}</div>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 36, fontWeight: 700, color: brand.colors.text, marginBottom: 28, textAlign: 'center' }}>{headline}</div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(stats.length, 4)}, 1fr)`, gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {stats.map((stat, i) => {
            const parts = stat.match(/^([\d$+.%BKM]+\+?)\s*(.*)$/)
            const value = parts ? parts[1] : stat
            const label = parts ? parts[2] : ''
            return (
              <div key={i} style={{ padding: '20px 16px', borderRadius: 14, background: hexAlpha(brand.colors.text, 0.03), border: `1px solid ${hexAlpha(brand.colors.text, 0.06)}`, textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: i % 2 === 0 ? accent : brand.colors.text, lineHeight: 1 }}>{value}</div>
                {label && <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.4), marginTop: 6, fontWeight: 500 }}>{label}</div>}
              </div>
            )
          })}
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: 13, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.website?.replace('https://', '') || ''}</div>
    </div>
  )
}
