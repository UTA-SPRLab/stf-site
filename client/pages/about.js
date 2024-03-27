import Head from "next/head";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function About() {
  return (
    <div className="text-black">
      <NextSeo
        title="Social Threat Finder About Us"
        description="STF About Us"
        canonical="https://socialthreatfinder.com"
        openGraph={{
          url: "https://socialthreatfinder.com",
        }}
      />
      <Head>
        <title>Social Threat Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AboutUs />
      <Footer />
      {/* <div className="h-0 w-0 preserve-3d"></ div> */}
    </div>
  );
}
