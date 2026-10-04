import Image from 'next/image';

/**
 * AyurMantra Clinic & Panchakarma Centre logo (circular emblem).
 * The emblem already contains the clinic name, so no extra wordmark is rendered.
 *
 * @param {boolean} [onDark=false] - Adds a soft light ring so the emblem stands out on dark backgrounds (footer, offcanvas).
 * @param {boolean} [compact=false] - Smaller size (mobile offcanvas header).
 * @param {boolean} [showName=false] - Renders the clinic name beside the emblem (navbar).
 * @param {boolean} [showExperience=false] - Renders the "17+ Years Experience" badge under the name (requires showName).
 */
const BrandLogo = ({ onDark = false, compact = false, showName = false, showExperience = false }) => (
  <span className={`brand-logo${onDark ? ' on-dark' : ''}${compact ? ' is-compact' : ''}${showName ? ' has-name' : ''}`}>
    <Image
      className="brand-mark"
      src="/img/logo.webp"
      alt="AyurMantra Clinic & Panchakarma Centre logo"
      width={600}
      height={600}
      priority
    />
    {showName && (
      <span className="brand-text">
        <span className="brand-name">AyurMantra</span>
        <span className="brand-tagline">Ayurvedic Clinic &amp; Panchkarma Centre</span>
        {showExperience && <span className="brand-exp">17+ Years Experience</span>}
      </span>
    )}
  </span>
);

export default BrandLogo;
