import { Fragment } from 'react';
import Head from 'next/head';
import NextLink from 'components/NextLink';
import { blogPosts } from 'data/blog';

const canonical = 'https://ayurmantrapanchkarma.com/blog/';
const seoTitle = 'Blog | Ayurmantra Ayurvedic Clinic & Panchkarma Centre, Wagholi';
const metaDesc =
  'Read Ayurveda and Panchakarma guides from Ayurmantra Ayurvedic Clinic & Panchkarma Centre in Wagholi, Pune.';

const BlogIndex = () => (
  <Fragment>
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={canonical} />
    </Head>

    <main className="content-wrapper overflow-hidden">
      <section className="wrapper bg-dark">
        <div className="container py-8 py-md-10">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-white mb-4">
              <li className="breadcrumb-item">
                <NextLink href="/" title="Home" />
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <span>Blog</span>
              </li>
            </ol>
          </nav>
          <h1 className="merriweather fs-38 fs-md-46 text-white mb-3" style={{ maxWidth: '900px' }}>
            Blog
          </h1>
        </div>
      </section>

      <section className="wrapper">
        <div className="container py-10 py-md-12">
          <div className="row gy-6 justify-content-center">
            {blogPosts.map(({ slug, h1, excerpt }) => (
              <div className="col-md-8 col-lg-6" key={slug}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-6">
                    <h2 className="fs-24 merriweather text-second mb-3">
                      <NextLink
                        href={`/blog/${slug}/`}
                        title={h1}
                        className="text-reset text-decoration-none"
                      />
                    </h2>
                    <p className="fs-16 lh-lg lato mb-4">{excerpt}</p>
                    <NextLink
                      href={`/blog/${slug}/`}
                      title="Read More"
                      className="btn btn-sm bg-color text-white rounded border-0 merriweather"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  </Fragment>
);

export default BlogIndex;
