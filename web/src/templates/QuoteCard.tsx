import { BrandConfig } from '../types'

interface QuoteCardProps {
  brand: BrandConfig
  variables: Record<string, string>
}

export function QuoteCard({ brand, variables }: QuoteCardProps) {
  const quote = variables.quote || 'Building the future of finance.'
  const author = variables.author || ''

  return (
    <div
      style={{
        width: 600,
        height: 600,
        background: `linear-gradient(135deg, ${brand.colors.background} 0%, ${brand.colors.secondary || brand.colors.primary}22 100%)`,
        padding: 48,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: "'Inter', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `${brand.colors.primary}15`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -50,
          left: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `${brand.colors.accent || brand.colors.primary}10`,
        }}
      />

      {/* Logo */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <img
          src={brand.logo}
          alt={brand.name}
          style={{
            height: 48,
            width: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* Quote */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: brand.colors.text,
            lineHeight: 1.3,
            marginBottom: 24,
          }}
        >
          "{quote}"
        </div>
        {author && (
          <div
            style={{
              fontSize: 16,
              color: brand.colors.accent || brand.colors.primary,
              fontWeight: 500,
            }}
          >
            — {author}
          </div>
        )}
      </div>

      {/* Brand footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 4,
            height: 32,
            background: brand.colors.accent || brand.colors.primary,
            borderRadius: 2,
          }}
        />
        <div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: brand.colors.text,
            }}
          >
            {brand.name}
          </div>
          {brand.tagline && (
            <div
              style={{
                fontSize: 14,
                color: `${brand.colors.text}99`,
              }}
            >
              {brand.tagline}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
