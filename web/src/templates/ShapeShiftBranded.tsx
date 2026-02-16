import { TemplateProps, DIMENSIONS, FONT_FAMILY, hexAlpha } from './shared'

/**
 * Mountain Landscape Template
 * Uses the flat mountains background with overlay
 * Perfect for announcements, quotes, hero content
 */
export function MountainLandscape({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'ShapeShift'
  const subtext = variables.subtext || 'Your multichain crypto home base'
  const backgroundImage = variables.backgroundImage || ''
  const { width, height } = DIMENSIONS['16:9']

  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: FONT_FAMILY,
        background: `linear-gradient(135deg, ${brand.colors.background} 0%, ${hexAlpha(brand.colors.primary, 0.3)} 100%)`,
      }}
    >
      {backgroundImage && backgroundImage.includes('fox-logo.svg') ? (
        <img
          src="/images/fox-logo.svg"
          alt=""
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            width: '60%',
            height: 'auto',
            opacity: 0.06,
            objectFit: 'contain',
            transform: 'rotate(-15deg)',
            zIndex: 1,
          }}
        />
      ) : backgroundImage ? (
        <img
          src={backgroundImage}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ) : null}

      {backgroundImage && !backgroundImage.includes('fox-logo.svg') ? (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(180deg, ${hexAlpha(brand.colors.background, 0.3)} 0%, transparent 40%, ${hexAlpha(brand.colors.background, 0.6)} 100%)`,
          }}
        />
      ) : null}

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 60,
        }}
      >
        {/* Header - Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <img
            src="/images/fox-logo.svg"
            alt={brand.name}
            style={{
              height: 48,
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.4))',
            }}
          />
          <span
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: brand.colors.text,
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            }}
          >
            {brand.name}
          </span>
        </div>

        {/* Main Content */}
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: brand.colors.text,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              margin: 0,
              marginBottom: 20,
              textShadow: '0 4px 40px rgba(0,0,0,0.6)',
            }}
          >
            {headline}
          </h1>
          
          <p
            style={{
              fontSize: 28,
              color: hexAlpha(brand.colors.text, 0.9),
              margin: 0,
              fontWeight: 500,
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            }}
          >
            {subtext}
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 14,
            color: hexAlpha(brand.colors.text, 0.7),
          }}
        >
          <span>{brand.website?.replace('https://', '')}</span>
          <span>{brand.twitter}</span>
        </div>
      </div>
    </div>
  )
}

/**
 * Fox Moon Template
 * Uses the fox silhouette illustration with moon
 * Perfect for storytelling, brand moments, community posts
 */
export function FoxMoon({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Building the future'
  const subtext = variables.subtext || 'of finance'
  const backgroundImage = variables.backgroundImage || ''
  const { width, height } = DIMENSIONS['1:1']

  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: FONT_FAMILY,
      }}
    >
      {/* Background Image or Watermark */}
      {backgroundImage && backgroundImage.includes('fox-logo.svg') ? (
        <img
          src="/images/fox-logo.svg"
          alt=""
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            width: '60%',
            height: 'auto',
            opacity: 0.06,
            objectFit: 'contain',
            transform: 'rotate(-15deg)',
          }}
        />
      ) : backgroundImage ? (
        <img
          src={backgroundImage}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'left center',
          }}
        />
      ) : null}

      {/* Grey to Blue gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, #2a2f3a 0%, ${hexAlpha('#3b82f6', 0.3)} 50%, ${hexAlpha(brand.colors.primary, 0.4)} 100%)`,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 50,
        }}
      >
        {/* Logo top right - clean */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: brand.colors.text,
            }}
          >
            {brand.name}
          </span>
          <img
            src="/images/fox-logo.svg"
            alt={brand.name}
            style={{
              height: 28,
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Main Content - Bottom aligned */}
        <div>
          <h1
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: brand.colors.text,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: 0,
              marginBottom: 16,
              textShadow: '0 4px 30px rgba(0,0,0,0.6)',
            }}
          >
            {headline}
            <br />
            <span style={{ color: brand.colors.accent || brand.colors.primary }}>{subtext}</span>
          </h1>


        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 40,
            paddingTop: 20,
            borderTop: `1px solid ${hexAlpha(brand.colors.text, 0.2)}`,
            fontSize: 13,
            color: hexAlpha(brand.colors.text, 0.6),
            fontWeight: 500,
          }}
        >
          {brand.tagline || 'Your Keys. Your Crypto.'}
        </div>
      </div>
    </div>
  )
}

/**
 * Stats Mountain Template
 * Mountains background with big stats overlay
 * Perfect for milestones, achievements
 */
export function StatsMountain({ brand, variables }: TemplateProps) {
  const metric = variables.metric || '$2.5B+'
  const label = variables.label || 'Total Volume'
  const backgroundImage = variables.backgroundImage || ''
  const { width, height } = DIMENSIONS['1:1']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: FONT_FAMILY,
      }}
    >
      {/* Background Image (Mountains, Fox Moon, etc.) */}
      {backgroundImage && !backgroundImage.includes('fox-logo.svg') && (
        <img
          src={backgroundImage}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: backgroundImage.includes('fox-moon') ? 'left center' : 'center',
            zIndex: 0,
          }}
        />
      )}

      {/* Clean gradient background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: backgroundImage && !backgroundImage.includes('fox-logo.svg')
            ? `linear-gradient(135deg, ${hexAlpha(brand.colors.background, 0.4)} 0%, transparent 50%),
               ${brand.colors.background}`
            : `radial-gradient(ellipse at 30% 20%, ${hexAlpha(brand.colors.primary, 0.25)} 0%, transparent 50%),
               radial-gradient(ellipse at 70% 80%, ${hexAlpha(accent, 0.2)} 0%, transparent 50%),
               ${brand.colors.background}`,
        }}
      />

      {/* Fox Logo Watermark - on top of gradient */}
      {backgroundImage && backgroundImage.includes('fox-logo.svg') && (
        <img
          src="/images/fox-logo.svg"
          alt=""
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            width: '60%',
            height: 'auto',
            opacity: 0.08,
            objectFit: 'contain',
            transform: 'rotate(-15deg)',
            zIndex: 1,
          }}
        />
      )}

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 50,
          textAlign: 'center',
        }}
      >
        {/* Logo */}
        <div
          style={{
            marginBottom: 40,
          }}
        >
          <img
            src="/images/fox-logo.svg"
            alt={brand.name}
            style={{
              height: 48,
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.4))',
            }}
          />
        </div>

        {/* Metric */}
        <div
          style={{
            fontSize: 100,
            fontWeight: 800,
            color: brand.colors.text,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            marginBottom: 16,
            textShadow: '0 4px 50px rgba(0,0,0,0.5)',
          }}
        >
          {metric}
        </div>

        {/* Label */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: hexAlpha(brand.colors.text, 0.9),
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
          }}
        >
          {label}
        </div>

        {/* Decorative line */}
        <div
          style={{
            width: 60,
            height: 4,
            background: accent,
            borderRadius: 2,
            marginTop: 40,
          }}
        />
      </div>
    </div>
  )
}
