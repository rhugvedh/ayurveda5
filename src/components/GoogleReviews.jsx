import { useRef, useState } from 'react';
import { reviews, googleSummary } from 'data/reviews';
import { GOOGLE_REVIEWS_URL } from 'data/contact';

const GoogleG = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.6 5.9c4.4-4.1 7-10.1 7-17.6z" />
    <path fill="#FBBC05" d="M10.5 28.7A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.9-4.7l-7.9-6.1A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.9-6.1z" />
    <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.9 2.3-8.3 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
  </svg>
);

const Stars = ({ rating = 5, size = 18 }) => (
  <span className="gr-stars" role="img" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((n) => (
      <svg key={n} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={n <= Math.round(rating) ? 'on' : 'off'}>
        <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6L12 2z" />
      </svg>
    ))}
  </span>
);

const ReviewCard = ({ name, rating, text, when }) => {
  const [open, setOpen] = useState(false);
  const long = text.length > 220;
  return (
    <article className="gr-card">
      <div className="gr-card-top">
        <span className="gr-avatar" aria-hidden="true">{name.trim().charAt(0).toUpperCase()}</span>
        <div className="gr-who">
          <strong className="merriweather">{name}</strong>
          {when && <span className="lato">{when}</span>}
        </div>
        <GoogleG size={22} />
      </div>
      <Stars rating={rating} />
      <p className={`gr-text lato${long && !open ? ' is-clamped' : ''}`}>{text}</p>
      {long && (
        <button type="button" className="gr-more lato" onClick={() => setOpen(!open)}>
          {open ? 'Show less' : 'Read more'}
        </button>
      )}
    </article>
  );
};

/**
 * Google reviews carousel for the home page. Reviews come from data/reviews.js.
 * With no reviews added yet it shows a single card linking to the Google listing.
 */
const GoogleReviews = () => {
  const trackRef = useRef(null);
  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.gr-card');
    const step = card ? card.offsetWidth + 20 : 340;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div className="gr">
      <div className="text-center section-heading mb-8" style={{ maxWidth: 680, margin: '0 auto' }} data-cue="fadeIn">
        <div className="eyebrow-badge">Patient Reviews</div>
        <h2 className="merriweather text-second">What Our Patients Say on Google</h2>
        <p className="lato fs-17" style={{ color: '#4F6157' }}>
          Genuine words from patients who have trusted AyurMantra with their care.
        </p>
        {googleSummary && (
          <div className="gr-summary">
            <GoogleG size={26} />
            <strong className="merriweather">{googleSummary.rating}</strong>
            <Stars rating={googleSummary.rating} />
            <span className="lato">{googleSummary.count} Google reviews</span>
          </div>
        )}
      </div>

      {reviews.length > 0 ? (
        <div className="gr-carousel">
          <button type="button" className="gr-nav gr-prev" aria-label="Previous reviews" onClick={() => scrollBy(-1)}>‹</button>
          <div className="gr-track" ref={trackRef} tabIndex={0} aria-label="Google reviews">
            {reviews.map((r) => (
              <ReviewCard key={`${r.name}-${r.text.slice(0, 12)}`} {...r} />
            ))}
          </div>
          <button type="button" className="gr-nav gr-next" aria-label="Next reviews" onClick={() => scrollBy(1)}>›</button>
        </div>
      ) : (
        <div className="gr-empty">
          <GoogleG size={44} />
          <h3 className="merriweather">Read real patient reviews</h3>
          <p className="lato">See what patients are saying about AyurMantra Clinic &amp; Panchakarma Centre on Google.</p>
        </div>
      )}

      <div className="text-center mt-8">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noreferrer"
          className="btn btn-lg rounded merriweather bg-color text-white border-0"
        >
          <span className="btn-arrow">
            View All Reviews on Google <span className="arrow">↗</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default GoogleReviews;
