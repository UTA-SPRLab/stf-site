import React from "react";
import { useEffect } from "react";
import { EnabledButton } from "./icons/Buttons";
import hljs from "highlight.js/lib/core";

import javascript from "highlight.js/lib/languages/javascript";
import bash from "highlight.js/lib/languages/bash";
import python from "highlight.js/lib/languages/python";
import json from "highlight.js/lib/languages/json";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("python", python);
hljs.registerLanguage("json", json);

export default function APIDocs() {
	useEffect(() => {
		hljs.initHighlighting();
	});

	const sectionSelect = (id, btn) => {
		const element = document.getElementById(id);
		const elements = document.getElementsByClassName("codeSelection");

		for (let i = 0; i < elements.length; i++) {
			if (element === elements.item(i)) {
				elements.item(i).classList.remove("hidden");
				continue;
			}
			elements.item(i).classList.add("hidden");
		}

		const button = document.getElementById(btn);
		const buttons = document.getElementsByClassName("btnSelection");
		console.log(button);
		for (let i = 0; i < buttons.length; i++) {
			if (button === buttons.item(i)) {
				buttons.item(i).classList.remove("notSelected");
				buttons.item(i).classList.add("selected");
				continue;
			}
			buttons.item(i).classList.add("notSelected");
			buttons.item(i).classList.remove("selected");
		}

		element.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="text-gray-600 body-font flex flex-col justify-center items-center">
			<div className="max-w-7.5xl mx-auto flex px-5 pt-24 pb-10 md:mb-20 md:mx-32 md:flex-row flex-col items-center">
				<div className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left items-center text-center p-6">
					<h1 className="text-7xl items-center Avenir xl:w-2/2 text-blue-500">STF API</h1>
					<p className="text-gray-600 text-lg text-justify">
						Developers can now access and integrate our threat-finding models into their
						apps, products, and research through our API.
					</p>
					<div className="flex justify-center gap-5 mt-4">
						<EnabledButton href="https://forms.gle/Fz5U9E9WkYtzhuMj6">
							Request API Key
						</EnabledButton>
						<EnabledButton href="http://0.0.0.0:8022/api-docs/">
							API Documentation
						</EnabledButton>
					</div>
				</div>
				<div className="hidden lg:flex p-6 w-1/2">
					<img alt="API Landing" src="/images/api-landing.png"></img>
				</div>
			</div>
			<div className="mx-8 w-4/5 border-t lg:flex-row bg-top border-gray-300" />
			<section className="flex md:flex-row flex-col items-center justify-center md:mx-32">
				<div className="lg:w-3/5 flex flex-col items-center px-5 py-8 mx-auto">
					<h1 className="text-6xl items-center Avenir xl:w-2/2 text-blue-500 text-center">
						API Access
					</h1>
					<p className="text-gray-600 text-lg text-justify items-center">
						Access to our API is divided into three tiers: default, registered, and
						academic.
					</p>
					<table className="mt-4 text-center">
						<thead>
							<tr className="border-b-2 hover:bg-gray-50">
								<th className="border-r-2 px-2 py-1">Tier</th>
								<th className="border-r px-2 py-1">Description</th>
								<th className="px-2 py-1">Scope</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b hover:bg-gray-50">
								<td className="border-r-2 px-4 py-1 text-left">
									<div className="inline-flex items-center gap-1">
										<img
											src="/icons/user-default.png"
											className="w-6 h-6 grayIcon"
										/>
										<p>Default</p>
									</div>
								</td>
								<td className="border-r px-4 py-1 text-center">
									Available to all users
								</td>
								<td className="px-4 py-1">Only GET</td>
							</tr>
							<tr className="border-b text-red-700 hover:bg-gray-50">
								<td className="border-r-2 px-4 py-1 leading-4 text-left mx-4">
									<div className="inline-flex items-center gap-1">
										<img
											src="/icons/user-registered.png"
											className="w-6 h-6 disabledIcon"
										/>
										<p>Registered</p>
									</div>
									<p className="text-sm text-center">(Coming Soon)</p>
								</td>
								<td className="border-r px-4 py-1 text-center">
									Users registered to the platform
								</td>
								<td className="px-4 py-1">GET & POST</td>
							</tr>
							<tr className="hover:bg-gray-50">
								<td className="border-r-2 px-4 py-1 text-center">
									<div className="inline-flex items-center gap-1">
										<img
											src="/icons/user-academic.png"
											className="w-6 h-6 grayIcon"
										/>
										<p>Academic</p>
									</div>
								</td>
								<td className="border-r px-4 py-1 text-center">
									Research access by{" "}
									<a
										className="text-blue-500 hover:text-blue-600 transition-all"
										href="https://forms.gle/Fz5U9E9WkYtzhuMj6"
										target="_blank"
									>
										application
									</a>
								</td>
								<td className="px-4 py-1">GET & POST</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="w-2/5 hidden lg:flex px-5 py-24 mx-auto">
					<img alt="API Users" src="/images/api-section-users.png"></img>
				</div>
			</section>
			<div className="mx-8 w-4/5 border-t lg:flex-row bg-top border-gray-300" />
			<section className="flex md:flex-row flex-col items-center justify-center md:mx-32">
				<div className="w-2/5 hidden lg:flex px-5 py-24 mx-auto">
					<img alt="API Users" src="/images/api-section-limits.png"></img>
				</div>
				<div className="lg:w-3/5 flex flex-col  items-center px-5 py-8 mx-auto">
					<h1 className="text-6xl items-center Avenir xl:w-2/2 text-blue-500 text-center">
						Limits and Quotas
					</h1>
					<p className="text-gray-600 text-lg text-justify items-center">
						Our API limits queries and payloads based on the tier of the user. Default
						API access is available to all users, and Academic access is available by{" "}
						<a
							className="text-blue-500 hover:text-blue-600 transition-all"
							href="https://forms.gle/Fz5U9E9WkYtzhuMj6"
							target="_blank"
						>
							request
						</a>
						.
					</p>
					<table className="mt-4 text-center">
						<thead>
							<tr className="border-b-2 hover:bg-gray-50">
								<th className="border-r-2 px-2 py-1">Tier</th>
								<th className="border-r px-2 py-1">Max Queries (p/ hr)</th>
								<th className="px-2 py-1">Max Payload (p/ query)</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b hover:bg-gray-50">
								<td className="border-r-2 px-4 py-1 text-left">
									<div className="inline-flex items-center gap-1">
										<img
											src="/icons/user-default.png"
											className="w-6 h-6 grayIcon"
										/>
										<p>Default</p>
									</div>
								</td>
								<td className="border-r px-4 py-1 text-center">30</td>
								<td className="px-4 py-1">500</td>
							</tr>
							<tr className="border-b text-red-700 hover:bg-gray-50">
								<td className="border-r-2 px-4 py-1 leading-4 text-left mx-4">
									<div className="inline-flex items-center gap-1">
										<img
											src="/icons/user-registered.png"
											className="w-6 h-6 disabledIcon"
										/>
										<p>Registered</p>
									</div>
									<p className="text-sm text-center">(Coming Soon)</p>
								</td>
								<td className="border-r px-4 py-1 text-center">60</td>
								<td className="px-4 py-1">1000</td>
							</tr>
							<tr className="hover:bg-gray-50">
								<td className="border-r-2 px-4 py-1 text-center">
									<div className="inline-flex items-center gap-1">
										<img
											src="/icons/user-academic.png"
											className="w-6 h-6 grayIcon"
										/>
										<p>Academic</p>
									</div>
								</td>
								<td className="border-r px-4 py-1 text-center">180</td>
								<td className="px-4 py-1">5000</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<div className="mx-8 w-4/5 border-t lg:flex-row bg-top border-gray-300" />
			<section className="flex md:flex-row flex-col items-center justify-center md:mx-32 mb-20 transition-all">
				<div className="lg:w-3/5 flex flex-col items-center px-5 py-8 mx-auto">
					<h1 className="text-6xl items-center Avenir xl:w-2/2 text-blue-500 text-center">
						How to Use
					</h1>
					<p className="text-gray-600 text-lg text-justify items-center">
						The API can be accessed without a <i>bearer token</i>, but the user will be
						treated to the default tier. If a <i>bearer authorization token</i> is
						provided, the user will have increased limitations based on their API tier.
					</p>
					<div className="mt-4">
						<div>
							<div className="flex text-lg w-full transition-all">
								<button
									id="btnBash"
									className="btnSelection selected"
									onClick={() => sectionSelect("code-bash", "btnBash")}
								>
									<b>Bash</b> Request
								</button>
								<div className="w-4 border-b" />
								<button
									id="btnPy"
									className="btnSelection notSelected"
									onClick={() => sectionSelect("code-py", "btnPy")}
								>
									<b>Python</b> Request
								</button>
								<div className="w-4 border-b" />
								<button
									id="btnJs"
									className="btnSelection notSelected"
									onClick={() => sectionSelect("code-js", "btnJs")}
								>
									<b>JS</b> Request
								</button>
								<div className="w-4 border-b" />
								<button
									id="btnRes"
									className="btnSelection notSelected"
									onClick={() => sectionSelect("code-response", "btnRes")}
								>
									<b>API</b> Response
								</button>
							</div>
							<div></div>
						</div>
						<div className="pt-2">
							<pre id="code-bash" className="codeSelection inline-grid">
								<code className="overflow-scroll whitespace-pre bash language-bash hljs">
									{`curl localhost:8022/api/fetch/phish/ \ 
	-H "Authorization: Bearer $STF_API_KEY" \ 
	-H "Content-Type: application/json"`}
								</code>
							</pre>
							<pre id="code-py" className="codeSelection inline-grid hidden">
								<code className="overflow-scroll whitespace-pre python language-python hljs">
									{`import requests

url = 'localhost:8022/api/fetch/phish'
headers = {
    'Authorization': f'Bearer {STF_API_KEY}',
    'Content-Type': 'application/json'
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    data = response.json()
    print(data)
    # do something with the fetched data
else:
    print(f'Error: {response.status_code}')`}
								</code>
							</pre>
							<pre id="code-js" className="codeSelection inline-grid hidden">
								<code className="overflow-scroll whitespace-pre javascript language-javascript hljs">
									{`fetch('localhost:8022/api/fetch/phish', {
  method: 'GET',
  headers: {
    'Authorization': \`Bearer \${STF_API_KEY}\`,
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    /* do something with the fetched data 7?
  })
  .catch(error => {
    console.error('Error:', error);
  });`}
								</code>
							</pre>
							<pre id="code-response" className="codeSelection inline-grid hidden">
								<code className="overflow-scroll whitespace-pre json language-json hljs">
									{`{
	"message": [
		{
			"id": 1,
			"tweetId": 1234567890123456789,
			"url": "https://example.com",
			"registrar_name": "NAMECHEAP INC",
			"ipAddress": "192.168.0.1",
			"urlAlive": 1,
			"geoCoords": "(00.000, -00.000)",
			"location": "Texas, United States",
			"creationTime": "1970-01-01T00:00:00.000Z",
			"imageUrl": "https://picsum.photos/200",
			"target": "Unknown",
			"mlVerdict": null
		},
		...
	]
}`}
								</code>
							</pre>
						</div>
					</div>
				</div>
				<div className="w-2/5 hidden lg:flex px-5 py-24 mx-auto">
					<img alt="API Users" src="/images/api-section-use.png"></img>
				</div>
			</section>
			<div className="mx-8 w-4/5 border-t lg:flex-row bg-top border-gray-300" />
			<section className="flex md:flex-row flex-col items-center justify-center md:mx-32">
				<div className="w-2/5 hidden lg:flex px-5 py-24 mx-auto">
					<img alt="API Users" src="/images/api-section-docs.png"></img>
				</div>
				<div className="lg:w-3/5 flex flex-col items-center px-5 py-8 mx-auto gap-4">
					<h1 className="text-6xl items-center Avenir xl:w-2/2 text-blue-500 text-center">
						Documentation
					</h1>
					<p className="text-gray-600 text-lg text-justify items-center">
						Extensive information about our API can be found in our documentation.
						Embedded in these docs are endpoints, examples, and more.
					</p>

					<EnabledButton href="http://0.0.0.0:8022/api-docs/">
						API Documentation
					</EnabledButton>
				</div>
			</section>
		</section>
	);
}
