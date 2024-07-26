import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>iTrain</title>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
