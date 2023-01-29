import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/header";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

function MyApp({ Component, pageProps, router }) {
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
      <div className={`font-sans ${inter.variable}`}>
        <Header route={router.route} />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
