import { YOUTUBE_URL } from 'data/contact';

const socialLinks = [
  {
    id: 1,
    icon: 'uil uil-facebook-f',
    url: 'https://www.facebook.com/',
  },
  {
    id: 2,
    icon: 'uil uil-instagram',
    url: 'https://www.instagram.com/',
  },
  {
    id: 3,
    icon: 'uil uil-youtube',
    label: 'YouTube',
    url: YOUTUBE_URL,
  },
];

const SocialLinks = ({ className = 'nav social social-white mt-4' }) => (
  <nav className={className}>
    {socialLinks.map(({ id, icon, url, label }) => (
      <a
        key={id}
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit our ${label || (icon.includes('facebook') ? 'Facebook' : 'Instagram')} ${label === 'YouTube' ? 'channel' : 'page'}`}
      >
        <i className={`${icon} fs-30 text-white rounded`} />
      </a>
    ))}
  </nav>
);

export default SocialLinks;
