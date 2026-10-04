import { Fragment, useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import Tiles from 'components/Tiles';
import ListColumn from 'components/ListColumn';
import { aboutList1 } from '../data';

const Services = () => {
  const h2Ref = useRef(null);
  const [h2Width, setH2Width] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (h2Ref.current) {
        setH2Width(h2Ref.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <Fragment>
      <div className="row gx-lg-8 gx-xl-12 gy-12 align-items-center mb-5">
        {/* Left Column - Tiles with Counter */}
        <div className="col-lg-6 position-relative">
          <div
            className="btn btn-circle bg-theme-dark pe-none position-absolute counter-wrapper flex-column d-none d-md-flex"
            style={{
              zIndex: 1,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 170,
              height: 170,
            }}
          >
            <h3 className="fs-24 text-white mb-1 mt-n2">
              <CountUp end={5} suffix="K+" />
            </h3>
            <p className="fs-18 merriweather">Patients Treated</p>
          </div>
          <Tiles />
        </div>

        {/* Right Column - Text Content */}
        <div className="col-lg-6">
          <div
            className="d-flex align-items-center justify-content-start mb-2"
            style={{ width: `${h2Width}px` }}
          >
            <h3 className="fs-18 fw-bold text-second merriweather mb-0 me-3">
              AyurMantra Clinic
            </h3>
            <div
              style={{
                flex: 1,
                height: '3px',
                backgroundColor: '#BFD8C6',
              }}
            />
          </div>

          <h2 className="fs-38 mb-5 merriweather d-inline" ref={h2Ref}>
            Trusted Ayurveda & Panchakarma Center in Wagholi, Pune
          </h2>

          <p className="mb-5 fs-18 text-justify lato">
            Panchakarma is the traditional Ayurvedic process of purifying the body. Just as we clean our vehicle&apos;s exterior, Panchakarma cleanses the body from within. Through this process, the doshas (imbalances) that have accumulated inside the body are expelled, and with proper medication taken at the right time, the body recovers within a suitable duration. At AyurMantra Clinic, Dr. Rohini Jedhe (BAMS, PGDEMS) offers Panchakarma along with treatment for joint disorders, digestive issues, back and waist pain, skin diseases, eye complaints, women&apos;s health, chronic ailments, respiratory disorders, kidney stones, jaundice, piles, obesity and cholesterol — all guided by authentic Ayurvedic principles.
          </p>

          <ListColumn list={aboutList1} />
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
