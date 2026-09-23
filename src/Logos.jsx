// Animated brand marks ported from each project's own app:
//  - Genesis Prep AI: the GenesisOrb (three tilted gyroscopic rings around a glass sphere)
//  - VisionAssist AI: Logo.tsx (spinning conic border, glow pulse, scan-line sweep)
//  - Harvey: the desktop hologram (gold reticle rings around a pulsing core, hologram.py)
// All motion is plain CSS keyframes (see styles.css, "3D logos"), disabled for reduced motion.

const GENESIS_RINGS = [
  { size: 240, tilt: 72, dir: "cw", spin: 18, wobble: 6, w: ["15deg", "25deg"], border: "rgba(6,182,212,0.4)", dot: "#22d3ee", glow: "rgba(34,211,238,0.85)", d: 14 },
  { size: 200, tilt: 65, dir: "ccw", spin: 14, wobble: 5, w: ["-45deg", "-30deg"], border: "rgba(59,130,246,0.35)", dot: "#60a5fa", glow: "rgba(96,165,250,0.85)", d: 11 },
  { size: 170, tilt: 75, dir: "cw", spin: 10, wobble: 4, w: ["60deg", "80deg"], border: "rgba(168,85,247,0.35)", dot: "#c084fc", glow: "rgba(168,85,247,0.85)", d: 11 },
];

function GenesisOrb() {
  return (
    <div className="orb float" style={{ "--float": "-10px", animationDuration: "5s" }}>
      <div className="orb-glow" />
      {GENESIS_RINGS.map((r, i) => (
        <div key={i} className="orb-ring" style={{ width: r.size, height: r.size, transform: `rotateX(${r.tilt}deg)` }}>
          <div className={`spin-${r.dir}`} style={{ animationDuration: `${r.spin}s` }}>
            <div
              className="orb-ring-line wobble"
              style={{ border: `1.5px solid ${r.border}`, "--wa": r.w[0], "--wb": r.w[1], animationDuration: `${r.wobble}s` }}
            >
              <span
                className="orb-dot"
                style={{ width: r.d, height: r.d, top: -r.d / 2, background: r.dot, boxShadow: `0 0 30px ${r.glow}` }}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="orb-core pulse">
        <span className="orb-core-inner" />
        <span className="orb-core-ring spin-cw" style={{ animationDuration: "12s" }} />
        <span className="orb-core-light" />
        <span className="orb-core-spec" />
      </div>
    </div>
  );
}

function VisionLogo() {
  return (
    <div className="va float" style={{ "--float": "-8px", animationDuration: "4s" }}>
      <div className="va-orbit spin-ccw" style={{ animationDuration: "26s" }} />
      <div className="va-arc spin-cw" style={{ animationDuration: "3.5s" }} />
      <div className="va-tile">
        <span className="va-glow" />
        <span className="va-scan" />
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>
    </div>
  );
}

function HarveyHologram() {
  return (
    <div className="hv float" style={{ "--float": "-6px", animationDuration: "6s" }}>
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <radialGradient id="hv-core">
            <stop offset="0" stopColor="#fff7d6" />
            <stop offset="0.35" stopColor="#facc15" stopOpacity="0.9" />
            <stop offset="1" stopColor="#facc15" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hv-lit" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fde68a" />
            <stop offset="0.5" stopColor="#d4a017" />
            <stop offset="1" stopColor="#7a5a0a" />
          </linearGradient>
        </defs>

        <circle cx="100" cy="100" r="94" fill="none" stroke="#d4a017" strokeOpacity="0.35" />
        <g className="svg-spin spin-cw" style={{ animationDuration: "60s" }}>
          <circle cx="100" cy="100" r="89" fill="none" stroke="#e5b93a" strokeOpacity="0.55" strokeWidth="4" strokeDasharray="1 8.3" />
        </g>
        <g className="svg-spin spin-ccw" style={{ animationDuration: "24s" }}>
          <circle cx="100" cy="100" r="76" fill="none" stroke="url(#hv-lit)" strokeWidth="5" strokeLinecap="round" strokeDasharray="70 18 34 22 90 16 40 188" />
        </g>
        <g className="svg-spin spin-cw" style={{ animationDuration: "16s" }}>
          <circle cx="100" cy="100" r="61" fill="none" stroke="#d4a017" strokeOpacity="0.7" strokeWidth="2" strokeDasharray="3 7" />
        </g>
        <g className="svg-spin spin-ccw" style={{ animationDuration: "10s" }}>
          <circle cx="100" cy="100" r="47" fill="none" stroke="#facc15" strokeOpacity="0.8" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="60 40 30 165" />
        </g>
        <circle cx="100" cy="100" r="33" fill="none" stroke="#fde68a" strokeOpacity="0.35" />
        <g className="hv-helix" stroke="#fde68a" strokeOpacity="0.45" fill="none" strokeWidth="1.2">
          <path d="M92 70c16 10 16 20 0 30s-16 20 0 30" />
          <path d="M108 70c-16 10-16 20 0 30s16 20 0 30" />
        </g>
        <circle className="svg-pulse" cx="100" cy="100" r="24" fill="url(#hv-core)" />
        <circle cx="100" cy="100" r="6" fill="#fffbe8" />
      </svg>
    </div>
  );
}

const LOGOS = { genesis: GenesisOrb, vision: VisionLogo, harvey: HarveyHologram };

export default function ProjectLogo({ name }) {
  const Logo = LOGOS[name];
  return Logo ? <Logo /> : null;
}
