import '../styles/globals.css';
import Head from 'next/head';
import LeftTabs from "../components/LeftTabs";
import RightTrends from "../components/RightTrends";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
      <script src="https://kit.fontawesome.com/" crossorigin="anonymous"></script> {/* insert your own font awesome js cdn */}
    </Head>
    <div className="container">
      <div className="row">
        <LeftTabs />
        <Component {...pageProps} />
        <RightTrends />
      </div>
    </div>
    </>
  )
}

export default MyApp
