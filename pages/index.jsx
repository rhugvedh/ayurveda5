import { Fragment } from 'react';
import Head from 'next/head';
import Hero from 'components/Hero';
import Marquee from 'components/Marquee';
import Services from 'components/Services';
import WhyChooseUs from 'components/WhyChooseUs';
import ServicesShowcase from 'components/ServicesShowcase';
import ProcessSteps from 'components/ProcessSteps';
import Facts from 'components/Facts';
import Gallery from 'components/Gallery';
import GoogleReviews from 'components/GoogleReviews';
import CtaBanner from 'components/CtaBanner';
import PageProgress from 'components/PageProgress';

const Home = () => (
  <Fragment>
    <PageProgress />
    <Head>
      <title>AyurMantra Clinic & Panchakarma Center – Dr. Rohini Jedhe, Wagholi, Pune</title>
      <meta
        name="description"
        content="AyurMantra Clinic & Panchakarma Center in Wagholi, Pune, led by Dr. Rohini Jedhe (BAMS, PGDEMS). Panchakarma, Basti, Shirodhara, Nasya and complete Ayurvedic care."
      />
    </Head>

    <main className="content-wrapper overflow-hidden">
      <Hero />
      <Marquee />

      {/* About / Services overview */}
      <section className="wrapper" id="services">
        <div className="container py-10 py-md-14">
          <Services />
        </div>
      </section>

      {/* Why choose us */}
      <section className="wrapper bg-grays">
        <div className="container py-10 py-md-14">
          <div className="text-center section-heading mb-10" style={{ maxWidth: 680, margin: '0 auto' }} data-cue="fadeIn">
            <div className="eyebrow-badge">Why Choose Us</div>
            <h2 className="merriweather text-second">
              Why Patients Trust AyurMantra Clinic
            </h2>
            <p className="lato fs-17" style={{ color: '#4F6157' }}>
              A blend of classical Ayurveda, modern hygiene standards and
              genuine, personal care — guided by an experienced BAMS doctor.
            </p>
          </div>
          <WhyChooseUs />
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="wrapper">
        <div className="container py-10">
          <CtaBanner
            eyebrow="Free First Consultation"
            heading="Not sure which therapy is right for you?"
            subtext="Talk to Dr. Rohini Jedhe and get a personalized Panchakarma recommendation."
            buttonText="Book a Consultation"
            href="tel:+919766073175"
          />
        </div>
      </section>

      {/* Numbered therapy list */}
      <section className="wrapper">
        <div className="container py-10 py-md-14">
          <div className="row gy-10 align-items-start">
            <div className="col-lg-4">
              <div className="section-heading" data-cue="fadeIn">
                <div className="eyebrow-badge">Our Therapies</div>
                <h2 className="merriweather text-second mb-3">
                  Complete Panchakarma & Ayurvedic Care
                </h2>
                <p className="lato fs-16" style={{ color: '#4F6157' }}>
                  Every therapy is administered under Dr. Rohini Jedhe&apos;s
                  direct supervision, following classical Ayurvedic protocol.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <ServicesShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Patient journey / process */}
      <section className="wrapper bg-grays">
        <div className="container py-10 py-md-14">
          <div className="text-center section-heading mb-10" style={{ maxWidth: 680, margin: '0 auto' }} data-cue="fadeIn">
            <div className="eyebrow-badge">How It Works</div>
            <h2 className="merriweather text-second">Your Healing Journey, Step by Step</h2>
            <p className="lato fs-17" style={{ color: '#4F6157' }}>
              A clear, guided path from your first visit to lasting wellness.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* Stats */}
      <section className="wrapper facts">
        <div className="container py-12 py-md-14 justify-content-center">
          <Facts />
        </div>
      </section>

      {/* Gallery */}
      <section className="wrapper">
        <div className="container py-10 py-md-14">
          <div className="text-center section-heading mb-10" style={{ maxWidth: 680, margin: '0 auto' }} data-cue="fadeIn">
            <div className="eyebrow-badge">Glimpses</div>
            <h2 className="merriweather text-second">A Look Inside Our Care</h2>
          </div>
          <Gallery />
        </div>
      </section>

      {/* Google reviews */}
      <section className="wrapper bg-grays">
        <div className="container py-10 py-md-14">
          <GoogleReviews />
        </div>
      </section>

      {/* Final CTA */}
      <section className="wrapper" id="contact">
        <div className="container py-10 pb-md-16">
          <CtaBanner
            eyebrow="Start Today"
            heading="Ready to Begin Your Panchakarma Journey?"
            subtext="Call, WhatsApp, or walk in — our team will help you book the right therapy."
            buttonText="Call +91 97660 73175"
            href="tel:+919766073175"
          />
        </div>
      </section>
    </main>
  </Fragment>
);

export default Home;
