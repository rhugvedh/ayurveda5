import React, { Fragment } from 'react';

/**
 * Renders plain text that may contain **bold** markdown-lite markers.
 * Keeps all other characters exactly as provided (no wording changes).
 */
const RichText = ({ text }) => {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <Fragment>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </Fragment>
  );
};

export default RichText;
