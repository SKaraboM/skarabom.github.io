// Simple wavy SVG divider using palette colors
const SectionDivider = ({ color = "#fca311", flip = false }) => (
  <div aria-hidden="true" style={{ lineHeight: 0 }}>
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", width: "100%", height: "60px", transform: flip ? "rotate(180deg)" : "none" }}
    >
      <path
        d="M0,40 C480,120 960,0 1440,80 L1440,120 L0,120 Z"
        fill={color}
        opacity="0.15"
      />
    </svg>
  </div>
)

export default SectionDivider;
