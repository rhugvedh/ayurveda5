import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { galleryCategories, galleryImages } from 'data/gallery';

const Chevron = ({ dir }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {dir === 'left' ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);

const ZoomIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.5" y2="16.5" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

// Tallest / widest a tile may get (height ÷ width). Very tall phone photos are
// cropped slightly in the grid; the lightbox always shows the full photo.
const MIN_RATIO = 0.6;
const MAX_RATIO = 1.5;
const tileRatio = ({ thumbWidth, thumbHeight }) =>
  Math.min(MAX_RATIO, Math.max(MIN_RATIO, thumbHeight / thumbWidth));

// 3 columns on desktop, 2 on tablet and mobile.
const useColumnCount = () => {
  const [columns, setColumns] = useState(3);
  useEffect(() => {
    const update = () => setColumns(window.innerWidth <= 991 ? 2 : 3);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return columns;
};

// Place each photo (in display order) into the currently shortest column so the
// grid stays balanced and the order still reads left-to-right, top-to-bottom.
const buildColumns = (items, columnCount) => {
  const columns = Array.from({ length: columnCount }, () => ({ height: 0, items: [] }));
  items.forEach((img, index) => {
    const target = columns.reduce((min, col) => (col.height < min.height - 0.01 ? col : min), columns[0]);
    target.items.push({ img, index });
    target.height += tileRatio(img);
  });
  return columns;
};

/**
 * Full gallery: category filter chips, masonry photo grid and a
 * full-screen lightbox (arrow keys, Esc and swipe supported).
 */
const GalleryGrid = () => {
  const [category, setCategory] = useState('all');
  const [active, setActive] = useState(null); // index within `visible`
  const closeRef = useRef(null);
  const lastFocused = useRef(null);
  const touchStartX = useRef(null);
  const columnCount = useColumnCount();

  const visible =
    category === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === category);

  const columns = buildColumns(visible, columnCount);

  const count = (id) =>
    id === 'all'
      ? galleryImages.length
      : galleryImages.filter((img) => img.category === id).length;

  const open = (index, event) => {
    lastFocused.current = event.currentTarget;
    setActive(index);
  };

  const close = useCallback(() => {
    setActive(null);
    if (lastFocused.current) lastFocused.current.focus();
  }, []);

  const step = useCallback(
    (dir) => {
      setActive((current) =>
        current === null ? current : (current + dir + visible.length) % visible.length
      );
    },
    [visible.length]
  );

  // Keyboard controls + lock page scroll while the lightbox is open
  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    if (closeRef.current) closeRef.current.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [active, close, step]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 50) step(delta < 0 ? 1 : -1);
  };

  const current = active !== null ? visible[active] : null;
  const next = active !== null ? visible[(active + 1) % visible.length] : null;

  return (
    <div>
      {/* Category filters */}
      <div className="gx-filters" role="group" aria-label="Filter gallery photos">
        {galleryCategories.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`gx-chip${category === id ? ' is-active' : ''}`}
            aria-pressed={category === id}
            onClick={() => {
              setCategory(id);
              setActive(null);
            }}
          >
            {label}
            <span className="gx-chip-count">{count(id)}</span>
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="gx-masonry" key={`${category}-${columnCount}`}>
        {columns.map((col, c) => (
          <div className="gx-col" key={c}>
            {col.items.map(({ img, index }) => (
              <button
                type="button"
                className="gx-tile"
                key={img.src}
                style={{ aspectRatio: `1 / ${tileRatio(img)}` }}
                onClick={(e) => open(index, e)}
                aria-label={`Open photo: ${img.caption}`}
              >
                <Image
                  src={img.thumb}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 991px) 50vw, 33vw"
                  loading={index < 6 ? 'eager' : 'lazy'}
                />
                <span className="gx-tile-overlay">
                  <span className="gx-tile-caption">{img.caption}</span>
                  <span className="gx-tile-zoom">
                    <ZoomIcon />
                  </span>
                </span>
              </button>
            ))}
          </div>
        ))}
      </div>

      <p className="gx-note lato">
        Individual results vary from person to person. Every treatment plan begins with a
        personal consultation with Dr. Rohini Jedhe.
      </p>

      {/* Lightbox */}
      {current && (
        <div
          className="gx-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            className="gx-lb-btn gx-lb-close"
            onClick={close}
            ref={closeRef}
            aria-label="Close photo viewer"
          >
            <CloseIcon />
          </button>

          {visible.length > 1 && (
            <button
              type="button"
              className="gx-lb-btn gx-lb-prev"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
            >
              <Chevron dir="left" />
            </button>
          )}

          <figure className="gx-lb-figure" onClick={(e) => e.stopPropagation()}>
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              priority
            />
            <figcaption className="lato">
              <span className="gx-lb-caption">{current.caption}</span>
              <span className="gx-lb-count">
                {active + 1} / {visible.length}
              </span>
            </figcaption>
          </figure>

          {visible.length > 1 && (
            <button
              type="button"
              className="gx-lb-btn gx-lb-next"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
            >
              <Chevron dir="right" />
            </button>
          )}

          {/* Preload the next photo so arrow navigation feels instant */}
          {next && visible.length > 1 && (
            <div style={{ display: 'none' }} aria-hidden="true">
              <Image src={next.src} alt="" width={next.width} height={next.height} loading="eager" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
