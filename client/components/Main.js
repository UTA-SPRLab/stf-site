import React from "react";

export default function Main() {

	return (
		<section className="text-gray-600 body-font">
			<div className="max-w-7.5xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left md:mb-40 mb-10 items-center text-center sm:mb-0">
					<h1 className="mt-5 mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-blue-500">
						Next Generation Phishing Detection and Protection
					</h1>
					<p className="mb-4 xl:w-3/4 text-gray-600 text-lg text-justify">
						ThreatFinder is a real-time community sourced anti-scam blocklist focused towards reliability and explanibility of emerging attacks which target both regular and decentralized ecosysem
					</p>
					<div className="flex justify-center gap-5">
						<a
							className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-150 ease-in-out transform bg-transparent border rounded-lg bg-blue-500 hover:bg-blue-600"
							href="/db"
						>
							<span className="justify-center">Phishing DB</span>
						</a>
						<button
							className="inline-flex flex-col items-center px-5 py-3 mt-2 font-medium text-white transition duration-150 ease-in-out transform bg-transparent border rounded-lg bg-gray-400 hover:text-gray-200" // When reintrudcing, replace with: bg-blue-500 hover:bg-blue-600
							href="reports"
							disabled
						>
							<span className="justify-center">Scam Reports</span>
							<span className="justify-center text-xs">(Coming Soon)</span>
						</button>
						<button
							className="inline-flex flex-col items-center px-5 py-3 mt-2 font-medium text-white transition duration-150 ease-in-out transform bg-transparent border rounded-lg bg-gray-400 hover:text-gray-200" // When reintrudcing, replace with: bg-blue-500 hover:bg-blue-600
							href="map"
							disabled
						>
							<span className="justify-center">Threat Map</span>
							<span className="justify-center text-xs">(Coming Soon)</span>
						</button>
					</div>
				</div>
				<div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 hidden sm:flex">
					<img
						className="w-120"
						alt="Display Mockup"
						src="/images/MacMockup.png"
					></img>
				</div>
			</div>
			<section className="mx-auto">
				<div className="container px-5 mx-auto lg:px-24 ">
					<div className="flex flex-col items-center w-full mb-4 text-left lg:text-center">
						<h1 className="mb-8 text-3xl Avenir font-semibold text-gray-600" id="partners">
							Our partners
						</h1>
					</div>
					<div className="flex justify-evenly items-center gap-8 mb-16 text-center">
						<div className="flex items-center justify-cente w-32">
							<img
								src="/images/Comcast-Logo.png"
								alt="Shopify Logo"
								className="block object-contain h-16 greyC"
							></img>
						</div>
						<div className="flex items-center justify-center w-32">
							<img
								src="/images/UTA-CSE-Logo.png"
								alt="Google Logo"
								className="block object-contain h-16 greyC"
							></img>
						</div>
						<div className="flex items-center justify-center w-32">
							<img
								src="/images/SPRL-UTA-Logo.png"
								alt="Cloudflare Logo"
								className="block object-contain h-16 greyC"
							></img>
						</div>
					</div>
				</div>
			</section>
			<section className="relative">
				<div className="max-w-6xl mx-auto px-4 sm:px-1 text-center">
					<div className="pb-24 md:pb-24">
						<h1 className="mb-2 text-3xl Avenir font-semibold text-gray-600">
							Have any questions?
						</h1>
						<h1 className="mb-4 text-1xl font-semibold text-gray-600">
							Feel free to contact us and we'll get back right away.
						</h1>
						<input
							placeholder="email@gmail.com"
							name="email"
							type="email"
							autoComplete="email"
							className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-600 font-semibold hover:border-gray-800"
						></input>{" "}
						<a
							className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-600 hover:bg-gray-800"
							href="/"
						>
							<span className="justify-center">Contact</span>
						</a>
					</div>
				</div>
			</section>
		</section>
	);
}
