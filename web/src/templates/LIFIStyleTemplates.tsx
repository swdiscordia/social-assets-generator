import { TemplateProps, DIMENSIONS, FONT_FAMILY, hexAlpha } from './shared'

/**
 * LI.FI-style Hero Template
 * Clean design with optional background image and subtle grid pattern
 * Perfect for "What is X?" educational posts
 */
export function HeroDeepGradient({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'What is the EIL?'
  const subtext = variables.subtext || ''
  const backgroundImage = variables.backgroundImage || ''
  const { width, height } = DIMENSIONS['16:9']

  return (
    <div
      style={{
        width,
        height,
        background: brand.colors.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONT_FAMILY,
        position: 'relative',
        overflow: 'hidden',
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
          }}
        />
      ) : null}

      {/* Subtle grid pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${hexAlpha(brand.colors.text, 0.03)} 1px, transparent 1px),
            linear-gradient(90deg, ${hexAlpha(brand.colors.text, 0.03)} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.5,
        }}
      />

      {/* Subtle vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse at center, transparent 0%, ${hexAlpha(brand.colors.background, 0.4)} 100%)`,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 32,
        }}
      >
        {/* Logo - clean without background */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <img
            src="/images/fox-logo.svg"
            alt={brand.name}
            style={{
              height: 36,
              width: 'auto',
              objectFit: 'contain',
            }}
          />
          <span
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: brand.colors.text,
              letterSpacing: '0.02em',
            }}
          >
            {brand.name}
          </span>
        </div>

        {/* Headline with two-tone effect */}
        <h1
          style={{
            fontSize: 84,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            margin: 0,
          }}
        >
          {headline.split(' ').map((word, i, arr) => {
            const isSecondHalf = i >= Math.floor(arr.length / 2)
            return (
              <span
                key={i}
                style={{
                  color: isSecondHalf ? brand.colors.primary : brand.colors.text,
                }}
              >
                {word}{' '}
              </span>
            )
          })}
        </h1>

        {/* Subtext */}
        {subtext && (
          <p
            style={{
              fontSize: 24,
              color: hexAlpha(brand.colors.text, 0.7),
              fontWeight: 400,
              margin: 0,
              maxWidth: 600,
            }}
          >
            {subtext}
          </p>
        )}
      </div>

      {/* Decorative corner elements */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          left: 40,
          width: 80,
          height: 80,
          border: `1px solid ${hexAlpha(brand.colors.text, 0.1)}`,
          transform: 'rotate(45deg)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 40,
          right: 40,
          width: 60,
          height: 60,
          border: `1px solid ${hexAlpha(brand.colors.text, 0.08)}`,
          transform: 'rotate(45deg)',
        }}
      />
    </div>
  )
}

/**
 * Partnership Card Template
 * Two logos with "x" separator, LI.FI style
 * Perfect for partnership announcements
 */
export function PartnershipCard({ brand, variables }: TemplateProps) {
  const partnerName = variables.partnerName || 'Partner'
  const partnerLogo = variables.partnerLogo || ''
  const backgroundImage = variables.backgroundImage || ''
  const { width, height } = DIMENSIONS['1:1']

  return (
    <div
      style={{
        width,
        height,
        background: brand.colors.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONT_FAMILY,
        position: 'relative',
        overflow: 'hidden',
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
          }}
        />
      ) : null}

      {/* Vibrant gradient background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${brand.colors.background} 0%, ${hexAlpha(brand.colors.primary, 0.35)} 100%)`,
        }}
      />

      {/* Cross lines */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '-50%',
            right: '-50%',
            height: 1,
            background: hexAlpha(brand.colors.text, 0.15),
            transform: 'translateY(-50%) rotate(45deg)',
            transformOrigin: 'center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '-50%',
            right: '-50%',
            height: 1,
            background: hexAlpha(brand.colors.text, 0.15),
            transform: 'translateY(-50%) rotate(-45deg)',
            transformOrigin: 'center',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
            marginBottom: 48,
          }}
        >
          <img
            src="/images/fox-logo.svg"
            alt={brand.name}
            style={{
              height: 80,
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))',
            }}
          />
          <span
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: brand.colors.text,
              letterSpacing: '0.04em',
            }}
          >
            {brand.name}
          </span>
        </div>

        {/* X Separator */}
        <div
          style={{
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            marginBottom: 48,
          }}
        >
          <div style={{ position: 'absolute', width: 24, height: 2.5, background: hexAlpha(brand.colors.text, 0.5), transform: 'rotate(45deg)', borderRadius: 1 }} />
          <div style={{ position: 'absolute', width: 24, height: 2.5, background: hexAlpha(brand.colors.text, 0.5), transform: 'rotate(-45deg)', borderRadius: 1 }} />
        </div>

        {/* Partner - logo + name */}
        {partnerLogo ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <img
              src={partnerLogo}
              alt={partnerName}
              style={{
                height: 80,
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))',
              }}
            />
            <span
              style={{
                fontSize: 48,
                fontWeight: 800,
                color: brand.colors.text,
              }}
            >
              {partnerName}
            </span>
          </div>
        ) : (
          <div
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: brand.colors.text,
            }}
          >
            {partnerName}
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Partnership Horizontal Template
 * Two logos side by side with "x" separator
 * Perfect for co-marketing announcements: "ShapeShift x Partner"
 */
