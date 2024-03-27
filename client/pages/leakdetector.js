import Head from "next/head";
import Header from "../components/Header";
import LeakDetector from "../components/LeakDetector";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";;

export default function LeakDetectorPage() {
  return (
    <div className="text-black">
      <NextSeo
        title="Social Threat Finder Leak Detector"
        description="Apply for access to Social Threat Finders' Leak Detector."
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
      <LeakDetector />
      <Footer />
      <div className="h-0 w-0 hidden selected"></ div>
    </div>
  );
}
