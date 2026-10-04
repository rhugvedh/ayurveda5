import { Fragment } from 'react';
import Head from 'next/head';
import NextLink from 'components/NextLink';
import CtaBanner from 'components/CtaBanner';
import { treatmentCategories } from 'data/treatments';

const canonical = 'https://www.ayurmantraclinic.com/treatments/';
const seoTitle = 'Ayurvedic Treatments in Wagholi, Pune | Ayurmantra';
const metaDesc =
  'Ayurvedic treatment in Wagholi, Pune for joint pain, skin diseases, PCOD, digestive, respiratory, diabetes, thyroid, migraine, kidney and child care concerns with Dr. Rohini Jedhe.';

const Treatments = () => (
  <Fragment>
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={canonical} />
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
              <li className="breadcrumb-item active" aria-current="page">
                <span>Treatments</span>
              </li>
            </ol>
          </nav>
          <h1 className="merriweather fs-38 fs-md-46 text-white mb-3" style={{ maxWidth: '900px' }}>
            Ayurvedic Treatments in Wagholi
          </h1>
          <p className="lato fs-18 text-white mb-0" style={{ maxWidth: '760px' }}>
            Personalized Ayurvedic care by Dr. Rohini Jedhe for a wide range of health
            concerns. Choose a category below to see the conditions we treat.
          </p>
        </div>
      </section>

      {/* ================= Category overview ================= */}
      <section className="wrapper">
        <div className="container py-10 py-md-12">
          <div className="row gy-6">
            {treatmentCategories.map(({ id, title, icon, conditions }, i) => (
              <div className="col-md-6 col-lg-4" key={id} id={id} style={{ scrollMarginTop: 120 }}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-6">
                    <i className={`uil ${icon} fs-36 text-color mb-3 d-block`} />
                    <h2 className="fs-22 merriweather text-second mb-4">
                      <span className="me-2">{String(i + 1).padStart(2, '0')}.</span>
                      {title}
                    </h2>
                    <ul className="list-unstyled lato fs-16 mb-0">
                      {conditions.map((c) => (
                        <li key={c} className="mb-2">
                          <i className="uil uil-check-circle text-color me-2" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="wrapper">
        <div className="container py-10 pb-md-16">
          <CtaBanner
            eyebrow="Consult Before You Begin"
            heading="Not sure which treatment is right for you?"
            subtext="Talk to Dr. Rohini Jedhe for a personalized Ayurvedic assessment and treatment plan."
            buttonText="Call +91 97660 73175"
            href="tel:+919766073175"
          />
        </div>
      </section>
    </main>
  </Fragment>
);

export default Treatments;
