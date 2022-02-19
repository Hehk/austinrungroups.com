import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/header";

function MyApp({ Component, pageProps, ...rest }) {
  return (
    <>
      <Head>
        <title>Austin Run Groups</title>
        <meta
          name="description"
          content="An index of all the running groups in austin"
        />
        <link rel="icon" href="/running.svg" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
