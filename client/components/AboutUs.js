import React from "react";
import Team from "./Team";
import ReturnHome from "./icons/ReturnHome";

export default function AboutUs() {
	return (
		<section className="text-gray-600 body-font">
			<div className="h-20"></div>
			<div className="max-w-7.5xl mx-auto flex px-5 pt-5 flex-col justify-center items-center">
				<div className="lg:flex-grow md:w-5/6 pt-6 flex flex-col md:mb-20 mb-10 justify-center items-center text-center sm:mb-0">
					<h1 className="mt-5 mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-blue-500">
						About the Project
					</h1>
					<p className="mb-4 xl:w-5/6 text-gray-600 text-lg text-justify">
						Social ThreatFinder is an OSINT (Open source intelligence) tool which
						identifies new social engineering threats, such as phishing websites, that
						are reported on social media networks and provides additional reliable and
						feature-rich data about these attacks in the form of an easily accessible
						blocklist.
						<br />
						<br />
						The creation of this tool was motivated by the findings in our work
						“Evaluating the Effectiveness of Phishing Reports on Twitter”, published at{" "}
						<a
							className="text-blue-500"
							href="https://ieeexplore.ieee.org/abstract/document/9738786?casa_token=FjAIF57PrIUAAAAA:timEgDLq87uH-jxlNFpAbrDjAxesCbdHV3Rg05ywazIEAkLi0Bb_JVNAfhNAOR0RrczqTwk3M_Y"
							target="_blank"
						>
							APWG eCrime 2021
						</a>
						.
					</p>
				</div>
			</div>

			<div className="flex flex-col items-center w-full mb-4 text-center">
				<h1
					className="text-5xl Avenir font-semibold text-black text-blue-500"
					id="partners"
				>
					Meet the Team
				</h1>
			</div>
			<Team />
			<div className="flex justify-center align-center mb-20">
				<ReturnHome />
			</div>
		</section>
	);
}
