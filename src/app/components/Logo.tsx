import { C } from '../theme';

interface LogoProps {
  size?: number;
  light?: boolean;
  subtitle?: string;
}

export default function Logo({ size = 72, light = false, subtitle }: LogoProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <img
        src="/logo.png"
        alt="App logo"
        style={{
          width: size,
          height: size,
          objectFit: 'contain',
          borderRadius: size * 0.2,
          backgroundColor: light ? 'rgba(255,255,255,0.16)' : 'transparent',
          padding: 10,
        }}
      />
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: size / 2.5, fontWeight: 700, lineHeight: 1, color: light ? 'white' : C.primary }}>
          Work
          <span style={{ color: light ? 'rgba(255,255,255,0.88)' : C.accent }}>Setu</span>
        </div>
        {subtitle ? (
          <p style={{ marginTop: 0, fontSize: 12, color: light ? 'rgba(255,255,255,0.82)' : C.textGrey }}>
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
