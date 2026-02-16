import { BrandConfig } from '../types'

interface AnnouncementBannerProps {
  brand: BrandConfig
  variables: Record<string, string>
}

export function AnnouncementBanner({ brand, variables }: AnnouncementBannerProps) {
  const headline = variables.headline || 'Introducing Something New'
  const subheadline = variables.subheadline || 'The future is here.'
  const cta = variables.cta || 'Learn more →'
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div
      style={{
        width: 800,
        height: 450,
        background: brand.colors.background,
        padding: 48,
        display: 'flex',
        fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Aurora gradient background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, ${brand.colors.primary}25 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, ${accent}20 0%, transparent 50%),
            radial-gradient(ellipse 50% 60% at 50% 100%, ${brand.colors.primary}15 0%, transparent 50%)
          `,
        }}
      />

      {/* Floating orbs */}
      <div
        style={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${brand.colors.primary}30 0%, ${brand.colors.primary}10 40%, transparent 70%)`,
          filter: 'blur(40px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${accent}25 0%, ${accent}08 40%, transparent 70%)`,
          filter: 'blur(50px)',
        }}
      />

      {/* Glassmorphism card */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
          padding: 40,
          background: `${brand.colors.background}50`,
          backdropFilter: 'blur(20px)',
          borderRadius: 24,
          border: `1px solid ${brand.colors.text}10`,
          boxShadow: `0 8px 32px ${brand.colors.primary}10`,
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              padding: 10,
              borderRadius: 14,
              background: `linear-gradient(135deg, ${brand.colors.primary}25 0%, ${accent}20 100%)`,
              border: `1px solid ${brand.colors.primary}30`,
            }}
          >
            <img
              src={"/images/fox-logo.svg"}
              alt={brand.name}
              style={{ height: 28, width: 'auto', objectFit: 'contain' }}
            />
          </div>
          <div style={{ fontSize: 18, fontWeight: 600, color: brand.colors.text }}>
            {brand.name}
          </div>
        </div>

        {/* Main content */}
        <div>
          <div
            style={{
              fontSize: 46,
              fontWeight: 800,
              color: brand.colors.text,
              lineHeight: 1.08,
              marginBottom: 16,
              maxWidth: 550,
              letterSpacing: '-0.02em',
            }}
          >
            {headline}
          </div>
          <div
            style={{
              fontSize: 18,
              color: `${brand.colors.text}AA`,
              marginBottom: 28,
              maxWidth: 450,
              lineHeight: 1.5,
            }}
          >
            {subheadline}
          </div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: `linear-gradient(135deg, ${brand.colors.primary} 0%, ${accent} 100%)`,
              color: '#FFFFFF',
              padding: '14px 28px',
              borderRadius: 12,
              fontSize: 15,
              fontWeight: 600,
              boxShadow: `0 4px 20px ${brand.colors.primary}50`,
            }}
          >
            {cta}
            <span style={{ fontSize: 18 }}>→</span>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 13, color: `${brand.colors.text}60`, fontWeight: 500 }}>
            {brand.website?.replace('https://', '') || brand.twitter}
          </div>
          <div style={{ display: 'flex', gap: 16, fontSize: 12, color: `${brand.colors.text}50` }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent }} />
              Trusted by 1M+ users
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