export function PartnershipHorizontal({ brand, variables }: TemplateProps) {
  const partnerLogo = variables.partnerLogo || ''
  const partnerName = variables.partnerName || (partnerLogo ? '' : 'Partner')
  const tagline = variables.tagline || ''
  const backgroundImage = variables.backgroundImage || ''
  const { width, height } = DIMENSIONS['1:1']

  return (
    <div
      style={{
        width,
        height,
        background: brand.colors.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONT_FAMILY,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Image or Watermark */}
      {backgroundImage && backgroundImage.includes('fox-logo.svg') ? (
        <img
          src="/images/fox-logo.svg"
          alt=""
          style={{
            position: 'absolute',
            bottom: '-15%',
            right: '-10%',
            width: '50%',
            height: 'auto',
            opacity: 0.05,
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
          }}
        />
      ) : null}

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${brand.colors.background} 0%, ${hexAlpha(brand.colors.primary, 0.2)} 50%, ${hexAlpha(brand.colors.accent || brand.colors.primary, 0.15)} 100%)`,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${hexAlpha(brand.colors.text, 0.02)} 1px, transparent 1px),
            linear-gradient(90deg, ${hexAlpha(brand.colors.text, 0.02)} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 40,
        }}
      >
        {/* Logos Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 40,
          }}
        >
          {/* ShapeShift */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <img
              src="/images/fox-logo.svg"
              alt={brand.name}
              style={{
                height: 56,
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))',
              }}
            />
            <span
              style={{
                fontSize: 36,
                fontWeight: 800,
                color: brand.colors.text,
                letterSpacing: '0.02em',
              }}
            >
              {brand.name}
            </span>
          </div>

          {/* X Separator */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 300,
              color: hexAlpha(brand.colors.text, 0.4),
            }}
          >
            ×
          </div>

          {/* Partner */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            {partnerLogo && (
              <img
                src={partnerLogo}
                alt={partnerName}
                style={{
                  height: partnerName ? 56 : 72,
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))',
                }}
              />
            )}
            {partnerName && (
              <span
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  color: brand.colors.text,
                  letterSpacing: '0.02em',
                }}
              >
                {partnerName}
              </span>
            )}
          </div>
        </div>

        {/* Tagline */}
        {tagline && (
          <div
            style={{
              fontSize: 22,
              fontWeight: 500,
              color: hexAlpha(brand.colors.text, 0.7),
              textAlign: 'center',
              maxWidth: 700,
              lineHeight: 1.4,
            }}
          >
            {tagline}
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div
        style={{
          position: 'absolute',
          bottom: 30,
          left: 40,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 14,
          color: hexAlpha(brand.colors.text, 0.4),
        }}
      >
        <span>{brand.website?.replace('https://', '')}</span>
      </div>
    </div>
  )
}

/**
 * Stats Milestone - Clean LI.FI Style
 * Large centered numbers with minimal design
 */
export function StatsMilestone3D({ brand, variables }: TemplateProps) {
  const metric = variables.metric || '779,387'
  const label = variables.label || 'txns'
  const sublabel = variables.sublabel || 'We just hit an all-time record in a single day.'
  const backgroundImage = variables.backgroundImage || ''
  const { width, height } = DIMENSIONS['1:1']

  return (
    <div
      style={{
        width,
        height,
        background: brand.colors.background,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONT_FAMILY,
        position: 'relative',
        overflow: 'hidden',
        padding: 60,
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
          }}
        />
      ) : null}

      {/* Subtle grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${hexAlpha(brand.colors.text, 0.02)} 1px, transparent 1px),
            linear-gradient(90deg, ${hexAlpha(brand.colors.text, 0.02)} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        {/* Logo */}
        <div
          style={{
            marginBottom: 60,
          }}
        >
          <img
            src="/images/fox-logo.svg"
            alt={brand.name}
            style={{
              height: 40,
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Metric */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 800,
            color: brand.colors.text,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            marginBottom: 20,
          }}
        >
          {metric}
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              marginLeft: 12,
            }}
          >
            {label}
          </span>
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: 22,
            color: hexAlpha(brand.colors.text, 0.6),
            fontWeight: 400,
            maxWidth: 500,
            lineHeight: 1.5,
          }}
        >
          {sublabel}
        </div>
      </div>
    </div>
  )
}

/**
 * Event Announcement Template
 * Date, location, with gradient background
 */
export function EventAnnouncement({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Hyperliquid Deutschland'
  const subtext = variables.subtext || 'Come meet us!'
  const date = variables.date || 'January 29th, Berlin'
  const partnerName = variables.partnerName || ''
  const partnerLogo = variables.partnerLogo || ''
  const backgroundImage = variables.backgroundImage || ''
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div
      style={{
        width,
        height,
        background: `linear-gradient(135deg, ${brand.colors.background} 0%, ${hexAlpha(brand.colors.primary, 0.3)} 50%, ${hexAlpha(accent, 0.2)} 100%)`,
        display: 'flex',
        flexDirection: 'column',
        padding: 80,
        fontFamily: FONT_FAMILY,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
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
          }}
        />
      ) : null}

      {/* Gradient orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '70%',
          height: '100%',
          background: `radial-gradient(ellipse at center, ${hexAlpha(brand.colors.primary, 0.35)} 0%, transparent 70%)`,
          filter: 'blur(80px)',
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
          justifyContent: 'space-between',
        }}
      >
        {/* Header with logos and date */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          {/* Brand logos */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <img
                src="/images/fox-logo.svg"
                alt={brand.name}
                style={{
                  height: 32,
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: brand.colors.text,
                }}
              >
                {brand.name}
              </span>
            </div>
            {partnerName && (
              <>
                <span style={{ color: hexAlpha(brand.colors.text, 0.3) }}>|</span>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  {partnerLogo && (
                    <img
                      src={partnerLogo}
                      alt={partnerName}
                      style={{
                        height: 28,
                        width: 'auto',
                        objectFit: 'contain',
            transform: 'rotate(-15deg)',
                      }}
                    />
                  )}
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: hexAlpha(brand.colors.text, 0.8),
                    }}
                  >
                    {partnerName}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Date */}
          <div
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: hexAlpha(brand.colors.text, 0.6),
              letterSpacing: '0.02em',
            }}
          >
            {date}
          </div>
        </div>

        {/* Main headline */}
        <div>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: brand.colors.text,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              margin: 0,
              marginBottom: 20,
            }}
          >
            {headline}
          </h1>
          <p
            style={{
              fontSize: 28,
              color: hexAlpha(brand.colors.text, 0.7),
              margin: 0,
              fontWeight: 500,
            }}
          >
            {subtext}
          </p>
        </div>

        {/* Bottom spacer */}
        <div />
      </div>
    </div>
  )
}

/**
 * UI Showcase Template
 * Device mockup with app screenshot
 */
export function UIShowcase({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'LI.FI Deposit'
  const subtext = variables.subtext || 'One Click Deposits. From Anywhere'
  const screenshot = variables.screenshot || ''
  const backgroundImage = variables.backgroundImage || ''
  const { width, height } = DIMENSIONS['1:1']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div
      style={{
        width,
        height,
        background: `linear-gradient(135deg, ${brand.colors.background} 0%, ${hexAlpha(brand.colors.primary, 0.25)} 100%)`,
        display: 'flex',
        flexDirection: 'column',
        padding: 50,
        fontFamily: FONT_FAMILY,
        position: 'relative',
        overflow: 'hidden',
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
          }}
        />
      ) : null}

      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(ellipse 80% 60% at 70% 80%, ${hexAlpha(accent, 0.2)} 0%, transparent 60%)`,
        }}
      />

      {/* Grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${hexAlpha(brand.colors.text, 0.02)} 1px, transparent 1px),
            linear-gradient(90deg, ${hexAlpha(brand.colors.text, 0.02)} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div
          style={{
            marginBottom: screenshot ? 20 : 40,
          }}
        >
          <h1
            style={{
              fontSize: screenshot ? 32 : 42,
              fontWeight: 800,
              color: brand.colors.text,
              margin: 0,
              marginBottom: 8,
              letterSpacing: '-0.02em',
            }}
          >
            {headline}
          </h1>
          <p
            style={{
              fontSize: screenshot ? 16 : 18,
              color: hexAlpha(brand.colors.text, 0.6),
              margin: 0,
              fontWeight: 500,
            }}
          >
            {subtext}
          </p>
        </div>

        {/* Screenshot or Device mockups */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {screenshot ? (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={screenshot}
                alt="Screenshot"
                style={{
                  maxWidth: '50%',
                  maxHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: 16,
                  boxShadow: `0 25px 80px ${hexAlpha(brand.colors.primary, 0.3)}`,
                }}
              />
            </div>
          ) : (
            <>
              {/* Left device (smaller, blurred, behind) */}
              <div
                style={{
                  width: 220,
                  height: 400,
                  borderRadius: 24,
                  background: hexAlpha(brand.colors.text, 0.05),
                  border: `1px solid ${hexAlpha(brand.colors.text, 0.1)}`,
                  backdropFilter: 'blur(10px)',
                  transform: 'translateX(30px) scale(0.9)',
                  opacity: 0.6,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 16,
                  gap: 12,
                }}
              >
                <div style={{ height: 32, borderRadius: 8, background: hexAlpha(brand.colors.text, 0.08) }} />
                <div style={{ height: 80, borderRadius: 12, background: hexAlpha(brand.colors.primary, 0.15) }} />
                <div style={{ flex: 1, borderRadius: 12, background: hexAlpha(brand.colors.text, 0.05) }} />
              </div>

              {/* Main device */}
              <div
                style={{
                  width: 260,
                  height: 460,
                  borderRadius: 28,
                  background: hexAlpha(brand.colors.text, 0.08),
                  border: `2px solid ${hexAlpha(brand.colors.text, 0.15)}`,
                  backdropFilter: 'blur(20px)',
                  boxShadow: `0 25px 80px ${hexAlpha(brand.colors.primary, 0.25)}`,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 20,
                  gap: 16,
                  zIndex: 2,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, background: brand.colors.primary }} />
                  <span style={{ fontSize: 14, fontWeight: 600, color: brand.colors.text }}>Deposit</span>
                </div>
                <div style={{ padding: 16, borderRadius: 16, background: hexAlpha(brand.colors.text, 0.05), border: `1px solid ${hexAlpha(brand.colors.text, 0.1)}` }}>
                  <div style={{ fontSize: 12, color: hexAlpha(brand.colors.text, 0.5), marginBottom: 8 }}>You deposit</div>
                  <div style={{ fontSize: 32, fontWeight: 700, color: brand.colors.text }}>100</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>↓</div>
                </div>
                <div style={{ padding: 16, borderRadius: 16, background: hexAlpha(brand.colors.text, 0.05), border: `1px solid ${hexAlpha(brand.colors.text, 0.1)}` }}>
                  <div style={{ fontSize: 12, color: hexAlpha(brand.colors.text, 0.5), marginBottom: 8 }}>You receive</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: accent }}>0.00044</div>
                </div>
                <div style={{ marginTop: 'auto', padding: 14, borderRadius: 12, background: brand.colors.primary, color: '#FFFFFF', textAlign: 'center', fontSize: 15, fontWeight: 600 }}>Deposit</div>
              </div>

              {/* Right device (smaller, blurred, behind) */}
              <div
                style={{
                  width: 220,
                  height: 400,
                  borderRadius: 24,
                  background: hexAlpha(brand.colors.text, 0.05),
                  border: `1px solid ${hexAlpha(brand.colors.text, 0.1)}`,
                  backdropFilter: 'blur(10px)',
                  transform: 'translateX(-30px) scale(0.9)',
                  opacity: 0.6,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 16,
                  gap: 12,
                }}
              >
                <div style={{ height: 32, borderRadius: 8, background: hexAlpha(brand.colors.text, 0.08) }} />
                <div style={{ height: 120, borderRadius: 12, background: hexAlpha(accent, 0.1) }} />
                <div style={{ flex: 1, borderRadius: 12, background: hexAlpha(brand.colors.text, 0.05) }} />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Brand logo footer */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          left: 50,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <img
          src="/images/fox-logo.svg"
          alt={brand.name}
          style={{
            height: 24,
            width: 'auto',
            objectFit: 'contain',
          }}
        />
        <span
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: brand.colors.text,
          }}
        >
          {brand.name}
        </span>
      </div>
    </div>
  )
}
