import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import BrandLogo from 'components/BrandLogo';
import ClinicMap from 'components/ClinicMap';
import { services, usefulLinks } from '../data';

const serviceLinkMap = {
  'Panchakarma Therapy': '/panchakarma-therapy-in-wagholi/',
  'Virechan (Purgation Therapy)': '/virechan-therapy-in-wagholi/',
  'Basti (Enema Therapy)': '/basti-therapy-in-wagholi/',
  'Vaman (Emesis Therapy)': '/vaman-therapy-in-wagholi/',
  'Raktamokshan (Bloodletting)': '/raktamokshana-therapy-in-wagholi/',
};

const usefulLinkMap = {
  Home: '/',
  Gallery: '/gallery/',
};

/**
 * Renders a footer widget with a title and list of links.
 *
 * @param {Array} list - List of items with `id` and `title`.
 * @param {string} title - Widget section title.
 * @param {Object} [linkMap] - Optional map of title -> href.
 * @returns {JSX.Element} Footer widget.
 */
const renderWidget = (list, title, linkMap = {}) => (
  <div className="widget">
    <h3 className="widget-title fs-24 mb-3 merriweather">{title}</h3>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ title, id }) => (
        <li key={id}>
          <NextLink href={linkMap[title] || '#'} title={title} className="lato" />
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Footer component for the website.
 *
 * @returns {JSX.Element} Footer section with logo, widgets, social links, and contact info.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top overflow-hidden bg-color">
      <div className="container pt-10 pt-md-12 pb-7">
        <div className="row gx-10 justify-content-around">
          {/* Logo + Description + Social */}
          <div className="col-lg-3">
            <div className="widget d-flex flex-column align-items-center text-center text-lg-start">
              <div className="mb-5">
                <BrandLogo onDark />
              </div>
              <p className="lead mb-5 fs-18 text-white lato text-justify">
                AyurMantra Clinic & Panchakarma Center, led by Dr. Rohini Jedhe (BAMS, PGDEMS), offers Panchakarma, Basti, Shirodhara, Nasya and complete Ayurvedic treatment for a healthy, balanced life.
              </p>
              <h3 className="fs-24 text-white merriweather">Follow Us On</h3>
              <SocialLinks className="nav social text-md-end" />
            </div>
          </div>

          {/* Services + Useful Links */}
          <div className="col-sm-6 col-md-4 col-lg-2 mt-md-5 mt-lg-0 mt-10 text-white">
            {renderWidget(services, 'Services', serviceLinkMap)}
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-md-5 mt-lg-0 mt-10 text-white">
            {renderWidget(usefulLinks, 'Useful Links', usefulLinkMap)}
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-3 mt-md-5 mt-lg-0 mt-10">
            <div className="widget">
              <h3 className="widget-title fs-24 mb-3 merriweather">Contact Us</h3>
              <div className="d-flex mb-3">
                <i className="uil uil-location-pin-alt fs-30 text-white" />
                <address className="ms-2 text-white lato">
                  Baif Rd, Vadjai, Awhalwadi, Wagholi, Pune 412207
                </address>
              </div>
              <div className="d-flex mb-3 align-items-center">
                <i className="uil uil-clock fs-26 text-white" />
                <span className="ms-2 text-white lato">
                  Morning 10:00 AM–1:00 PM, Evening 5:00 PM–8:00 PM (Sunday Off)
                </span>
              </div>
              <div className="d-flex mb-2 align-items-center">
                <i className="uil uil-phone-volume fs-26 text-white" />
                <a href="tel:+919766073175" className="ms-2 text-white lato fs-18">
                  +91 97660 73175
                </a>
              </div>
              <div className="d-flex align-items-center">
                <i className="uil uil-phone-volume fs-26 text-white" />
                <a href="tel:+919359403722" className="ms-2 text-white lato fs-18">
                  +91 93594 03722
                </a>
              </div>
              <div className="mt-5">
                <ClinicMap height={170} onDark />
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-4 mt-md-4 mb-7" />

        <div className="d-md-flex align-items-center justify-content-center">
          <p className="mb-2 mb-lg-0 text-white lato text-center">
            © {currentYear} AyurMantra Clinic & Panchakarma Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
