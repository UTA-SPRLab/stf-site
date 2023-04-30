import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReturnHome from "../components/icons/ReturnHome";
import { NextSeo } from "next-seo";

export default function Contact() {
  return (
    <div className="text-black">
      <NextSeo
        title="404: Social Threat Finder"
        description="404 page for all our missing pages"
        canonical="https://stf-site.vercel.app/404"
        openGraph={{
          url: "https://stf-site.vercel.app/404",
        }}
      />
      <Head>
        <title>Social Threat Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col justify-center mx-auto mt-52 text-center max-w-2x1">
        <h1 className="text-3xl font-bold tracking-tight text-black md:text-5xl">
          404 – Unavailable
        </h1>
        <br />
        <ReturnHome />
      </div>
      <div className="mt-64"></div>
      <Footer />
    </div>
  );
}
