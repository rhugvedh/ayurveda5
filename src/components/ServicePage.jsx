import { Fragment } from 'react';
import Head from 'next/head';
import NextLink from 'components/NextLink';
import ContentBlocks from 'components/ContentBlocks';
import FaqAccordion from 'components/FaqAccordion';
import RichText from 'components/RichText';
import { servicePages } from 'data/servicePages';

const relatedLabels = {
  'panchakarma-therapy-in-wagholi': 'Panchakarma Therapy',
  'virechan-therapy-in-wagholi': 'Virechan Therapy',
  'basti-therapy-in-wagholi': 'Basti Therapy',
  'vaman-therapy-in-wagholi': 'Vaman Therapy',
  'raktamokshana-therapy-in-wagholi': 'Raktamokshana Therapy',
  'ayurvedic-therapies-upakarma-wagholi': 'Ayurvedic Therapies & Upakarma',
};

const relatedIcons = {
  'panchakarma-therapy-in-wagholi': 'uil-leaf',
  'virechan-therapy-in-wagholi': 'uil-medical-drip',
  'basti-therapy-in-wagholi': 'uil-tear',
  'vaman-therapy-in-wagholi': 'uil-wind',
  'raktamokshana-therapy-in-wagholi': 'uil-tint',
  'ayurvedic-therapies-upakarma-wagholi': 'uil-spa',
};

/**
 * Shared page template for every Ayurvedic therapy landing page.
 * All visible copy is rendered exactly as supplied in the content brief;
 * this component only supplies layout, headings hierarchy and design.
 */
const ServicePage = ({ slug }) => {
  const page = servicePages.find((p) => p.slug === slug);
  if (!page) return null;

  const { seoTitle, metaDesc, h1, sections } = page;
  const canonical = `https://www.ayurmantraclinic.com/${slug}/`;

  const introParas = sections.filter((n) => n.type === 'para');
  const restSections = sections.filter((n) => n.type === 'section');

  const faqSection = restSections.find((s) => /frequently asked questions/i.test(s.title));
  const disclaimerSection = restSections.find((s) => /medical disclaimer/i.test(s.title));

  const excludedTitles = new Set(
    [faqSection, disclaimerSection].filter(Boolean).map((s) => s.title)
  );

  const disclaimerIndex = restSections.indexOf(disclaimerSection);
  const closingSection =
    disclaimerIndex >= 0 && restSections[disclaimerIndex + 1]
      ? restSections[disclaimerIndex + 1]
      : null;
  if (closingSection) excludedTitles.add(closingSection.title);

  const bodySections = restSections.filter((s) => !excludedTitles.has(s.title));

  const faqItems = faqSection
    ? faqSection.content.filter((n) => n.type === 'section')
    : [];

  // FAQPage structured data (only rendered when FAQs are genuinely present on the page)
  const faqJsonLd =
    faqItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.title.replace(/^\d+\.\s*/, ''),
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.content
                .filter((n) => n.type === 'para')
                .map((n) => n.text.replace(/\*\*/g, ''))
                .join(' '),
            },
          })),
        }
      : null;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ayurmantraclinic.com/' },
      { '@type': 'ListItem', position: 2, name: 'Ayurvedic Services', item: 'https://www.ayurmantraclinic.com/#services' },
      { '@type': 'ListItem', position: 3, name: h1, item: canonical },
    ],
  };

  return (
    <Fragment>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={canonical} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        {faqJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        )}
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* ================= Page Header / Banner ================= */}
        <section className="wrapper bg-dark">
          <div className="container py-8 py-md-10">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb text-white mb-4">
                <li className="breadcrumb-item">
                  <NextLink href="/" title="Home" />
                </li>
                <li className="breadcrumb-item">
                  <span>Ayurvedic Services</span>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <span>{relatedLabels[slug]}</span>
                </li>
              </ol>
            </nav>
            <h1 className="merriweather fs-38 fs-md-46 text-white mb-3" style={{ maxWidth: '900px' }}>
              {h1}
            </h1>
          </div>
        </section>

        {/* ================= Intro ================= */}
        <section className="wrapper">
          <div className="container py-10 py-md-12">
            <div className="row">
              <div className="col-lg-9 mx-auto">
                {introParas.map((n, i) => (
                  <p key={i} className="fs-18 lh-lg lato text-justify mb-4">
                    <RichText text={n.text} />
                  </p>
                ))}

                {/* ================= Main Content Sections ================= */}
                <ContentBlocks nodes={bodySections} />

                {/* ================= FAQ ================= */}
                {faqSection && (
                  <FaqAccordion title={faqSection.title} items={faqItems} idPrefix={slug} />
                )}

                {/* ================= Medical Disclaimer ================= */}
                {disclaimerSection && (
                  <div className="bg-soft-primary rounded p-5 mt-8">
                    <h3 className="fs-18 merriweather mb-3">
                      <i className="uil uil-info-circle me-2" />
                      {disclaimerSection.title}
                    </h3>
                    {disclaimerSection.content
                      .filter((n) => n.type === 'para')
                      .map((n, i) => (
                        <p key={i} className="fs-15 lato text-justify mb-0">
                          <RichText text={n.text} />
                        </p>
                      ))}
                  </div>
                )}

                {/* ================= Closing Section ================= */}
                {closingSection && (
                  <div className="mt-8">
                    <h2 className="fs-26 merriweather text-second mb-3">{closingSection.title}</h2>
                    <ContentBlocks nodes={closingSection.content} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ================= Related Therapies ================= */}
        <section className="wrapper bg-light">
          <div className="container py-10 py-md-12">
            <h2 className="fs-28 merriweather text-second mb-6 text-center">
              Explore Other Ayurvedic Therapies
            </h2>
            <div className="row gy-4 justify-content-center">
              {Object.keys(relatedLabels)
                .filter((s) => s !== slug)
                .map((s) => (
                  <div className="col-6 col-md-4 col-lg-2" key={s}>
                    <NextLink
                      href={`/${s}/`}
                      className="card text-center border-0 shadow-sm p-4 h-100 text-decoration-none"
                      title={
                        <Fragment>
                          <i className={`uil ${relatedIcons[s]} fs-36 text-color mb-2 d-block`} />
                          <span className="fs-15 lato fw-bold text-dark">{relatedLabels[s]}</span>
                        </Fragment>
                      }
                    />
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* ================= Book Appointment CTA ================= */}
        <section className="wrapper bg-color">
          <div className="container py-10 text-center">
            <h2 className="fs-28 merriweather text-white mb-3">
              Speak with Dr. Rohini Jedhe About {relatedLabels[slug]}
            </h2>
            <p className="fs-17 lato text-white mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Ayurmantra Ayurvedic Clinic &amp; Panchakarma Centre, Wagholi, Pune. Book a personalized
              Ayurvedic consultation before starting any therapy.
            </p>
            <NextLink
              title="Book Appointment"
              href="#"
              className="btn btn-lg bg-white text-color rounded border-0 merriweather"
            />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default ServicePage;
