// Single place to change the clinic contact numbers.
// WhatsApp number: country code + number, digits only (no + or spaces).
export const WHATSAPP_NUMBER = '919766073175';

export const PHONE_NUMBERS = [
  { href: 'tel:+919766073175', text: '+91 97660 73175' },
  { href: 'tel:+919359403722', text: '+91 93594 03722' },
];

export const CLINIC_HOURS = {
  weekdays: 'Morning 10:00 AM – 1:00 PM, Evening 5:00 PM – 8:00 PM',
  sunday: 'Off',
};

export const whatsappLink = (
  text = 'Hello, I would like to book an Ayurvedic consultation at Ayurmantra.'
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// Google Maps – clinic location (coordinates from the shared directions link).
export const MAP_DIRECTIONS_URL =
  'https://www.google.com/maps/dir//Ayurmantra+Ayurvedic+Clinic+and+Panchkarma+Centre,+Baif+Rd,+Domkhel,+Vadjai,+Awhalwadi,+Maharashtra+412207/@18.561067,73.9884534,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2c3df97a316c1:0x305f0ba605098eb!2m2!1d73.9808461!2d18.5605821?hl=en-IN';
export const MAP_EMBED_URL =
  'https://www.google.com/maps?q=18.5605821,73.9808461&z=16&hl=en&output=embed';

export const YOUTUBE_URL = 'https://youtube.com/@ayurmantra2020?si=7C_q80N7-OXZQaIV';

// Google Business Profile (opens the clinic listing with all customer reviews).
export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?kgmid=/g/11ssbp_ffh&hl=en-IN&q=Ayurmantra+Ayurvedic+Clinic+and+Panchkarma+Centre&shem=epsd1,esd2e,ltae,rimspwouoe&shndl=30&source=sh/x/loc/osrp/m5/1&kgs=97bec2e718f7855d';
