import { MAP_DIRECTIONS_URL, MAP_EMBED_URL } from 'data/contact';

/**
 * Google Map of the clinic with a "Get Directions" button.
 *
 * @param {number} [height=320] - Map height in px.
 * @param {boolean} [onDark=false] - Use the light-on-dark button style (footer).
 */
const ClinicMap = ({ height = 320, onDark = false }) => (
  <div className={`clinic-map${onDark ? ' clinic-map--dark' : ''}`}>
    <div className="clinic-map-frame" style={{ height }}>
      <iframe
        src={MAP_EMBED_URL}
        title="Map showing the location of Ayurmantra Ayurvedic Clinic & Panchkarma Centre, Wagholi, Pune"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
    <a
      href={MAP_DIRECTIONS_URL}
      target="_blank"
      rel="noreferrer"
      className="clinic-map-btn lato"
    >
      <i className="uil uil-location-arrow" /> Get Directions
    </a>
  </div>
);

export default ClinicMap;
