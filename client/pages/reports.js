import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReturnHome from "../components/icons/ReturnHome";
import { NextSeo } from "next-seo";
import ReportsDB from "../components/ReportsDB";

export default function Reports() {
	return (
		<div className="text-black">
			<NextSeo
				title="Social Threat Finder Scam Reports"
				description="Phishing Scam Report List"
				canonical="https://stf-site.vercel.app/reports"
				openGraph={{
					url: "https://stf-site.vercel.app/reports",
				}}
			/>
			<Head>
				<title>Social Threat Finder</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div className="flex flex-col justify-center mx-auto mt-64 text-center max-w-2x1">
				<h1 className="text-3xl Avenir font-bold tracking-tight text-black md:text-5xl text-blue-500">
					STF Scam Reports
				</h1>
				<br />
				<div className="max-w-7xl mx-10 sm:mx-auto">
					<ReportsDB />
				</div>
				<br />
				<ReturnHome />
			</div>
			<div className="mt-24"></div>
			{/* list of classNames for rendering */}
			<div className="bg-confidence-0 bg-confidence-1 bg-confidence-2 bg-confidence-3 bg-confidence-4 bg-confidence-5 bg-confidence-6 bg-confidence-7 bg-confidence-8 bg-confidence-9 bg-confidence-10 bg-confidence-2 enabled disabled w-0 h-0 hidden w-1 w-2 w-3 w-4 w-5 w-6 w-7 w-8 w-9 w-10 w-11 w-12 w-13 w-14 w-15 w-16 w-17 w-18 w-19 w-20"></div>
			<Footer />
		</div>
	);
}
