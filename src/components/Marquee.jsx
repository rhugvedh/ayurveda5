/**
 * Infinite scrolling ticker bar — mirrors the "welcome to..." marquee
 * pattern used on the reference site, adapted to clinic messaging.
 */
const items = [
  'WELCOME TO AYURMANTRA CLINIC & PANCHAKARMA CENTER',
  'AUTHENTIC PANCHAKARMA THERAPY',
  'BASTI · VAMAN · VIRECHAN · NASYA · SHIRODHARA',
  'GUIDED BY DR. ROHINI JEDHE, BAMS PGDEMS',
  "LET'S BEGIN YOUR HEALING JOURNEY TOGETHER",
];

const Marquee = () => {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
