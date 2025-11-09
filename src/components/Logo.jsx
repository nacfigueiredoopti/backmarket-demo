const Logo = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 200 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Back */}
      <text
        x="5"
        y="28"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="#0e1016"
      >
        Back
      </text>

      {/* Market */}
      <text
        x="65"
        y="28"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="#0e1016"
      >
        Market
      </text>

      {/* Dot accent */}
      <circle cx="165" cy="22" r="4" fill="#ff7b00" />
    </svg>
  );
};

export default Logo;
