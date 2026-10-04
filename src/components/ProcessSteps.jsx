const steps = [
  {
    title: 'Consultation',
    desc: 'We understand your health history, symptoms and lifestyle in detail.',
  },
  {
    title: 'Prakriti Assessment',
    desc: 'Dr. Rohini Jedhe evaluates your dosha balance and identifies the root imbalance.',
  },
  {
    title: 'Personalized Plan',
    desc: 'A Panchakarma or therapy plan is designed specifically around your body and condition.',
  },
  {
    title: 'Therapy Sessions',
    desc: 'Guided Panchakarma, Basti, Shirodhara or Nasya sessions in a clean, caring environment.',
  },
  {
    title: 'Follow-up & Diet',
    desc: 'Ongoing lifestyle and diet guidance so your recovery lasts well beyond the clinic.',
  },
];

/**
 * Patient journey / process timeline with a dashed connector on desktop.
 */
const ProcessSteps = () => (
  <div className="row process-track g-8 g-lg-4" data-cues="true" data-interval="150">
    {steps.map(({ title, desc }, i) => (
      <div className="col-6 col-lg" key={title} data-cue="zoomIn">
        <div className="process-step">
          <div className="process-circle">{String(i + 1).padStart(2, '0')}</div>
          <h3 className="fs-17 merriweather text-second mb-2">{title}</h3>
          <p className="lato fs-14 mb-0" style={{ color: '#4F6157' }}>
            {desc}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default ProcessSteps;
