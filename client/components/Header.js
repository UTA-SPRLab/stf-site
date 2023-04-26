import React, { useState, useEffect } from "react";

export default function Header() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	// const [activeLink, setActiveLink] = useState(null);
	const [scrollActive, setScrollActive] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScrollActive(window.scrollY > 20);
		});
	}, []);

	return (
		<div
			className={`fixed transition-all top-0 w-full z-[10000] clearNav md:bg-opacity-90 duration-300 ease-in-out transition-all ${
				scrollActive ? " shadow-md pt-0" : " pt-4"
			}`}
		>
			<div className="flex flex-col max-w-7xl px-4 mx-auto lg:items-center lg:justify-between lg:flex-row lg:px-8">
				<div className="flex flex-row items-center justify-between p-4">
					<a
						href="/"
						className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
					>
						<h1 className="text-4xl Avenir tracking-tighter text-blue-500 lg:text-4x1 lg:text-3xl transition duration-150 ease-in-out hover:text-blue-600">
							Social ThreatFinder
						</h1>
					</a>
					<button
						className="text-white cursor-pointer leading-none px-3 py-1 lg:hidden outline-none focus:outline-none transition-all "
						type="button"
						aria-label="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#4b5563"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="feather feather-menu"
						>
							<line x1="3" y1="12" x2="21" y2="12"></line>
							<line x1="3" y1="6" x2="21" y2="6"></line>
							<line x1="3" y1="18" x2="21" y2="18"></line>
						</svg>
					</button>
				</div>
				<div
					className={
						"lg:flex flex-grow flex-row items-center transition duration-150 ease-in-out" +
						(navbarOpen ? " flex" : " hidden")
					}
				>
					<nav className="flex-col flex-grow">
						<ul className="flex flex-grow justify-end items-center content-center flex-wrap mb-4 sm:mb-0">
							<li>
								<a
									href="/db"
									className="font-medium text-gray-600 hover:text-blue-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Phishing DB
								</a>
							</li>
							{/* <li>
								<a
									href="/map"
									className="font-medium text-gray-600 hover:text-blue-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Threat Map
								</a>
							</li> */}
							{/* <li>
								<a
									href="/reports"
									className="font-medium text-gray-600 hover:text-blue-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Scam Reports
								</a>
							</li> */}
							<li>
								<a
									href="http://localhost:8022/api-docs"
									className="font-medium text-gray-600 hover:text-blue-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									API & Feed
								</a>
							</li>
							<li>
								<a
									href="/about"
									className="font-medium text-gray-600 hover:text-blue-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									About Us
								</a>
							</li>
							{/*!loggedIn*/ 1 ? (
								<>
									{/* <li className="mr-4">
										<a
											className="inline-flex items-center px-4 py-2 font-medium text-gray-100 transition duration-150 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-4 bg-blue-500 hover:bg-blue-600"
											href="/"
										>
											<span className="justify-center">Log in</span>
											<svg
												className="w-3 h-3 fill-current text-gray-100 flex ml-2 -mr-1"
												viewBox="0 0 12 12"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
													fillRule="nonzero"
												/>
											</svg>
										</a>
									</li> */}
								</>
							) : (
								<li className="mr-4"></li>
							)}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}
