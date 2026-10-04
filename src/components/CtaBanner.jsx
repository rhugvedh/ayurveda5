import NextLink from 'components/NextLink';

/**
 * Reusable full-width call-to-action banner.
 *
 * @param {string} eyebrow - Small uppercase label above the heading.
 * @param {string} heading - Main heading text.
 * @param {string} subtext - Supporting paragraph.
 * @param {string} buttonText - CTA button label.
 * @param {string} [href='#contact'] - CTA link destination.
 */
const CtaBanner = ({ eyebrow, heading, subtext, buttonText, href = '#contact' }) => (
  <div className="cta-banner text-center text-md-start" data-cue="fadeIn">
    <div className="row align-items-center cta-content gy-5">
      <div className="col-md-8">
        {eyebrow && (
          <div className="eyebrow-badge on-dark">{eyebrow}</div>
        )}
        <h2 className="merriweather text-white mb-3">{heading}</h2>
        {subtext && <p className="lato fs-17 mb-0 text-white opacity-75">{subtext}</p>}
      </div>
      <div className="col-md-4 text-md-end">
        <NextLink
          title={
            <span className="btn-arrow">
              {buttonText} <span className="arrow">→</span>
            </span>
          }
          href={href}
          className="btn btn-lg rounded merriweather"
          style={{ background: '#BFD8C6', color: '#1F4D3A', border: 'none' }}
        />
      </div>
    </div>
  </div>
);

export default CtaBanner;
