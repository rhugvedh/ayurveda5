import NextLink from 'components/NextLink';

const therapies = [
  {
    title: 'Panchakarma Therapy',
    desc: 'The complete five-fold detoxification protocol to cleanse and rebalance the body.',
    href: '/panchakarma-therapy-in-wagholi/',
  },
  {
    title: 'Virechan (Purgation Therapy)',
    desc: 'Controlled therapeutic purgation to clear excess Pitta and internal toxins.',
    href: '/virechan-therapy-in-wagholi/',
  },
  {
    title: 'Basti (Enema Therapy)',
    desc: 'Herbal-oil enemas considered the cornerstone treatment for Vata-related disorders.',
    href: '/basti-therapy-in-wagholi/',
  },
  {
    title: 'Vaman (Emesis Therapy)',
    desc: 'Therapeutic emesis to eliminate excess Kapha and relieve respiratory congestion.',
    href: '/vaman-therapy-in-wagholi/',
  },
  {
    title: 'Raktamokshan (Bloodletting)',
    desc: 'Classical blood-purification therapy for chronic skin and inflammatory conditions.',
    href: '/raktamokshana-therapy-in-wagholi/',
  },
  {
    title: 'Shirodhara & Nasya',
    desc: 'Warm oil-stream head therapy and nasal treatments for stress, sleep and sinus relief.',
    href: '#contact',
  },
];

/**
 * Numbered, hoverable list of therapies — mirrors the reference site's
 * "01 / 02 / 03" services listing pattern, linking to real service pages.
 */
const ServicesShowcase = () => (
  <div data-cues="true" data-interval="120">
    {therapies.map(({ title, desc, href }, i) => (
      <NextLink
        key={title}
        href={href}
        className="service-row"
        data-cue="fadeIn"
        title={
          <>
            <div className="d-flex align-items-center gap-4">
              <span className="service-num">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="service-title">{title}</p>
                <p className="service-desc">{desc}</p>
              </div>
            </div>
            <span className="service-arrow" aria-hidden="true">
              →
            </span>
          </>
        }
      />
    ))}
  </div>
);

export default ServicesShowcase;
