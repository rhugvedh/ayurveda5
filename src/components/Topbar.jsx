import { YOUTUBE_URL } from 'data/contact';

const Topbar = () => {
  const contactItems = [
    {
      href: 'tel:+919766073175',
      icon: 'uil-phone-volume',
      text: '+91 97660 73175',
    },
    {
      href: 'tel:+919359403722',
      icon: 'uil-phone-volume',
      text: '+91 93594 03722',
    },
  ];

  const socialLinks = [
    {
      href: 'https://www.facebook.com/profile.php?id=61587561045724',
      icon: 'uil-facebook',
    },
    {
      href: 'https://www.instagram.com/',
      icon: 'uil-instagram',
    },
    {
      href: YOUTUBE_URL,
      icon: 'uil-youtube',
    }
  ];

  return (
    <section className="bg-color d-none d-md-block">
      <div className="container text-white">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 d-none d-xl-flex">
            <p className="m-0 text-white lato">
              Timing: &nbsp; Morning 10:00 AM – 1:00 PM &nbsp;|&nbsp; Evening 5:00 PM – 8:00 PM &nbsp;|&nbsp; Sunday Off
            </p>
          </div>

          {contactItems.map(({ href, icon, text }, index) => (
            <div
              key={index}
              className="d-flex flex-row align-items-center justify-content-center col-auto me-2"
            >
              <div className="icon text-white fs-22 mt-1 me-2">
                <i className={`uil ${icon}`} />
              </div>
              <a href={href} className="link-white hover lato">
                {text}
              </a>
            </div>
          ))}

          <div className="d-flex flex-row align-items-center justify-content-center col-auto">
            {socialLinks.map(({ href, icon }, index) => (
              <a
                key={index}
                href={href}
                className={`link-white hover${index < socialLinks.length - 1 ? ' me-2' : ''}`}
              >
                <div className="icon text-white fs-22 mt-1">
                  <i className={`uil ${icon}`} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
