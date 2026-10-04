import { Fragment } from 'react';
import Head from 'next/head';
import NextLink from 'components/NextLink';
import CtaBanner from 'components/CtaBanner';
import GalleryGrid from 'components/GalleryGrid';
import { whatsappLink } from 'data/contact';

const canonical = 'https://www.ayurmantraclinic.com/gallery/';
const seoTitle = 'Gallery | Ayurmantra Ayurvedic Clinic & Panchkarma Centre, Wagholi, Pune';
const metaDesc =
  'Photos from Ayurmantra Ayurvedic Clinic and Panchkarma Centre in Wagholi, Pune: Panchakarma preparations, therapies and patient results under Dr. Rohini Jedhe.';

const Gallery = () => (
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
                <span>Gallery</span>
              </li>
            </ol>
          </nav>
          <h1 className="merriweather fs-38 fs-md-46 text-white mb-3" style={{ maxWidth: '900px' }}>
            Gallery
          </h1>
          <p className="lato fs-18 text-white opacity-75 mb-0" style={{ maxWidth: '680px' }}>
            A look at how we prepare Panchakarma therapies, the treatments we offer, and the
            progress our patients have shared with us.
          </p>
        </div>
      </section>

      {/* ================= Gallery ================= */}
      <section className="wrapper">
        <div className="container py-10 py-md-12">
          <GalleryGrid />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="wrapper">
        <div className="container py-10 pb-md-16">
          <CtaBanner
            eyebrow="Book a Consultation"
            heading="Speak with Dr. Rohini Jedhe"
            subtext="Tell us about your health concern and we will guide you to the right therapy."
            buttonText="Book on WhatsApp"
            href={whatsappLink()}
          />
        </div>
      </section>
    </main>
  </Fragment>
);

export default Gallery;
