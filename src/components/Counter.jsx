import PropTypes from 'prop-types';
import CountUp from 'react-countup';

/**
 * Counter component for displaying a metric with icon, animated number, and title.
 *
 * @component
 * @param {Object} props
 * @param {string} props.title - Title of the metric.
 * @param {number} props.number - Numeric value to animate.
 * @param {string} props.icon - Unicons icon class (e.g. 'uil-medkit').
 * @param {string} [props.suffix] - Optional suffix (e.g., "+", "%").
 * @returns {JSX.Element} Rendered counter block.
 */
const Counter = ({ title, number, icon, suffix }) => {
  return (
    <div className="col-md-6 col-lg-4 px-xl-12">
      <div
        className="d-flex flex-column justify-content-center align-items-center bg-white rounded counter-cards p-5"
        aria-label={`Counter card: ${title}`}
      >
        <div
          className="d-flex align-items-center justify-content-center rounded-circle"
          style={{ width: 72, height: 72, background: '#F3EFDD' }}
        >
          <i
            className={`uil ${icon}`}
            style={{ fontSize: 32, color: '#1F4D3A' }}
            aria-hidden="true"
          />
        </div>
        <h3 className="fs-30 counter mt-5 text-second" aria-label={`${number}${suffix || ''}`}>
          <CountUp end={number} suffix={suffix} />
        </h3>
        <p className="fw-bold fs-18 text-center merriweather">{title}</p>
      </div>
    </div>
  );
};

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  suffix: PropTypes.string,
};

export default Counter;
