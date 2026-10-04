import Image from 'next/image';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1495461199391-8c39ab674295?q=80&w=800&auto=format&fit=crop',
    alt: 'Natural herbs and ingredients used in Ayurvedic treatment at AyurMantra Clinic, Wagholi, Pune',
    className: 'col-md-10 offset-md-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=800&auto=format&fit=crop',
    alt: 'Herbal Ayurvedic tea preparation at AyurMantra Clinic, Wagholi, Pune',
    className: 'col-md-12',
  },
  {
    src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    alt: 'Wellness and Ayurvedic consultation at AyurMantra Clinic, Wagholi, Pune',
    className: 'col-md-6',
    single: true,
  },
];

const Tiles = () => (
  <div className="row gx-md-5 gy-5 align-items-center">
    <div className="col-md-6">
      <div className="row gx-md-5 gy-5">
        {images
          .filter(img => !img.single)
          .map(({ src, alt, className }, index) => (
            <div className={className} key={index}>
              <figure className="rounded overflow-hidden">
                <Image
                  src={src}
                  alt={alt}
                  width={800}
                  height={600}
                  style={{ width: '100%', height: 'auto' }}
                />
              </figure>
            </div>
          ))}
      </div>
    </div>

    <div className="col-md-6">
      <figure className="rounded overflow-hidden">
        <Image
          src={images.find(img => img.single).src}
          alt={images.find(img => img.single).alt}
          width={800}
          height={900}
          style={{ width: '100%', height: 'auto' }}
        />
      </figure>
    </div>
  </div>
);

export default Tiles;
