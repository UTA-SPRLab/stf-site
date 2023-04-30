import React from "react";
import Team from "./Team";
import ResearchCitation from "./icons/ResearchCitation";
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
						Social ThreatFinder is a cutting-edge OSINT tool dedicated to protecting
						users from social engineering threats by identifying and analyzing malicious
						activities, such as phishing websites that are posted or shared on various
						social media networks. Our user-friendly platform provides a comprehensive
						blocklist, delivering reliable and feature-rich data to individuals and
						organizations, empowering them to combat cyber attacks and bolster their
						online security.
						<br />
						<br />
						Our blocklist is updated in real-time, which can be accessed through this
						website, or you can also sign up for our API{" "}
						<a
							className="text-blue-500 hover:text-blue-600 transition-all"
							href="https://forms.gle/Fz5U9E9WkYtzhuMj6"
							target="_blank"
						>
							here
						</a>
						.
					</p>
				</div>
			</div>

			<div className="flex flex-col items-center w-full mb-4 text-center">
				<h1
					className="text-5xl Avenir font-semibold text-blue-500"
					id="partners"
				>
					Meet the Team
				</h1>
			</div>
			<Team />
			<div className="flex flex-col items-center w-full mb-4 text-center">
				<h1
					className="text-5xl Avenir font-semibold text-blue-500"
					id="partners"
				>
					Related Research
				</h1>
				<div className="flex justify-center items-center flex-col w-2/3">
					<ResearchCitation id="0" pos="top" title="Evaluating the effectiveness of phishing reports on twitter" authors="Sayak Saha Roy, Unique Karanjit, and Shirin Nilizadeh" journal="2021 APWG Symposium on Electronic Crime Research (eCrime)" publisher="IEEE" year="2021" link="https://ieeexplore.ieee.org/abstract/document/9738786" />
					<ResearchCitation id="1" title="Evaluating the effectiveness of phishing reports on twitter" authors="Sayak Saha Roy, Unique Karanjit, and Shirin Nilizadeh" journal="2021 APWG Symposium on Electronic Crime Research (eCrime)" publisher="IEEE" year="2021" link="https://ieeexplore.ieee.org/abstract/document/9738786" />
					<ResearchCitation id="2" pos="bottom" title="Evaluating the effectiveness of phishing reports on twitter" authors="Sayak Saha Roy, Unique Karanjit, and Shirin Nilizadeh" journal="2021 APWG Symposium on Electronic Crime Research (eCrime)" publisher="IEEE" year="2021" link="https://ieeexplore.ieee.org/abstract/document/9738786" />
				</div>
			</div>
			<div className="flex justify-center align-center m-20">
				<ReturnHome />
			</div>
		</section>
	);
}
