import '../styles/globals.css';
import Head from 'next/head';
import LeftTabs from "../components/LeftTabs";
import RightTrends from "../components/RightTrends";
import BottomMobileNavbar from "../components/BottomMobileNavbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
      <script src="https://kit.fontawesome.com/" crossorigin="anonymous"></script> {/* insert your own font awesome js cdn */}
      <script src="https://kit.fontawesome.com/e21c35fc0f.js" crossorigin="anonymous"></script>
    </Head>
    {/* Desktop ≥1200px */}
    <div className="container d-none d-xl-block">
      <div className="row">
        <LeftTabs />
        <Component {...pageProps} />
        <RightTrends />
      </div>
    </div>

    {/* Tablet ≥576px	*/}
    <div className="container d-none d-sm-block d-md-block d-xl-none d-xxl-none">
      <div className="row">
        <LeftTabs />
        <Component {...pageProps} />
      </div>
    </div>

    {/* Mobile <576px	*/}
    <div className="container d-sm-none">
      <div className="row">
        <Component {...pageProps} />
        <BottomMobileNavbar />
      </div>
    </div>
    </>
  )
}

export default MyApp
