import Image from 'next/image';
import NextLink from 'components/NextLink';
import { galleryImages } from 'data/gallery';

// Photos featured on the home page (matched by file name in data/gallery.js).
const featured = [
  'panchakarma-preparation',
  'preparation-for-panchakarma',
  'skin-care-before-after-1',
  'hand-care-three-visits',
];

const images = featured
  .map((slug) => galleryImages.find((img) => img.src.endsWith(`/${slug}.webp`)))
  .filter(Boolean);

/**
 * Home page photo preview with hover-zoom and caption overlay,
 * followed by a link to the full gallery page.
 */
const Gallery = () => (
  <div>
    <div className="row g-4">
      {images.map(({ thumb, alt, caption }) => (
        <div className="col-6 col-lg-3" key={thumb}>
          <div className="gallery-item" style={{ aspectRatio: '3 / 4' }}>
            <Image src={thumb} alt={alt} fill sizes="(max-width: 991px) 50vw, 25vw" />
            <div className="gallery-caption">{caption}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-8">
      <NextLink
        href="/gallery/"
        className="btn btn-lg rounded merriweather bg-color text-white border-0"
        title={
          <span className="btn-arrow">
            View Full Gallery <span className="arrow">→</span>
          </span>
        }
      />
    </div>
  </div>
);

export default Gallery;
