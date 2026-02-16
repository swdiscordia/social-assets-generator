import { TemplateProps, DIMENSIONS, FONT_FAMILY, hexAlpha } from './shared'

/**
 * Product Announcement Template
 * Clean, bold feature announcement inspired by Base's style
 * Perfect for "New Feature", "Now Live", "Introducing" posts
 */
export function ProductAnnouncement({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Introducing Something New'
  const subheadline = variables.subheadline || 'The future is here.'
  const cta = variables.cta || 'Try it now'
  const badge = variables.badge || 'NEW'
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div
      style={{
        width,
        height,
        background: brand.colors.background,
        display: 'flex',
        fontFamily: FONT_FAMILY,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gradient orb top-right */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '60%',
          height: '80%',
          background: `radial-gradient(ellipse at center, ${hexAlpha(accent, 0.15)} 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />

      {/* Secondary orb bottom-left */}
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-20%',
          width: '70%',
          height: '90%',
          background: `radial-gradient(ellipse at center, ${hexAlpha(brand.colors.primary, 0.1)} 0%, transparent 70%)`,
          filter: 'blur(80px)',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${hexAlpha(brand.colors.text, 0.02)} 1px, transparent 1px), linear-gradient(90deg, ${hexAlpha(brand.colors.text, 0.02)} 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          opacity: 0.5,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
        }}
      >
        {/* Header - Logo + Badge */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: `linear-gradient(135deg, ${brand.colors.primary}20 0%, ${accent}15 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${hexAlpha(brand.colors.primary, 0.2)}`,
              }}
            >
              <img
                src={"/images/fox-logo.svg"}
                alt={brand.name}
                style={{
                  height: 28,
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: brand.colors.text,
                letterSpacing: '-0.02em',
              }}
            >
              {brand.name}
            </span>
          </div>

          {badge && (
            <div
              style={{
                padding: '8px 16px',
                borderRadius: 20,
                background: accent,
                color: '#FFFFFF',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                boxShadow: `0 4px 20px ${hexAlpha(accent, 0.4)}`,
              }}
            >
              {badge}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: 700 }}>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: brand.colors.text,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              margin: 0,
              marginBottom: 24,
            }}
          >
            {headline}
          </h1>
          
          <p
            style={{
              fontSize: 24,
              color: hexAlpha(brand.colors.text, 0.65),
              lineHeight: 1.5,
              margin: 0,
              marginBottom: 40,
              fontWeight: 400,
              maxWidth: 550,
            }}
          >
            {subheadline}
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '18px 36px',
              borderRadius: 14,
              background: brand.colors.primary,
              color: '#FFFFFF',
              fontSize: 17,
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: `0 8px 32px ${hexAlpha(brand.colors.primary, 0.35)}`,
              transition: 'transform 0.2s',
            }}
          >
            {cta}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            fontSize: 14,
            color: hexAlpha(brand.colors.text, 0.4),
            fontWeight: 500,
          }}
        >
          <span>{brand.website?.replace('https://', '')}</span>
          <span style={{ color: hexAlpha(brand.colors.text, 0.2) }}>•</span>
          <span>{brand.twitter}</span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        style={{
          position: 'absolute',
          bottom: 64,
          right: 64,
          width: 200,
          height: 200,
          borderRadius: '50%',
          border: `2px solid ${hexAlpha(accent, 0.1)}`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 104,
          right: 104,
          width: 120,
          height: 120,
          borderRadius: '50%',
          border: `2px solid ${hexAlpha(brand.colors.primary, 0.08)}`,
        }}
      />
    </div>
  )
}

/**
 * Milestone/Stats Template
 * Big bold numbers with clean typography
 * Perfect for "100K Users", "$1B Volume", "New Record" posts
 */
export function MilestoneStats({ brand, variables }: TemplateProps) {
  const metric = variables.metric || '100K'
  const label = variables.label || 'Active Users'
  const subtext = variables.subtext || 'and counting'
  const { width, height } = DIMENSIONS['1:1']
  const accent = brand.colors.accent || brand.colors.primary
  const isPositive = metric.startsWith('+') || !metric.startsWith('-')

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
        padding: 80,
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${hexAlpha(isPositive ? accent : '#EF4444', 0.12)} 0%, transparent 60%)`,
        }}
      />

      {/* Concentric circles */}
      {[300, 380, 460].map((size, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: size,
            height: size,
            borderRadius: '50%',
            border: `1px solid ${hexAlpha(brand.colors.text, 0.03 + i * 0.01)}`,
          }}
        />
      ))}

      {/* Floating orbs */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '15%',
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: accent,
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '25%',
          right: '20%',
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: brand.colors.primary,
          opacity: 0.4,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '30%',
          left: '20%',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: accent,
          opacity: 0.5,
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
        }}
      >
        {/* Logo */}
        <div
          style={{
            marginBottom: 48,
            padding: 12,
            borderRadius: 16,
            background: hexAlpha(brand.colors.primary, 0.08),
            border: `1px solid ${hexAlpha(brand.colors.primary, 0.15)}`,
          }}
        >
          <img
            src={"/images/fox-logo.svg"}
            alt={brand.name}
            style={{
              height: 36,
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Label */}
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: hexAlpha(brand.colors.text, 0.5),
            marginBottom: 16,
          }}
        >
          {label}
        </div>

        {/* Metric */}
        <div
          style={{
            fontSize: 140,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            background: `linear-gradient(135deg, ${brand.colors.text} 0%, ${accent} 100%)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 16,
          }}
        >
          {metric}
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: 22,
            color: hexAlpha(brand.colors.text, 0.5),
            fontWeight: 500,
          }}
        >
          {subtext}
        </div>
      </div>

      {/* Brand footer */}
      <div
        style={{
          position: 'absolute',
          bottom: 48,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          fontSize: 15,
          fontWeight: 600,
          color: hexAlpha(brand.colors.text, 0.4),
        }}
      >
        <span>{brand.name}</span>
        <span style={{ color: hexAlpha(brand.colors.text, 0.2) }}>•</span>
        <span>{brand.twitter}</span>
      </div>
    </div>
  )
}

/**
 * Community Quote Template
 * Human, optimistic messaging with elegant typography
 * Perfect for community love, founder quotes, testimonials
 */
export function CommunityQuote({ brand, variables }: TemplateProps) {
  const quote = variables.quote || "We're bringing the world onchain, and you're invited."
  const author = variables.author || ''
  const role = variables.role || ''
  const { width, height } = DIMENSIONS['1:1']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div
      style={{
        width,
        height,
        background: brand.colors.background,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: FONT_FAMILY,
        position: 'relative',
        overflow: 'hidden',
        padding: 80,
      }}
    >
      {/* Large quote mark background */}
      <div
        style={{
          position: 'absolute',
          top: 40,
          left: 40,
          fontSize: 400,
          fontFamily: "'Georgia', 'Times New Roman', serif",
          color: hexAlpha(accent, 0.03),
          lineHeight: 1,
          fontWeight: 300,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        "
      </div>

      {/* Gradient orb */}
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          right: '-20%',
          width: '80%',
          height: '100%',
          background: `radial-gradient(ellipse at center, ${hexAlpha(accent, 0.1)} 0%, transparent 70%)`,
          filter: 'blur(60px)',
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
          justifyContent: 'center',
        }}
      >
        {/* Logo header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 60,
          }}
        >
          <img
            src={"/images/fox-logo.svg"}
            alt={brand.name}
            style={{
              height: 32,
              width: 'auto',
              objectFit: 'contain',
              opacity: 0.8,
            }}
          />
          <span
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: hexAlpha(brand.colors.text, 0.5),
            }}
          >
            {brand.name}
          </span>
        </div>

        {/* Quote */}
        <blockquote
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          <p
            style={{
              fontSize: 42,
              fontWeight: 600,
              color: brand.colors.text,
              lineHeight: 1.3,
              letterSpacing: '-0.02em',
              margin: 0,
              marginBottom: author ? 40 : 0,
            }}
          >
            "{quote}"
          </p>

          {author && (
            <footer
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 3,
                  background: accent,
                  borderRadius: 2,
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: brand.colors.text,
                    marginBottom: 4,
                  }}
                >
                  {author}
                </div>
                {role && (
                  <div
                    style={{
                      fontSize: 15,
                      color: hexAlpha(brand.colors.text, 0.5),
                      fontWeight: 500,
                    }}
                  >
                    {role}
                  </div>
                )}
              </div>
            </footer>
          )}
        </blockquote>
      </div>

      {/* Footer with tagline */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 40,
          borderTop: `1px solid ${hexAlpha(brand.colors.text, 0.08)}`,
        }}
      >
        <div
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: accent,
            letterSpacing: '0.02em',
          }}
        >
          {brand.tagline || `${brand.name} is for everyone.`}
        </div>
        <div
          style={{
            fontSize: 14,
            color: hexAlpha(brand.colors.text, 0.35),
            fontWeight: 500,
          }}
        >
          {brand.twitter}
        </div>
      </div>
    </div>
  )
}
