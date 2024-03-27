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
        canonical="http://104.200.20.157:8023/leakdetector"
        openGraph={{
          url: "http://104.200.20.157:8023/leakdetector",
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
