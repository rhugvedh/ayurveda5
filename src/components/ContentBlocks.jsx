import React, { Fragment } from 'react';
import RichText from './RichText';

const headingTagForLevel = (level) => {
  if (level <= 1) return 'h2';
  if (level === 2) return 'h3';
  if (level === 3) return 'h4';
  return 'h5';
};

const headingClassForLevel = (level) => {
  if (level <= 1) return 'fs-28 merriweather text-second mt-8 mb-3';
  if (level === 2) return 'fs-22 merriweather text-second mt-6 mb-3';
  if (level === 3) return 'fs-19 merriweather fw-bold mt-5 mb-2';
  return 'fs-17 merriweather fw-bold mt-4 mb-2';
};

/**
 * Recursively renders a list of content nodes (paragraphs, lists, nested sections)
 * parsed from the supplied SEO content. Wording is rendered exactly as provided.
 */
const ContentBlocks = ({ nodes }) => (
  <Fragment>
    {nodes.map((node, i) => {
      if (node.type === 'para') {
        return (
          <p key={i} className="mb-4 fs-17 lh-lg lato text-justify">
            <RichText text={node.text} />
          </p>
        );
      }
      if (node.type === 'ul') {
        return (
          <ul key={i} className="icon-list bullet-soft-primary mb-5">
            {node.items.map((item, j) => (
              <li key={j} className="fs-17 lato mb-2">
                <i className="uil uil-check" />
                <RichText text={item} />
              </li>
            ))}
          </ul>
        );
      }
      if (node.type === 'ol') {
        return (
          <ol key={i} className="mb-5 ps-4">
            {node.items.map((item, j) => (
              <li key={j} className="fs-17 lato mb-2">
                <RichText text={item} />
              </li>
            ))}
          </ol>
        );
      }
      if (node.type === 'section') {
        const Tag = headingTagForLevel(node.level);
        return (
          <div key={i}>
            <Tag className={headingClassForLevel(node.level)}>{node.title}</Tag>
            <ContentBlocks nodes={node.content} />
          </div>
        );
      }
      return null;
    })}
  </Fragment>
);

export default ContentBlocks;
