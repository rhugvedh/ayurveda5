import { Fragment, useRef } from 'react';
import useSticky from 'hooks/useSticky';

import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import ListItemLink from 'components/ListItemLink';
import DropdownToggleLink from 'components/DropdownToggleLink';
import BrandLogo from 'components/BrandLogo';

import { services } from '../data';
import { treatmentCategories } from '../data/treatments';
import { whatsappLink } from '../data/contact';

const serviceLinkMap = {
  'Panchakarma Therapy': '/panchakarma-therapy-in-wagholi/',
  'Virechan (Purgation Therapy)': '/virechan-therapy-in-wagholi/',
  'Basti (Enema Therapy)': '/basti-therapy-in-wagholi/',
  'Vaman (Emesis Therapy)': '/vaman-therapy-in-wagholi/',
  'Raktamokshan (Bloodletting)': '/raktamokshana-therapy-in-wagholi/',
  'Upakarma': '/ayurvedic-therapies-upakarma-wagholi/',
};

const Navbar = ({
  fancy = false, // <-- ADD THIS
  navOtherClass = 'navbar-other d-flex d-lg-none',
  navClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light',
}) => {
  const sticky = useSticky(350);
  const navbarRef = useRef(null);

  const fixedClassName =
    'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink href="/" title={<BrandLogo showName showExperience />} />
      </div>

      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        <div className="offcanvas-header d-lg-none offcavas-bg">
          <NextLink href="/" title={<BrandLogo onDark />} />
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white ms-4"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 offcavas-bg">
          <ul className="navbar-nav">
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Home" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/about-us/" title="About Us" className="nav-link" />
            </li>
            <li className="nav-item dropdown">
              <DropdownToggleLink
                title="Treatments"
                href="#"
                className="nav-link dropdown-toggle"
              />
              <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                <ListItemLink
                  href="/treatments/"
                  title="All Treatments"
                  linkClassName="dropdown-item"
                />
                {treatmentCategories.map(({ id, title, conditions }) => (
                  <li key={id} className="nav-item dropdown dropdown-submenu dropend">
                    <DropdownToggleLink title={title} />
                    <ul className="dropdown-menu">
                      {conditions.map((c) => (
                        <ListItemLink
                          key={c}
                          href={`/treatments/#${id}`}
                          title={c}
                          linkClassName="dropdown-item"
                        />
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <DropdownToggleLink
                title="Services"
                href="#"
                className="nav-link dropdown-toggle"
              />
              <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                {services.map(({ id, title }) => (
                  <ListItemLink
                    key={id}
                    href={serviceLinkMap[title] || '#'}
                    title={title}
                    linkClassName="dropdown-item"
                  />
                ))}
              </ul>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/gallery/" title="Gallery" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/blog/" title="Blog" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/contact-us/" title="Contact Us" className="nav-link" />
            </li>
            <li
              className="nav-item align-items-center d-flex mt-2 mt-lg-0 ms-lg-4 merriweather"
              data-bs-dismiss="offcanvas"
            >
              <NextLink
                title="Book Appointment"
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm bg-color text-white mb-lg-1 rounded border-0"
              />
            </li>
          </ul>

          {/* ============= Show contact info on small devices ============= */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink href="tel:+919766073175" title="+91 97660 73175" />
              <br />
              <NextLink href="tel:+919359403722" title="+91 93594 03722" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <div className={navOtherClass}>
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
          className="hamburger offcanvas-nav-btn"
          aria-label="Toggle navigation"
        >
          <span />
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <nav
        ref={navbarRef}
        className={sticky ? fixedClassName : navClassName}
      >
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-end">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">
            {headerContent}
          </div>
        )}
      </nav>
    </Fragment>
  );
};

export default Navbar;
