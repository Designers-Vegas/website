import Head from 'next/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

const Layout = ({ Page, children }) => (
  <div>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      ></meta>
      <title>{Page}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    {children}
    <Footer />
    <style jsx>{`
      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }
      user agent stylesheet h1 {
        display: block;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
      }
      body {
        color: rgba(0, 0, 0, 0.87);
        margin: 0;
        font-size: 0.875rem;
        font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
        font-weight: 400;
        line-height: 1.43;
        letter-spacing: 0.01071em;
        background-color: #fafafa;
      }
    `}</style>
  </div>
);

export default Layout;
