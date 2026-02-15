import { TemplateProps, DIMENSIONS, FONT_FAMILY, hexAlpha } from './shared'

export function ThreadOpenerBold({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'The future of DeFi is multi-chain.'
  const threadLabel = variables.threadLabel || 'THREAD'
  const subtitle = variables.subtitle || "Here's why 👇"
  const { width, height } = DIMENSIONS['1:1']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 64, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 6, background: `linear-gradient(180deg, ${accent}, ${brand.colors.primary})` }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1, paddingLeft: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={brand.logo} alt={brand.name} style={{ height: 40, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 18, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>
        <div style={{ padding: '6px 16px', borderRadius: 6, background: hexAlpha(accent, 0.15), color: accent, fontSize: 12, fontWeight: 700, letterSpacing: 2 }}>{threadLabel}</div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, paddingLeft: 16 }}>
        <div style={{ fontSize: 46, fontWeight: 700, color: brand.colors.text, lineHeight: 1.2, marginBottom: 20, maxWidth: 800 }}>{headline}</div>
        <div style={{ fontSize: 24, color: hexAlpha(brand.colors.text, 0.5) }}>{subtitle}</div>
      </div>

      <div style={{ paddingLeft: 16, fontSize: 14, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.twitter || ''}</div>
    </div>
  )
}

export function ThreadNumberCard({ brand, variables }: TemplateProps) {
  const threadNumber = variables.threadNumber || '1'
  const totalParts = variables.totalParts || '7'
  const content = variables.content || 'Self-custody is not optional — it is essential.'
  const { width, height } = DIMENSIONS['1:1']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 64, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 80, right: 64, fontSize: 240, fontWeight: 700, color: hexAlpha(brand.colors.primary, 0.04), lineHeight: 1 }}>{threadNumber}</div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.5) }}>{brand.name}</span>
        </div>
        <div style={{ fontSize: 14, color: hexAlpha(brand.colors.text, 0.4) }}>Thread</div>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 24 }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 700, color: '#FFFFFF' }}>{threadNumber}</div>
          <span style={{ fontSize: 20, color: hexAlpha(brand.colors.text, 0.3), fontWeight: 500 }}>/ {totalParts}</span>
        </div>
        <div style={{ fontSize: 32, fontWeight: 600, color: brand.colors.text, lineHeight: 1.4, maxWidth: 800 }}>{content}</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {Array.from({ length: Number(totalParts) || 7 }, (_, i) => (
            <div key={i} style={{ width: i + 1 === Number(threadNumber) ? 24 : 8, height: 4, borderRadius: 2, background: i + 1 === Number(threadNumber) ? accent : hexAlpha(brand.colors.text, 0.15), transition: 'all 0.3s' }} />
          ))}
        </div>
        <span style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.3) }}>{brand.twitter || ''}</span>
      </div>
    </div>
  )
}

export function ThreadKeyPoint({ brand, variables }: TemplateProps) {
  const keyPoint = variables.keyPoint || 'Not your keys, not your crypto.'
  const context = variables.context || 'Over $10B lost to centralized exchange failures in 2022 alone.'
  const { width, height } = DIMENSIONS['1:1']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 64, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '50%', background: `radial-gradient(circle at top right, ${hexAlpha(brand.colors.primary, 0.06)} 0%, transparent 70%)` }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.5) }}>{brand.name}</span>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 72, fontWeight: 300, color: hexAlpha(accent, 0.3), lineHeight: 1, marginBottom: -20, fontFamily: 'Georgia, serif' }}>"</div>
        <div style={{ fontSize: 36, fontWeight: 700, color: brand.colors.text, lineHeight: 1.3, marginBottom: 24, maxWidth: 800 }}>{keyPoint}</div>
        <div style={{ width: 48, height: 2, background: accent, marginBottom: 20 }} />
        <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.45), lineHeight: 1.6, maxWidth: 700 }}>{context}</div>
      </div>

      <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.twitter || ''}</div>
    </div>
  )
}

export function ThreadEndCta({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Ready to take control?'
  const cta = variables.cta || 'Try it free at shapeshift.com'
  const followText = variables.followText || 'Follow for more DeFi insights'
  const { width, height } = DIMENSIONS['1:1']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 64, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${hexAlpha(brand.colors.primary, 0.08)} 0%, transparent 60%)` }} />

      <div style={{ position: 'absolute', top: 48, left: 48, display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={brand.logo} alt={brand.name} style={{ height: 40, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 18, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 44, fontWeight: 700, color: brand.colors.text, marginBottom: 28, lineHeight: 1.2 }}>{headline}</div>
        <div style={{ display: 'inline-flex', padding: '16px 36px', borderRadius: 12, background: brand.colors.primary, color: '#FFFFFF', fontSize: 18, fontWeight: 600, marginBottom: 24, boxShadow: `0 8px 24px ${hexAlpha(brand.colors.primary, 0.25)}` }}>{cta}</div>
        <div style={{ fontSize: 16, color: hexAlpha(brand.colors.text, 0.4) }}>{followText}</div>
        <div style={{ fontSize: 16, fontWeight: 600, color: accent, marginTop: 4 }}>{brand.twitter || ''}</div>
      </div>

      <div style={{ position: 'absolute', bottom: 48, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase' as const, color: hexAlpha(brand.colors.text, 0.2) }}>END OF THREAD</div>
    </div>
  )
}

export function ThreadTldr({ brand, variables }: TemplateProps) {
  const points = (variables.points || 'Multi-chain is the future, Self-custody matters, DeFi is for everyone, Start with a trusted platform').split(',').map(p => p.trim())
  const headline = variables.headline || 'TL;DR'
  const { width, height } = DIMENSIONS['1:1']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 64, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={brand.logo} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.5) }}>{brand.name}</span>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 56, fontWeight: 700, color: accent, marginBottom: 32 }}>{headline}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {points.map((point, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: hexAlpha(brand.colors.primary, 0.1), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700, color: brand.colors.primary, flexShrink: 0 }}>{i + 1}</div>
              <span style={{ fontSize: 22, color: hexAlpha(brand.colors.text, 0.8), fontWeight: 500, lineHeight: 1.4, paddingTop: 4 }}>{point}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: 14, color: hexAlpha(brand.colors.text, 0.3) }}>{brand.twitter || ''}</span>
        <span style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase' as const, color: hexAlpha(brand.colors.text, 0.2) }}>SUMMARY</span>
      </div>
    </div>
  )
}
