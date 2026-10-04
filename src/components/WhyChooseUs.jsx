const features = [
  {
    icon: 'uil-user-md',
    title: 'Expert BAMS Doctor',
    desc: 'Led by Dr. Rohini Jedhe (BAMS, PGDEMS), with ICU and hospital experience.',
  },
  {
    icon: 'uil-medkit',
    title: 'Classical Panchakarma',
    desc: 'Authentic Panchakarma protocols — Basti, Vaman, Virechan, Nasya and Raktamokshan — done the traditional way.',
  },
  {
    icon: 'uil-flower',
    title: 'Personalized Treatment',
    desc: 'Every treatment plan is built around your Prakriti and dosha imbalance, not a one-size-fits-all routine.',
  },
  {
    icon: 'uil-shield-check',
    title: 'Hygienic, Safe Facility',
    desc: 'Clean therapy rooms, sterilized equipment and safety-first protocols for every Panchakarma session.',
  },
  {
    icon: 'uil-clock',
    title: 'Flexible Timings',
    desc: 'Morning and evening slots (10 AM–1 PM, 5 PM–8 PM) designed to fit around your daily schedule.',
  },
  {
    icon: 'uil-heart-alt',
    title: 'Holistic, Ongoing Care',
    desc: 'Diet, lifestyle and follow-up guidance included, so results last well beyond the treatment table.',
  },
];

/**
 * "Why choose us" numbered feature grid with hover-lift cards.
 */
const WhyChooseUs = () => (
  <div className="row g-6" data-cues="true" data-interval="150">
    {features.map(({ icon, title, desc }, i) => (
      <div className="col-md-6 col-lg-4" key={title} data-cue="fadeIn">
        <div className="feature-card">
          <span className="feature-num">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="feature-icon">
            <i className={`uil ${icon}`} aria-hidden="true" />
          </div>
          <h3 className="fs-19 merriweather text-second mb-2">{title}</h3>
          <p className="lato fs-15 mb-0" style={{ color: '#4F6157' }}>
            {desc}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default WhyChooseUs;
