import { Fragment } from 'react';
import Head from 'next/head';
import NextLink from 'components/NextLink';
import CtaBanner from 'components/CtaBanner';
import { whatsappLink } from 'data/contact';

const canonical = 'https://www.ayurmantraclinic.com/about-us/';
const seoTitle = 'About Ayurmantra Ayurvedic Clinic & Panchkarma Centre, Wagholi | Dr. Rohini Jedhe';
const metaDesc =
  'Learn about Dr. Rohini Jedhe (BAMS, PGDEMS) and Ayurmantra Ayurvedic Clinic and Panchkarma Centre in Wagholi, Pune, and the Ayurvedic consultation and therapies offered.';

const faqs = [
  {
    q: 'Who is Dr. Rohini Jedhe?',
    a: 'Dr. Rohini Jedhe is the doctor leading Ayurmantra Ayurvedic Clinic and Panchkarma Centre. She holds BAMS and PGDEMS qualifications and follows a patient-focused approach to Ayurvedic consultation and care.',
  },
  {
    q: 'What Ayurvedic therapies are available at Ayurmantra?',
    a: 'Depending on individual assessment and suitability, Ayurmantra offers traditional Ayurvedic therapies including Shirodhara, Basti, Virechan and Nasya, along with other Ayurvedic approaches.',
  },
  {
    q: 'Does Ayurmantra offer Panchakarma in Wagholi?',
    a: 'Yes. Ayurmantra Ayurvedic Clinic and Panchkarma Centre provides Panchakarma-related care in Wagholi. The suitability and type of Panchakarma therapy depend on individual assessment and consultation.',
  },
  {
    q: 'What health concerns can be discussed during an Ayurvedic consultation?',
    a: "Patients can discuss concerns such as back pain, joint pain, sciatica, PCOD-related concerns, digestive health, skin and hair concerns, stress, women's health and other lifestyle-related wellness concerns. Diabetes- and thyroid-related wellness support may also be discussed as appropriate.",
  },
  {
    q: 'Does Ayurmantra provide pregnancy-related Ayurvedic care?',
    a: 'Ayurmantra provides consultation regarding pregnancy-related Ayurvedic care, Garbhasanskar and related wellness concerns. Because pregnancy requires careful healthcare, individual assessment and appropriate medical guidance are important.',
  },
  {
    q: 'How can I book an Ayurvedic consultation?',
    a: 'You can contact Ayurmantra Ayurvedic Clinic and Panchkarma Centre in Wagholi, Pune to enquire about consultation availability and book an appointment with Dr. Rohini Jedhe.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const AboutUs = () => (
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
                <span>About Us</span>
              </li>
            </ol>
          </nav>
          <h1 className="merriweather fs-38 fs-md-46 text-white mb-3" style={{ maxWidth: '900px' }}>
            About Us
          </h1>
        </div>
      </section>

      {/* ================= Content ================= */}
      <section className="wrapper">
        <div className="container py-10 py-md-12">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              {faqs.map(({ q, a }) => (
                <div className="mb-8" key={q}>
                  <h2 className="fs-26 merriweather text-second mb-3">{q}</h2>
                  <p className="fs-18 lh-lg lato text-justify mb-0">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="wrapper">
        <div className="container py-10 pb-md-16">
          <CtaBanner
            eyebrow="Book a Consultation"
            heading="Speak with Dr. Rohini Jedhe"
            subtext="Your health concerns deserve personalised attention."
            buttonText="Book on WhatsApp"
            href={whatsappLink()}
          />
        </div>
      </section>
    </main>
  </Fragment>
);

export default AboutUs;
