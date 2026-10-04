import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import ThemeProvider from 'theme/ThemeProvider';
import Layout from 'components/Layout';

import 'animate.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'plyr-react/plyr.css';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';
import 'styles/redesign.css';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  // Content renders immediately (server-side) for SEO/crawlability;
  // previously this gated all page content behind a client-only loader.
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({ interval: -400, duration: 700, percentage: 0.8 });
      scrollCue.update();
    })();
  }, [pathname]);

  useEffect(() => setLoading(false), []);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AyurMantra Clinic & Panchakarma Center – Dr. Rohini Jedhe, Wagholi, Pune</title>
        <meta
          name="description"
          content="AyurMantra Clinic & Panchakarma Center in Wagholi, Pune, led by Dr. Rohini Jedhe (BAMS, PGDEMS). Panchakarma, Basti, Shirodhara, Nasya and complete Ayurvedic care."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AyurMantra Clinic & Panchakarma Center – Dr. Rohini Jedhe" />
        <meta property="og:description" content="Panchakarma, Basti, Shirodhara, Nasya and complete Ayurvedic care in Wagholi, Pune." />
      </Head>
      <Layout>
        <ThemeProvider>
          {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
        </ThemeProvider>
      </Layout>
    </Fragment>
  );
}

export default MyApp;
