import { TemplateProps, DIMENSIONS, FONT_FAMILY, hexAlpha } from './shared'

export function CommunityAma({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Ask Me Anything'
  const guest = variables.guest || 'With our CTO'
  const date = variables.date || 'Friday, March 15 · 4PM UTC'
  const platform = variables.platform || 'Twitter Spaces'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: 80, top: '50%', transform: 'translateY(-50%)', opacity: 0.1 }}>
        <div style={{ width: 60, height: 60, borderRadius: '50%', background: accent, margin: '0 auto 8px' }} />
        <div style={{ width: 40, height: 80, borderRadius: '0 0 20px 20px', background: accent, margin: '0 auto' }} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>
        <div style={{ padding: '6px 16px', borderRadius: 8, background: hexAlpha(accent, 0.12), color: accent, fontSize: 13, fontWeight: 600 }}>{platform}</div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 600 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: accent, letterSpacing: 3, marginBottom: 12 }}>AMA</div>
        <div style={{ fontSize: 48, fontWeight: 700, color: brand.colors.text, lineHeight: 1.1, marginBottom: 16 }}>{headline}</div>
        <div style={{ fontSize: 22, color: hexAlpha(brand.colors.text, 0.6), marginBottom: 20 }}>{guest}</div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 10, background: hexAlpha(brand.colors.text, 0.05), border: `1px solid ${hexAlpha(brand.colors.text, 0.08)}` }}>
          <span style={{ fontSize: 16, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.7) }}>{date}</span>
        </div>
      </div>

      <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.twitter || ''}</div>
    </div>
  )
}

export function CommunityGiveaway({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'GIVEAWAY'
  const prize = variables.prize || '10,000 FOX Tokens'
  const rules = (variables.rules || 'Follow us, Retweet this post, Tag 2 friends').split(',').map(r => r.trim())
  const endDate = variables.endDate || 'Ends March 20'
  const { width, height } = DIMENSIONS['1:1']
  const accent = brand.colors.accent || brand.colors.primary

  const sparkles = Array.from({ length: 15 }, (_, i) => ({
    left: `${10 + (i * 37) % 80}%`,
    top: `${5 + (i * 53) % 90}%`,
    size: 4 + (i % 3) * 3,
    rotation: (i * 45) % 360,
  }))

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 64, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      {sparkles.map((s, i) => (
        <div key={i} style={{ position: 'absolute', left: s.left, top: s.top, width: s.size, height: s.size, background: hexAlpha(i % 2 === 0 ? brand.colors.primary : accent, 0.15), transform: `rotate(${s.rotation}deg)` }} />
      ))}

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 40, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 18, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{ fontSize: 48, fontWeight: 700, color: brand.colors.text, letterSpacing: 4, marginBottom: 16 }}>{headline}</div>
        <div style={{ display: 'inline-flex', padding: '12px 32px', borderRadius: 10, background: hexAlpha(accent, 0.12), marginBottom: 28 }}>
          <span style={{ fontSize: 28, fontWeight: 700, color: accent }}>{prize}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 500, margin: '0 auto' }}>
          {rules.map((rule, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: hexAlpha(brand.colors.primary, 0.15), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: brand.colors.primary, flexShrink: 0 }}>{i + 1}</div>
              <span style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.7), fontWeight: 500 }}>{rule}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: 15, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.4), position: 'relative', zIndex: 1 }}>{endDate}</div>
    </div>
  )
}

