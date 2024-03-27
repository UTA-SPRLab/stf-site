import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DisabledButton, EnabledButton } from "./icons/Buttons";

export default function Main() {
	return (
		<section className="text-gray-600 body-font flex flex-col items-center">
			<div className="max-w-7.5xl mx-auto flex px-5 py-24 md:mt-10 md:mx-32 md:flex-row flex-col items-center">
				<div className="lg:flex-grow lg:w-3/5 flex flex-col lg:items-start lg:text-left items-center text-center p-6">
					<h1 className="text-7xl items-center Avenir xl:w-2/2 mb-10 md:mb-4 md:leading-16 leading-14 text-blue-500">
						Next Generation Phishing Detection and Protection
					</h1>
					<p className="mb-4 xl:w-3/4 text-gray-600 text-lg text-justify">
						ThreatFinder is a real-time community sourced anti-scam blocklist focused
						towards reliability and explainability of emerging attacks which target both
						regular and decentralized ecosystem.
					</p>
					<div className="flex justify-center gap-5">
						<EnabledButton href="/db">Phishing DB</EnabledButton>
						<EnabledButton href="/leakdetector">
							Leak Detector
						</EnabledButton>
						<EnabledButton href="https://forms.gle/Fz5U9E9WkYtzhuMj6">
							Request API Key
						</EnabledButton>
						{/* <DisabledButton status="(Coming Soon)">Scam Reports</DisabledButton> */}
						{/* <button
							className="inline-flex flex-col items-center px-5 py-3 mt-2 font-medium text-white transition duration-150 ease-in-out transform bg-transparent border rounded-lg bg-gray-400 hover:text-gray-200" // When reintrudcing, replace with: bg-blue-500 hover:bg-blue-600
							href="map"
							disabled
						>
							<span className="justify-center">Threat Map</span>
							<span className="justify-center text-xs">(Coming Soon)</span>
						</button> */}
					</div>
				</div>
				<div className="w-2/5 hidden lg:flex">
					<Image alt="Display Mockup" src="/images/MacMockup.png" width={384} height={384}></Image>
				</div>
			</div>
			<section className="mx-auto">
				<div className="container px-5 mx-auto lg:px-24 ">
					<div className="flex flex-col items-center w-full mb-4 text-left lg:text-center">
						<h1
							className="mb-8 text-3xl Avenir font-semibold text-gray-600"
							id="partners"
						>
							{/* Special Thanks To... */} Developed by the{" "}
							<Link
								className="text-blue-500 hover:text-blue-600 transition-all"
								href="https://sprlab.uta.edu/"
								target="_blank"
							>
								Security and Privacy Research Lab
							</Link>
							<br />
							at the{" "}
							<Link
								className="text-blue-500 hover:text-blue-600 transition-all"
								href="https://cse.uta.edu/"
								target="_blank"
							>
								University of Texas at Arlington
							</Link>
						</h1>
					</div>
					<div className="flex justify-center items-center gap-8 mb-16 text-center">
						<EnabledButton href="https://sprlab.uta.edu/">SPRLab Website</EnabledButton>
						<EnabledButton href="https://cse.uta.edu/">UTA CSE Website</EnabledButton>
						{/* <div className="flex items-center justify-center flex-col w-36 gap-2">
							<img
								src="/images/Comcast-Logo.png"
								alt="Shopify Logo"
								className="block object-contain h-16 greyC"
							></img>
							<p>Grant Sponsor</p>
						</div>
						<div className="flex items-center justify-center flex-col w-36 gap-2">
							<img
								src="/images/UTA-CSE-Logo.png"
								alt="Google Logo"
								className="block object-contain h-16 greyC"
							></img>
							<p>Collaborator</p>
						</div>
						<div className="flex items-center justify-center flex-col w-36 gap-2">
							<img
								src="/images/SPRL-UTA-Logo.png"
								alt="Cloudflare Logo"
								className="block object-contain h-16 greyC"
							></img>
							<p>Collaborator</p>
						</div> */}
					</div>
				</div>
			</section>
			{/* <section className="relative">
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

						<EnabledButton href="mailto:sprlab-notifications@uta.edu">Contact Us</EnabledButton>
					</div>
				</div>
			</section> */}
		</section>
	);
}
