import { Fragment } from 'react';
import NextLink from 'components/NextLink';

/**
 * Renders text containing [[anchor text|/internal-url/]] link markers.
 * All other characters are rendered exactly as provided.
 */
const BlogText = ({ text }) => {
  const parts = text.split(/(\[\[[^\]|]+\|[^\]]+\]\])/g).filter(Boolean);
  return (
    <Fragment>
      {parts.map((part, i) => {
        const m = part.match(/^\[\[([^|]+)\|([^\]]+)\]\]$/);
        if (m) {
          return (
            <NextLink
              key={i}
              href={m[2]}
              title={m[1]}
              className="text-color fw-bold text-decoration-underline"
            />
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </Fragment>
  );
};

export default BlogText;
