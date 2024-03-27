import Head from "next/head";
import Header from "../components/Header";
import APIDocs from "../components/APIDocs";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";;

export default function Docs() {
  return (
    <div className="text-black">
      <NextSeo
        title="Social Threat Finder API Documentation"
        description="Documentation for the Social Threat Finder API."
        canonical="http://104.200.20.157:8023/docs"
        openGraph={{
          url: "http://104.200.20.157:8023/docs",
        }}
      />
      <Head>
        <title>Social Threat Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <APIDocs />
      <Footer />
      <div className="h-0 w-0 hidden selected"></ div>
    </div>
  );
}
