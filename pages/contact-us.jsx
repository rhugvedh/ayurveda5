import { Fragment, useState } from 'react';
import Head from 'next/head';
import NextLink from 'components/NextLink';
import ClinicMap from 'components/ClinicMap';
import { PHONE_NUMBERS, CLINIC_HOURS, WHATSAPP_NUMBER, whatsappLink } from 'data/contact';

const canonical = 'https://www.ayurmantraclinic.com/contact-us/';
const seoTitle = 'Contact Ayurmantra Ayurvedic Clinic & Panchkarma Centre, Wagholi, Pune';
const metaDesc =
  'Contact Ayurmantra Ayurvedic Clinic and Panchkarma Centre in Wagholi, Pune to discuss your health concerns, Ayurvedic consultation, Panchakarma and traditional therapies with Dr. Rohini Jedhe.';

const initial = { name: '', phone: '', email: '', concern: '', date: '', message: '' };

const ContactUs = () => {
  const [form, setForm] = useState(initial);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Builds a WhatsApp message from the form and opens it in the clinic's chat.
  const onSubmit = (e) => {
    e.preventDefault();
    const lines = [
      'Hello Ayurmantra, I would like to enquire about a consultation.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.concern && `Health Concern: ${form.concern}`,
      form.date && `Preferred Appointment Date: ${form.date}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  const whatsappDisplay = `+${WHATSAPP_NUMBER.slice(0, 2)} ${WHATSAPP_NUMBER.slice(2, 7)} ${WHATSAPP_NUMBER.slice(7)}`;

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
                  <span>Contact Us</span>
                </li>
              </ol>
            </nav>
            <h1 className="merriweather fs-38 fs-md-46 text-white mb-3" style={{ maxWidth: '900px' }}>
              Connect With Ayurmantra Ayurvedic Clinic &amp; Panchkarma Centre
            </h1>
          </div>
        </section>

        {/* ================= Intro + details + form ================= */}
        <section className="wrapper">
          <div className="container py-10 py-md-12">
            <div className="row">
              <div className="col-lg-9 mx-auto">
                <p className="fs-18 lh-lg lato text-justify mb-4">
                  Looking for an Ayurvedic Doctor in Wagholi, Pune? Contact Ayurmantra Ayurvedic Clinic and
                  Panchkarma Centre to discuss your health concerns, Ayurvedic consultation, Panchakarma and
                  traditional Ayurvedic therapies.
                </p>
                <p className="fs-18 lh-lg lato text-justify mb-0">
                  Led by Dr. Rohini Jedhe (BAMS, PGDEMS), Ayurmantra focuses on personalised consultation and
                  patient-centred Ayurvedic care.
                </p>
              </div>
            </div>

            <div className="row gy-8 mt-6">
              {/* ---------- Details ---------- */}
              <div className="col-lg-6">
                <h2 className="fs-28 merriweather text-second mb-3">Book an Ayurvedic Consultation</h2>
                <p className="fs-17 lato mb-5">
                  Have questions about your health or Ayurvedic care? Get in touch with us to discuss your
                  concerns and understand the appropriate care options based on your individual needs.
                </p>

                <ul className="list-unstyled lato fs-17 mb-6">
                  <li className="d-flex mb-3">
                    <i className="uil uil-location-pin-alt fs-26 text-color me-3" />
                    <span>
                      <strong>Location:</strong> Wagholi, Pune, Maharashtra, India
                    </span>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="uil uil-user-md fs-26 text-color me-3" />
                    <span>
                      <strong>Doctor:</strong> Dr. Rohini Jedhe (BAMS, PGDEMS)
                    </span>
                  </li>
                  <li className="d-flex mb-3">
                    <i className="uil uil-hospital fs-26 text-color me-3" />
                    <span>
                      <strong>Clinic:</strong> Ayurmantra Ayurvedic Clinic and Panchkarma Centre
                    </span>
                  </li>
                </ul>

                <h3 className="fs-22 merriweather text-second mb-3">Contact Us</h3>
                <ul className="list-unstyled lato fs-17 mb-6">
                  {PHONE_NUMBERS.map(({ href, text }) => (
                    <li className="d-flex align-items-center mb-2" key={href}>
                      <i className="uil uil-phone-volume fs-24 text-color me-3" />
                      <strong className="me-2">Phone:</strong>
                      <a href={href}>{text}</a>
                    </li>
                  ))}
                  <li className="d-flex align-items-center mb-2">
                    <i className="uil uil-whatsapp fs-24 text-color me-3" />
                    <strong className="me-2">WhatsApp:</strong>
                    <a href={whatsappLink()} target="_blank" rel="noreferrer">
                      {whatsappDisplay}
                    </a>
                  </li>
                </ul>

                <h3 className="fs-22 merriweather text-second mb-3">Clinic Hours</h3>
                <ul className="list-unstyled lato fs-17 mb-0">
                  <li className="mb-2">
                    <strong>Monday – Saturday:</strong> {CLINIC_HOURS.weekdays}
                  </li>
                  <li>
                    <strong>Sunday:</strong> {CLINIC_HOURS.sunday}
                  </li>
                </ul>
              </div>

              {/* ---------- Enquiry form (opens WhatsApp) ---------- */}
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-6">
                    <h2 className="fs-28 merriweather text-second mb-2">Send Us a Message</h2>
                    <p className="fs-16 lato mb-5">
                      Fill out the contact form and our team will get back to you regarding your consultation
                      enquiry.
                    </p>
                    <form onSubmit={onSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label lato">Name</label>
                        <input id="name" name="name" type="text" className="form-control" required value={form.name} onChange={onChange} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label lato">Phone Number</label>
                        <input id="phone" name="phone" type="tel" className="form-control" required value={form.phone} onChange={onChange} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label lato">Email Address</label>
                        <input id="email" name="email" type="email" className="form-control" value={form.email} onChange={onChange} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="concern" className="form-label lato">Your Health Concern</label>
                        <input id="concern" name="concern" type="text" className="form-control" value={form.concern} onChange={onChange} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="date" className="form-label lato">Preferred Appointment Date</label>
                        <input id="date" name="date" type="date" className="form-control" value={form.date} onChange={onChange} />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label lato">Message</label>
                        <textarea id="message" name="message" rows={4} className="form-control" value={form.message} onChange={onChange} />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-lg bg-color text-white rounded border-0 merriweather w-100"
                      >
                        Book a Consultation
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= Map ================= */}
        <section className="wrapper bg-grays">
          <div className="container py-10 py-md-12">
            <div className="text-center mb-6">
              <h2 className="fs-28 merriweather text-second mb-2" style={{ fontSize: '28px', lineHeight: 1.3 }}>
                Find Us in Wagholi, Pune
              </h2>
              <p className="fs-17 lato mb-0">
                Baif Rd, Vadjai, Awhalwadi, Wagholi, Pune 412207
              </p>
            </div>
            <div className="row">
              <div className="col-lg-10 mx-auto text-center">
                <ClinicMap height={420} />
              </div>
            </div>
          </div>
        </section>

        {/* ================= Closing ================= */}
        <section className="wrapper bg-color">
          <div className="container py-10 text-center">
            <h2 className="fs-28 merriweather text-white mb-3">Visit Ayurmantra in Wagholi, Pune</h2>
            <p className="fs-17 lato text-white mb-3" style={{ maxWidth: '760px', margin: '0 auto' }}>
              If you are searching for an Ayurvedic Clinic in Wagholi or a Panchakarma Centre in Wagholi,
              connect with Ayurmantra to learn more about our Ayurvedic consultation and traditional therapies.
            </p>
            <p className="fs-17 lato text-white mb-0">
              Your health concerns deserve personalised attention. Get in touch with Ayurmantra today.
            </p>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default ContactUs;
