import Image from 'next/image';
import NextLink from 'components/NextLink';

/**
 * Hero section — split layout with real treatment photography, floating
 * stat card, doctor credential badge, and staggered entrance animations.
 */
const Hero = () => {
  return (
    <section className="wrapper hero-v2">
      <div className="container">
        <div className="row align-items-center gy-10">
          <div className="col-lg-6 order-2 order-lg-1">
            <div
              className="eyebrow-badge animate__animated animate__fadeInDown"
              aria-label="Authentic Ayurveda & Panchakarma Care"
            >
              Authentic Ayurveda &amp; Panchakarma Care
            </div>

            <h1 className="merriweather mb-4 text-second animate__animated animate__fadeInUp animate__delay-1s">
              Rediscover Balance with{' '}
              <span className="text-accent">Trusted Panchakarma Care</span> in
              Wagholi, Pune
            </h1>

            <p className="lato lead fs-18 lh-sm mb-6 animate__animated animate__fadeInUp animate__delay-2s">
              Dr. Rohini Jedhe (BAMS, PGDEMS) offers complete Panchakarma,
              Basti, Shirodhara, Nasya and holistic Ayurvedic treatment
              rooted in classical Ayurvedic principles.
            </p>

            <div className="d-flex flex-wrap gap-3 animate__animated animate__fadeInUp animate__delay-3s">
              <NextLink
                title={
                  <span className="btn-arrow">
                    Book Appointment <span className="arrow">→</span>
                  </span>
                }
                href="#contact"
                className="btn btn-lg btn-primary-navy rounded merriweather"
              />
              <NextLink
                title={
                  <span className="btn-arrow">
                    Explore Therapies <span className="arrow">↗</span>
                  </span>
                }
                href="#services"
                className="btn btn-lg btn-outline-navy rounded merriweather"
              />
            </div>

            <div className="trust-row animate__animated animate__fadeInUp animate__delay-4s">
              <span className="trust-item">
                <i className="uil uil-check-circle" /> Certified BAMS Doctor
              </span>
              <span className="trust-item">
                <i className="uil uil-check-circle" /> 5000+ Patients Treated
              </span>
              <span className="trust-item">
                <i className="uil uil-check-circle" /> Classical Panchakarma
              </span>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2">
            <div className="hero-visual position-relative animate__animated animate__fadeIn animate__delay-1s">
              <div className="hero-badge-floating d-none d-lg-block">
                Dr. Rohini Jedhe
                <br />
                BAMS, PGDEMS
              </div>

              <Image
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1000&auto=format&fit=crop"
                alt="Ayurvedic Panchakarma massage therapy session at AyurMantra Clinic, Wagholi, Pune"
                width={700}
                height={820}
                style={{ width: '100%', height: 'auto' }}
                priority
              />

              <div className="hero-stat-card">
                <i
                  className="uil uil-medkit"
                  style={{ fontSize: 30, color: '#1F4D3A' }}
                  aria-hidden="true"
                />
                <div>
                  <div className="num">5K+</div>
                  <div className="lato fs-13 text-second">
                    Patients Treated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
