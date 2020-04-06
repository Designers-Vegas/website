import Head from 'next/head';
import Nav from '../components/nav';
import Footer from '../components/footer';
import CssBaseline from '@material-ui/core/CssBaseline';

const Layout = ({ Page, children }) => (
  <div>
    <CssBaseline />
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      ></meta>
      <title>{Page}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
    </Head>
    <Nav />
    {children}
    <Footer />
  </div>
);

export default Layout;
