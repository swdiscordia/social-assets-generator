import { BrandConfig } from '../types'

interface AnnouncementBannerProps {
  brand: BrandConfig
  variables: Record<string, string>
}

export function AnnouncementBanner({ brand, variables }: AnnouncementBannerProps) {
  const headline = variables.headline || 'Introducing Something New'
  const subheadline = variables.subheadline || 'The future is here.'
  const cta = variables.cta || 'Learn more →'

  return (
    <div
      style={{
        width: 800,
        height: 450,
        background: brand.colors.background,
        padding: 48,
        display: 'flex',
        fontFamily: "'Inter', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${brand.colors.primary}20 0%, transparent 50%, ${brand.colors.accent || brand.colors.primary}15 100%)`,
        }}
      />

      {/* Grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${brand.colors.text}08 1px, transparent 1px), linear-gradient(90deg, ${brand.colors.text}08 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
            src={brand.logo}
            alt={brand.name}
            style={{
              height: 40,
              width: 'auto',
              objectFit: 'contain',
            }}
          />
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: brand.colors.text,
            }}
          >
            {brand.name}
          </div>
        </div>

        {/* Main content */}
        <div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: brand.colors.text,
              lineHeight: 1.1,
              marginBottom: 16,
              maxWidth: 600,
            }}
          >
            {headline}
          </div>
          <div
            style={{
              fontSize: 20,
              color: `${brand.colors.text}BB`,
              marginBottom: 24,
              maxWidth: 500,
            }}
          >
            {subheadline}
          </div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: brand.colors.primary,
              color: '#FFFFFF',
              padding: '12px 24px',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            {cta}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            fontSize: 14,
            color: `${brand.colors.text}66`,
          }}
        >
          {brand.website?.replace('https://', '') || brand.twitter}
        </div>
      </div>

      {/* Decorative side element */}
      <div
        style={{
          position: 'absolute',
          right: -100,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 400,
          height: 400,
          borderRadius: '50%',
          border: `2px solid ${brand.colors.primary}30`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: -50,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 300,
          height: 300,
          borderRadius: '50%',
          border: `2px solid ${brand.colors.accent || brand.colors.primary}20`,
        }}
      />
    </div>
  )
}
