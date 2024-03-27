import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReturnHome from "../components/icons/ReturnHome";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import iframe from "react-iframe";

export default function Map() {
  const PhishMap = dynamic(() => import("../components/PhishMap"), {
    loading: () => <p>PhishMap is loading</p>,
    ssr: false,
  });

  return (
    <div className="text-black">
      <NextSeo
        title="Social Threat Finder Phishing Map"
        description="Phishing map visualization"
        canonical="https://socialthreatfinder.commap"
        openGraph={{
          url: "https://socialthreatfinder.commap",
        }}
      />
      <Head>
        <title>Social Threat Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col justify-center items-center mx-auto mt-64 text-center max-w-2x1">
        <h1 className="text-3xl Avenir font-bold tracking-tight text-black md:text-5xl ">
          STF Phishing Map
        </h1>
        <br />
        <div className="max-w-7xl mx-10 w-full flex justify-center items-center">
          {/* <PhishMap /> */}
          <iframe
            url="https://lryanle.com/threatfinderjs/map"
            width="640px"
            height="320px"
          />
        </div>
        <br />
        <ReturnHome />
      </div>
      <div className="mt-24"></div>
      <Footer />
    </div>
  );
}
