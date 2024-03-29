import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReturnHome from "../components/icons/ReturnHome";
import { NextSeo } from "next-seo";
import PhishDB from "../components/PhishDB"

export default function Db() {
  return (
    <div className="text-black">
      <NextSeo
        title="Social Threat Finder Phishing DB"
        description="Phishing Database List"
        canonical="http://104.200.20.157:8023/db"
        openGraph={{
          url: "http://104.200.20.157:8023/db",
        }}
      />
      <Head>
        <title>Social Threat Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col justify-center mx-auto mt-32 text-center max-w-2x1">
        <h1 className="text-3xl my-10 Avenir font-bold tracking-tight text-black md:text-5xl text-blue-500">
          STF Phishing Database
        </h1>
        <br />
        <div className="max-w-7xl mx-10 sm:mx-auto">
          <PhishDB />
        </div>
        <br />
        <ReturnHome />
      </div>
      <div className="mt-24"></div>
      <Footer />
    </div>
  );
}