export function CommunityPartnership({ brand, variables }: TemplateProps) {
  const partnerName = variables.partnerName || 'Chainlink'
  const partnerLogo = variables.partnerLogo || ''
  const headline = variables.headline || 'Strategic Partnership'
  const subtitle = variables.subtitle || 'Bringing reliable price feeds to our platform'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${hexAlpha(brand.colors.primary, 0.06)} 0%, transparent 60%)` }} />

      <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase' as const, color: accent, textAlign: 'center', position: 'relative', zIndex: 1 }}>PARTNERSHIP</div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 48, position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 64, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 18, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>
        <div style={{ fontSize: 32, color: hexAlpha(brand.colors.text, 0.2), fontWeight: 300 }}>×</div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          {partnerLogo ? (
            <img src={partnerLogo} alt={partnerName} style={{ height: 64, width: 'auto', objectFit: 'contain' }} />
          ) : (
            <div style={{ width: 64, height: 64, borderRadius: 16, background: hexAlpha(accent, 0.12), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 700, color: accent }}>{partnerName[0]}</div>
          )}
          <span style={{ fontSize: 18, fontWeight: 600, color: brand.colors.text }}>{partnerName}</span>
        </div>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 32, fontWeight: 700, color: brand.colors.text, marginBottom: 8 }}>{headline}</div>
        <div style={{ fontSize: 17, color: hexAlpha(brand.colors.text, 0.5) }}>{subtitle}</div>
      </div>
    </div>
  )
}

export function CommunityGovernance({ brand, variables }: TemplateProps) {
  const proposalTitle = variables.proposalTitle || 'SCP-42: Add Solana Support'
  const headline = variables.headline || 'Vote Now'
  const deadline = variables.deadline || 'Voting ends March 22'
  const cta = variables.cta || 'Cast your vote →'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${hexAlpha(brand.colors.text, 0.015)} 1px, transparent 1px), linear-gradient(90deg, ${hexAlpha(brand.colors.text, 0.015)} 1px, transparent 1px)`, backgroundSize: '48px 48px' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase' as const, color: hexAlpha(brand.colors.text, 0.3) }}>GOVERNANCE</div>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 48, fontWeight: 700, color: accent, marginBottom: 16 }}>{headline}</div>
        <div style={{ fontSize: 24, fontWeight: 600, color: brand.colors.text, marginBottom: 20, maxWidth: 700 }}>{proposalTitle}</div>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <div style={{ display: 'inline-flex', padding: '14px 28px', borderRadius: 10, background: brand.colors.primary, color: '#FFFFFF', fontSize: 16, fontWeight: 600 }}>{cta}</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', borderRadius: 10, background: hexAlpha(brand.colors.text, 0.05), border: `1px solid ${hexAlpha(brand.colors.text, 0.08)}` }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: accent }} />
            <span style={{ fontSize: 14, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.6) }}>{deadline}</span>
          </div>
        </div>
      </div>

      <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.website?.replace('https://', '') || ''}</div>
    </div>
  )
}

export function CommunityMilestone({ brand, variables }: TemplateProps) {
  const milestone = variables.milestone || '100K Followers'
  const headline = variables.headline || 'We did it together!'
  const subtitle = variables.subtitle || 'Thank you to every single one of you'
  const { width, height } = DIMENSIONS['1:1']
  const accent = brand.colors.accent || brand.colors.primary

  const sparkles = Array.from({ length: 12 }, (_, i) => ({
    left: `${15 + (i * 37) % 70}%`,
    top: `${10 + (i * 47) % 80}%`,
    size: 6 + (i % 3) * 4,
    rotation: (i * 30) % 360,
  }))

  return (
    <div style={{ width, height, background: brand.colors.background, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      {sparkles.map((s, i) => (
        <div key={i} style={{ position: 'absolute', left: s.left, top: s.top, width: s.size, height: s.size, background: hexAlpha(i % 2 === 0 ? brand.colors.primary : accent, 0.12 + (i % 4) * 0.04), transform: `rotate(${s.rotation}deg)`, borderRadius: i % 3 === 0 ? '50%' : 0 }} />
      ))}

      <div style={{ position: 'absolute', top: 48, left: 48, display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 40, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 18, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 64, fontWeight: 700, color: accent, lineHeight: 1, marginBottom: 16 }}>{milestone}</div>
        <div style={{ fontSize: 32, fontWeight: 700, color: brand.colors.text, marginBottom: 12 }}>{headline}</div>
        <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.5) }}>{subtitle}</div>
      </div>
    </div>
  )
}
