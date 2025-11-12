const Logo = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 140 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main square */}
      <rect x="5" y="8" width="24" height="24" rx="4" fill="#0e1016" />

      {/* Inner accent */}
      <rect x="10" y="13" width="6" height="14" rx="1" fill="#ff7b00" />
      <rect x="18" y="13" width="6" height="14" rx="1" fill="#ffffff" />

      {/* Text */}
      <text
        x="40"
        y="28"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fontWeight="600"
        fill="#0e1016"
        letterSpacing="1"
      >
        DEMO STORE
      </text>
    </svg>
  );
};

export default Logo;
