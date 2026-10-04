import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActions from './FloatingActions';

/**
 * Shared layout component for wrapping pages with header and footer.
 * @param {React.ReactNode} children - Page content.
 */
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main role="main">{children}</main>
      <Footer />
      <FloatingActions />
    </>
  );
};

export default Layout;
