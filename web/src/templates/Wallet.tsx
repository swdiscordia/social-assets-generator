import { TemplateProps, DIMENSIONS, FONT_FAMILY, hexAlpha } from './shared'

export function WalletSelfCustody({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Your Keys. Your Crypto.'
  const subtitle = variables.subtitle || 'True self-custody. No middlemen. Full control.'
  const cta = variables.cta || 'Learn more →'
  const { width, height } = DIMENSIONS['16:9']

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: 100, top: '50%', transform: 'translateY(-50%)', zIndex: 0 }}>
        <div style={{ width: 140, height: 180, borderRadius: 20, border: `2px solid ${hexAlpha(brand.colors.primary, 0.15)}`, position: 'relative' }}>
          <div style={{ position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)', width: 50, height: 50, borderRadius: '50%', border: `2px solid ${hexAlpha(brand.colors.primary, 0.15)}` }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 8, height: 8, borderRadius: '50%', background: hexAlpha(brand.colors.accent || brand.colors.primary, 0.4) }} />
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1, maxWidth: 600 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>

        <div>
          <div style={{ fontSize: 48, fontWeight: 700, color: brand.colors.text, lineHeight: 1.1, marginBottom: 16 }}>{headline}</div>
          <div style={{ fontSize: 20, color: hexAlpha(brand.colors.text, 0.6), marginBottom: 28, lineHeight: 1.5 }}>{subtitle}</div>
          <div style={{ display: 'inline-flex', padding: '14px 28px', borderRadius: 10, background: brand.colors.primary, color: '#FFFFFF', fontSize: 16, fontWeight: 600 }}>{cta}</div>
        </div>

        <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.3) }}>{brand.website?.replace('https://', '') || ''}</div>
      </div>
    </div>
  )
}

export function WalletMultiWallet({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Connect Any Wallet'
  const wallets = (variables.wallets || 'MetaMask, Coinbase Wallet, WalletConnect, Ledger, Trezor').split(',').map(w => w.trim())
  const subtitle = variables.subtitle || '50+ wallets supported'
  const { width, height } = DIMENSIONS['16:9']

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 0%, ${hexAlpha(brand.colors.primary, 0.04)} 100%)` }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
        </div>
        <div style={{ fontSize: 14, color: hexAlpha(brand.colors.text, 0.4) }}>{subtitle}</div>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 44, fontWeight: 700, color: brand.colors.text, marginBottom: 28, textAlign: 'center' }}>{headline}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' as const }}>
          {wallets.map((w, i) => (
            <div key={i} style={{ padding: '12px 24px', borderRadius: 12, background: hexAlpha(brand.colors.text, 0.04), border: `1px solid ${hexAlpha(brand.colors.text, 0.08)}`, fontSize: 16, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.8) }}>{w}</div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: 13, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.website?.replace('https://', '') || ''}</div>
    </div>
  )
}

export function WalletConnectPromo({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Connect & Go'
  const subtitle = variables.subtitle || 'One click to access the entire DeFi ecosystem'
  const cta = variables.cta || 'Connect wallet'
  const { width, height } = DIMENSIONS['1:1']

  const lines = Array.from({ length: 8 }, (_, i) => i * 45)

  return (
    <div style={{ width, height, background: brand.colors.background, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      {lines.map((angle, i) => (
        <div key={i} style={{ position: 'absolute', top: '50%', left: '50%', width: 300, height: 1, background: `linear-gradient(90deg, transparent, ${hexAlpha(brand.colors.primary, 0.08)}, transparent)`, transform: `translate(-50%, -50%) rotate(${angle}deg)` }} />
      ))}

      <div style={{ position: 'absolute', top: 48, left: 48, display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 52, fontWeight: 700, color: brand.colors.text, marginBottom: 12 }}>{headline}</div>
        <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.5), marginBottom: 32, maxWidth: 400 }}>{subtitle}</div>
        <div style={{ display: 'inline-flex', padding: '16px 40px', borderRadius: 16, background: brand.colors.primary, color: '#FFFFFF', fontSize: 18, fontWeight: 600, boxShadow: `0 8px 32px ${hexAlpha(brand.colors.primary, 0.3)}` }}>{cta}</div>
      </div>

      <div style={{ position: 'absolute', bottom: 48, fontSize: 13, color: hexAlpha(brand.colors.text, 0.3) }}>{brand.twitter || ''}</div>
    </div>
  )
}

export function WalletSecurity({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Battle-Tested Security'
  const subtitle = variables.subtitle || 'Open source. Audited. Community verified.'
  const stats = (variables.stats || '3 Audits, 100% Open Source, $0 Hacked').split(',').map(s => s.trim())
  const { width, height } = DIMENSIONS['16:9']

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${hexAlpha(brand.colors.text, 0.02)} 1px, transparent 1px), linear-gradient(90deg, ${hexAlpha(brand.colors.text, 0.02)} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 44, fontWeight: 700, color: brand.colors.text, lineHeight: 1.1, marginBottom: 12, textAlign: 'center' }}>{headline}</div>
        <div style={{ fontSize: 18, color: hexAlpha(brand.colors.text, 0.5), textAlign: 'center', marginBottom: 32 }}>{subtitle}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ padding: '16px 28px', borderRadius: 12, background: hexAlpha(brand.colors.text, 0.04), border: `1px solid ${hexAlpha(brand.colors.text, 0.08)}`, textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{s}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: 13, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.website?.replace('https://', '') || ''}</div>
    </div>
  )
}

export function WalletHardware({ brand, variables }: TemplateProps) {
  const headline = variables.headline || 'Hardware Wallet Support'
  const subtitle = variables.subtitle || 'Connect your Ledger or Trezor for maximum security'
  const devices = (variables.devices || 'Ledger Nano S, Ledger Nano X, Trezor One, Trezor Model T').split(',').map(d => d.trim())
  const { width, height } = DIMENSIONS['16:9']
  const accent = brand.colors.accent || brand.colors.primary

  return (
    <div style={{ width, height, background: brand.colors.background, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: FONT_FAMILY, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -100, top: -100, width: 400, height: 400, borderRadius: '50%', border: `1px solid ${hexAlpha(brand.colors.primary, 0.06)}` }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative', zIndex: 1 }}>
        <img src={"/images/fox-logo.svg"} alt={brand.name} style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
        <span style={{ fontSize: 16, fontWeight: 600, color: brand.colors.text }}>{brand.name}</span>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase' as const, color: accent, marginBottom: 12 }}>COMPATIBLE DEVICES</div>
        <div style={{ fontSize: 40, fontWeight: 700, color: brand.colors.text, lineHeight: 1.1, marginBottom: 24 }}>{headline}</div>
        <div style={{ fontSize: 17, color: hexAlpha(brand.colors.text, 0.5), marginBottom: 24 }}>{subtitle}</div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
          {devices.map((d, i) => (
            <div key={i} style={{ padding: '8px 18px', borderRadius: 8, border: `1px solid ${hexAlpha(brand.colors.text, 0.1)}`, fontSize: 14, fontWeight: 500, color: hexAlpha(brand.colors.text, 0.7), fontFamily: "'SF Mono', 'Fira Code', monospace" }}>{d}</div>
          ))}
        </div>
      </div>

      <div style={{ fontSize: 13, color: hexAlpha(brand.colors.text, 0.3), position: 'relative', zIndex: 1 }}>{brand.website?.replace('https://', '') || ''}</div>
    </div>
  )
}
