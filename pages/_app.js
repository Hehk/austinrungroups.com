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
      <body className="bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
      <Header />
      <Component {...pageProps} />
      </body>
    </>
  );
}

export default MyApp;
