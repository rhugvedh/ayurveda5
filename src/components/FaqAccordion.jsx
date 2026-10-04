import React from 'react';
import RichText from './RichText';

/**
 * Renders an FAQ section (a section node whose children are Q&A sub-sections)
 * as a Bootstrap-powered accordion, matching the theme's card/collapse markup.
 */
const FaqAccordion = ({ title, items, idPrefix }) => (
  <div className="mt-8">
    <h2 className="fs-28 merriweather text-second mb-5">{title}</h2>
    <div className="accordion-wrapper">
      {items.map((item, i) => {
        const collapseId = `${idPrefix}-faq-${i}`;
        return (
          <div className="card" key={i}>
            <div className="card-header">
              <button
                className={`collapsed`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded="false"
                aria-controls={collapseId}
              >
                {item.title}
              </button>
            </div>
            <div id={collapseId} className="collapse" data-bs-parent=".accordion-wrapper">
              <div className="card-body">
                {item.content
                  .filter((n) => n.type === 'para')
                  .map((n, j) => (
                    <p key={j} className="fs-16 lato mb-2 text-justify">
                      <RichText text={n.text} />
                    </p>
                  ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default FaqAccordion;
