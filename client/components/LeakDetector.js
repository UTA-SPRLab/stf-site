import React from "react";
import Link from "next/link";
import Image from "next/image";
import { EnabledButton } from "./icons/Buttons";

export default function LeakDetector() {

	return (
		<section className="text-gray-600 body-font flex flex-col justify-center items-center">
			<div className="max-w-7.5xl mx-auto flex px-5 pt-24 pb-10 md:mb-20 md:mx-32 md:flex-row flex-col items-center">
				<div className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left items-center text-center p-6">
					<h1 className="text-7xl items-center Avenir xl:w-2/2 text-blue-500">Leak Detector</h1>
					<p className="text-gray-600 text-lg text-justify">
						LeakDetector employs sophisticated technology to scour the internet, focusing on dark web markets, hacker forums, and other areas notorious for trading stolen credentials. When we discover credentials associated with your organization, we compile and send this critical information directly to you.
					</p>
					<div className="flex justify-center gap-5 mt-4">
						<EnabledButton href="mailto:sayak.saharoy@uta.edu">
							Contact Us for Access
						</EnabledButton>
					</div>
				</div>
				<div className="hidden lg:flex justify-center p-6 w-1/2">
					<Image alt="Leak Detector" src="/images/cybersecurity6.svg" width={196} height={196} />
				</div>
			</div>
			<div className="mx-8 w-4/5 border-t lg:flex-row bg-top border-gray-300" />
			<section className="flex md:flex-row flex-col items-center justify-center md:mx-32">
				<div className="lg:w-3/5 flex flex-col items-center px-5 py-8 mx-auto">
					<h1 className="text-6xl items-center Avenir xl:w-2/2 text-blue-500 text-center">
						Periodic Credential Reports
					</h1>
					<p className="text-gray-600 text-lg text-justify items-center">
						Choose how frequently you receive credential reports—hourly or daily—to suit your organization's needs. Each report is a direct transmission of found credentials to the designated contact within your organization, allowing for swift and decisive action.
					</p>
				</div>
				<div className="w-2/5 hidden lg:flex justify-center px-5 py-24 mx-auto">
					<Image alt="Periodic Credential Reports" src="/images/cybersecurity1.svg" width={196} height={196}></Image>
				</div>
			</section>
			<div className="mx-8 w-4/5 border-t lg:flex-row bg-top border-gray-300" />
			<section className="flex md:flex-row flex-col items-center justify-center md:mx-32">
				<div className="w-2/5 hidden lg:flex justify-center px-5 py-24 mx-auto">
					<Image alt="Direct Delivery" src="/images/cybersecurity5.svg" width={128} height={128}></Image>
				</div>
				<div className="lg:w-3/5 flex flex-col  items-center px-5 py-8 mx-auto">
					<h1 className="text-6xl items-center Avenir xl:w-2/2 text-blue-500 text-center">
						Direct Delivery
					</h1>
					<p className="text-gray-600 text-lg text-justify items-center">
						There are no dashboards to check or alerts to manage. Instead, we directly send detailed credential files to your organization's contact, ensuring you have the information you need without additional noise or distractions.
					</p>
				</div>
			</section>
			<div className="mx-8 w-4/5 border-t lg:flex-row bg-top border-gray-300" />
			<section className="flex md:flex-row flex-col items-center justify-center md:mx-32 mb-20 transition-all">
				<div className="lg:w-3/5 flex flex-col items-center px-5 py-8 mx-auto">
					<h1 className="text-6xl items-center Avenir xl:w-2/2 text-blue-500 text-center">
						Support When You Need It
					</h1>
					<span className="text-gray-600 text-lg text-justify items-center">
						Although LeakDetector focuses on delivering data rather than alerts, our team is available to assist you in understanding your reports and advising on best practices for responding to leaked credentials.
						<br/>
						<br/>
						Why Your Organization Needs LeakDetector:
						<ul>
							<li className="list-item list-disc list-outside ml-8 pl-2"><b>Direct Insight into Exposed Credentials:</b> With LeakDetector, there's no middleman. Receive comprehensive reports of your exposed credentials directly, enabling immediate action.</li>
							<li className="list-item list-disc list-outside ml-8 pl-2"><b>Simplicity and Efficiency:</b> Without the need to navigate dashboards or manage alerts, your organization can focus on addressing the core issue—securing leaked credentials.</li>
							<li className="list-item list-disc list-outside ml-8 pl-2"><b>Adaptability:</b> Whether you prefer hourly or daily updates, LeakDetector adapts to your organizational rhythm, offering flexibility in how you manage and respond to credential exposurest</li>
						</ul>
					</span>
					
				</div>
				<div className="w-2/5 hidden lg:flex justify-center px-5 py-24 mx-auto">
					<Image alt="API Users" src="/images/cybersecurity2.svg" width={196} height={196} />
				</div>
			</section>
			<div className="mx-8 w-4/5 border-t lg:flex-row bg-top border-gray-300" />
			<section className="flex md:flex-row flex-col items-center justify-center md:mx-32">
				<div className="w-2/5 hidden lg:flex justify-center px-5 py-24 mx-auto">
					<Image alt="API Users" src="/images/cybersecurity3.svg" width={196} height={196} />
				</div>
				<div className="lg:w-3/5 flex flex-col items-center px-5 py-8 mx-auto gap-4">
					<h1 className="text-6xl items-center Avenir xl:w-2/2 text-blue-500 text-center">
						Apply Now
					</h1>
					<p className="text-gray-600 text-lg text-justify items-center">
						Want to start using LeakDetector? Want to give it a test run? Contact us to work out a plan and get started and access to LeakDetector.
					</p>

					<EnabledButton href="mailto:sayak.saharoy@uta.edu">
						Contact Us for Access
					</EnabledButton>
				</div>
			</section>
		</section>
	);
}
