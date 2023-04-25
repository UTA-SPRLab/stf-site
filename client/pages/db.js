import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import PhishDB from "../components/PhishDB"

export default function Db() {
  return (
    <div className="text-black">
      <NextSeo
        title="Social Threat Finder Phishing DB"
        description="Phishing Database List"
        canonical="https://stf-site.vercel.app/db"
        openGraph={{
          url: "https://stf-site.vercel.app/db",
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
        <a
          className="w-64 p-1 mx-auto font-bold text-center text-black border border-gray-500 rounded-lg sm:p-4"
          href="/"
        >
          Return Home
        </a>
      </div>
      <div className="mt-24"></div>
      <Footer />
    </div>
  );
}
