import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import dynamic from 'next/dynamic'

export default function Map() {
	const PhishMap = dynamic(() => import("../components/PhishMap"), {
		loading: () => <p>PhishMap is loading</p>,
		ssr: false
	});

  return (
    <div className="text-black">
      <NextSeo
        title="Social Threat Finder Phishing Map"
        description="Phishing map visualization"
        canonical="https://stf-site.vercel.app/map"
        openGraph={{
          url: "https://stf-site.vercel.app/map",
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
        <div className="max-w-7xl mx-10 w-full">
          <PhishMap />
        </div>
        <br />
        <a
          className="w-64 p-1 mx-auto font-bold text-center text-black border border-gray-500 rounded-lg sm:p-4"
          href="/"
        >
          Return Home
        </a>
      </div>
      <div className="mt-64"></div>
      <Footer />
    </div>
  );
}
