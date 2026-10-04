import { PHONE_NUMBERS, whatsappLink } from 'data/contact';

/** Floating WhatsApp + Call buttons shown on every page (mounted in Layout). */
const FloatingActions = () => (
  <div className="floating-actions">
    <a
      href={PHONE_NUMBERS[0].href}
      className="floating-btn floating-call"
      aria-label="Call Ayurmantra Clinic"
    >
      <i className="uil uil-phone" />
    </a>
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      className="floating-btn floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <i className="uil uil-whatsapp" />
    </a>
  </div>
);

export default FloatingActions;
