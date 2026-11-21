interface LunariaLogoProps {
  className?: string;
  size?: number | string;
}

export const LunariaLogo = ({ className = "w-10 h-10", size }: LunariaLogoProps) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        {/* Deep Navy Gradient (Top-Left) */}
        <linearGradient id="navNavyGrad" x1="20%" y1="20%" x2="70%" y2="70%">
          <stop offset="0%" stopColor="#043c82" />
          <stop offset="50%" stopColor="#02316B" />
          <stop offset="100%" stopColor="#01224d" />
        </linearGradient>

        {/* Deep Teal Gradient (Bottom-Right) */}
        <linearGradient id="navTealGrad" x1="30%" y1="30%" x2="80%" y2="80%">
          <stop offset="0%" stopColor="#007a97" />
          <stop offset="50%" stopColor="#005C72" />
          <stop offset="100%" stopColor="#004354" />
        </linearGradient>

        {/* Silver Swoosh Gradient */}
        <linearGradient id="navSwooshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>

        {/* Master Cross Clip Path with clean rounded corners */}
        <clipPath id="navCrossClip">
          <path d="
            M 44 10
            C 39 10, 36 13, 36 20
            L 36 36
            L 20 36
            C 13 36, 10 39, 10 46
            L 10 54
            C 10 61, 13 64, 20 64
            L 36 64
            L 36 80
            C 36 87, 39 90, 46 90
            L 54 90
            C 61 90, 64 87, 64 80
            L 64 64
            L 80 64
            C 87 64, 90 61, 90 54
            L 90 46
            C 90 39, 87 36, 80 36
            L 64 36
            L 64 20
            C 64 13, 61 10, 54 10
            Z
          " />
        </clipPath>
      </defs>

      <g className="filter drop-shadow-[0_2px_4px_rgba(1,27,61,0.2)]">
        <g clipPath="url(#navCrossClip)">
          {/* 1. Top-Left Navy Section */}
          <path
            d="M 0 0 L 100 0 L 64 10 C 64 20, 56 40, 48 50 C 40 60, 36 80, 36 90 L 0 100 Z"
            fill="url(#navNavyGrad)"
          />

          {/* 2. Bottom-Right Teal Section */}
          <path
            d="M 100 100 L 0 100 L 36 90 C 36 80, 40 60, 48 50 C 56 40, 64 20, 64 10 L 100 0 Z"
            fill="url(#navTealGrad)"
          />

          {/* 3. Dynamic Curved Swoosh Separator (Silver/White highlight line) */}
          <path
            d="M 64 10 C 64 20, 56 40, 48 50 C 40 60, 36 80, 36 90"
            stroke="url(#navSwooshGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* 4. Soft Inner Bevel / Highlight on Top Left */}
          <path
            d="M 37 20 C 37 15, 40 12, 45 12 L 53 12"
            stroke="#ffffff"
            strokeOpacity="0.4"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* 5. Soft Inner Shadow on dividing seam */}
          <path
            d="M 62 12 C 62 21, 54 41, 46 51 C 38 61, 34 81, 34 88"
            stroke="#011b3d"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            fill="none"
          />
        </g>
      </g>
    </svg>
  );
};

export default LunariaLogo;
