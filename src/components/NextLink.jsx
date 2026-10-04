import Link from 'next/link';

const NextLink = ({ href, className = '', title, ...rest }) => (
  <Link href={href} className={className} {...rest}>
    {title}
  </Link>
);

export default NextLink;
