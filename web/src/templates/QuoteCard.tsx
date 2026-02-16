import { BrandConfig } from '../types'

interface QuoteCardProps {
  brand: BrandConfig
  variables: Record<string, string>
}

export function QuoteCard({ brand, variables }: QuoteCardProps) {
  const quote = variables.quote || 'Building the future of finance.'
  const author = variables.author || ''
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div
      style={{
        width: 600,
        height: 600,
        background: brand.colors.background,
        padding: 64,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Aurora background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 70% 50% at 30% 20%, ${brand.colors.primary}18 0%, transparent 50%),
            radial-gradient(ellipse 60% 60% at 80% 80%, ${accent}12 0%, transparent 50%)
          `,
        }}
      />

      {/* Floating orbs */}
      <div
        style={{
          position: 'absolute',
          top: -60,
          right: -60,
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${brand.colors.primary}20 0%, transparent 70%)`,
          filter: 'blur(35px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${accent}15 0%, transparent 70%)`,
          filter: 'blur(45px)',
        }}
      />

      {/* Decorative quote marks */}
      <div
        style={{
          position: 'absolute',
          top: 40,
          left: 40,
          fontSize: 200,
          fontFamily: "'Georgia', serif",
          color: `${brand.colors.primary}10`,
          lineHeight: 1,
          fontWeight: 300,
          zIndex: 0,
        }}
      >
        "
      </div>

      {/* Logo */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div
          style={{
            padding: '12px 16px',
            borderRadius: 14,
            background: `${brand.colors.background}60`,
            backdropFilter: 'blur(10px)',
            border: `1px solid ${brand.colors.text}08`,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 28, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 15, fontWeight: 600, color: brand.colors.text }}>
            {brand.name}
          </span>
        </div>

        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${accent} 0%, ${brand.colors.primary} 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 14,
            color: '#fff',
            boxShadow: `0 2px 12px ${accent}40`,
          }}
        >
          ✓
        </div>
      </div>

      {/* Quote content */}
      <div style={{ position: 'relative', zIndex: 1, paddingLeft: 20 }}>
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: brand.colors.text,
            lineHeight: 1.35,
            marginBottom: 28,
            letterSpacing: '-0.01em',
          }}
        >
          {quote}
        </div>
        
        {author && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 2,
                background: `linear-gradient(90deg, ${accent} 0%, transparent 100%)`,
              }}
            />
            <div style={{ fontSize: 15, color: accent, fontWeight: 600 }}>
              — {author}
            </div>
          </div>
        )}
      </div>

      {/* Brand footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 1,
          paddingTop: 24,
          borderTop: `1px solid ${brand.colors.text}08`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 4,
              height: 40,
              background: `linear-gradient(180deg, ${accent} 0%, ${brand.colors.primary} 100%)`,
              borderRadius: 2,
            }}
          />
          <div>
            <div style={{ fontSize: 17, fontWeight: 700, color: brand.colors.text }}>
              {brand.name}
            </div>
            {brand.tagline && (
              <div style={{ fontSize: 13, color: `${brand.colors.text}80`, marginTop: 2 }}>
                {brand.tagline}
              </div>
            )}
          </div>
        </div>

        <div style={{ fontSize: 12, color: `${brand.colors.text}40`, fontWeight: 500 }}>
          {brand.twitter || brand.website?.replace('https://', '')}
        </div>
      </div>
    </div>
  )
}
