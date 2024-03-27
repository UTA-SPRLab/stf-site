import React from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Ryan from "../public/images/team-Ryan.jpg";

export default function Team() {
	// function atvImg() {
	// 	var d = document,
	// 		de = d.documentElement,
	// 		bd = d.getElementsByTagName("body")[0],
	// 		htm = d.getElementsByTagName("html")[0],
	// 		win = window,
	// 		imgs = d.querySelectorAll(".atvImg"),
	// 		totalImgs = imgs.length,
	// 		supportsTouch = "ontouchstart" in win || navigator.msMaxTouchPoints;

	// 	if (totalImgs <= 0) {
	// 		return;
	// 	}

	// 	for (var l = 0; l < totalImgs; l++) {
	// 		var thisImg = imgs[l],
	// 			layerElems = thisImg.querySelectorAll(".atvImg-layer"),
	// 			totalLayerElems = layerElems.length;

	// 		if (totalLayerElems <= 0) {
	// 			continue;
	// 		}

	// 		while (thisImg.firstChild) {
	// 			thisImg.removeChild(thisImg.firstChild);
	// 		}

	// 		var containerHTML = d.createElement("div"),
	// 			shineHTML = d.createElement("div"),
	// 			shadowHTML = d.createElement("div"),
	// 			layersHTML = d.createElement("div"),
	// 			layers = [];

	// 		thisImg.id = "atvImg__" + l;
	// 		containerHTML.className = "atvImg-container";
	// 		shineHTML.className = "atvImg-shine";
	// 		shadowHTML.className = "atvImg-shadow";
	// 		layersHTML.className = "atvImg-layers";

	// 		for (var i = 0; i < totalLayerElems; i++) {
	// 			var layer = d.createElement("div"),
	// 				imgSrc = layerElems[i].getAttribute("data-img");

	// 			layer.className = "atvImg-rendered-layer";
	// 			layer.setAttribute("data-layer", i);
	// 			layer.style.backgroundImage = "url(" + imgSrc + ")";
	// 			layersHTML.appendChild(layer);

	// 			layers.push(layer);
	// 		}

	// 		containerHTML.appendChild(shadowHTML);
	// 		containerHTML.appendChild(layersHTML);
	// 		containerHTML.appendChild(shineHTML);
	// 		thisImg.appendChild(containerHTML);

	// 		var w = thisImg.clientWidth || thisImg.offsetWidth || thisImg.scrollWidth;
	// 		thisImg.style.transform = "perspective(" + w * 3 + "px)";

	// 		if (supportsTouch) {
	// 			win.preventScroll = false;

	// 			(function (_thisImg, _layers, _totalLayers, _shine) {
	// 				thisImg.addEventListener("touchmove", function (e) {
	// 					if (win.preventScroll) {
	// 						e.preventDefault();
	// 					}
	// 					processMovement(e, true, _thisImg, _layers, _totalLayers, _shine);
	// 				});
	// 				thisImg.addEventListener("touchstart", function (e) {
	// 					win.preventScroll = true;
	// 					processEnter(e, _thisImg);
	// 				});
	// 				thisImg.addEventListener("touchend", function (e) {
	// 					win.preventScroll = false;
	// 					processExit(e, _thisImg, _layers, _totalLayers, _shine);
	// 				});
	// 			})(thisImg, layers, totalLayerElems, shineHTML);
	// 		} else {
	// 			(function (_thisImg, _layers, _totalLayers, _shine) {
	// 				thisImg.addEventListener("mousemove", function (e) {
	// 					processMovement(e, false, _thisImg, _layers, _totalLayers, _shine);
	// 				});
	// 				thisImg.addEventListener("mouseenter", function (e) {
	// 					processEnter(e, _thisImg);
	// 				});
	// 				thisImg.addEventListener("mouseleave", function (e) {
	// 					processExit(e, _thisImg, _layers, _totalLayers, _shine);
	// 				});
	// 			})(thisImg, layers, totalLayerElems, shineHTML);
	// 		}
	// 	}

	// 	function processMovement(e, touchEnabled, elem, layers, totalLayers, shine) {
	// 		var bdst = bd.scrollTop || htm.scrollTop,
	// 			bdsl = bd.scrollLeft,
	// 			pageX = touchEnabled ? e.touches[0].pageX : e.pageX,
	// 			pageY = touchEnabled ? e.touches[0].pageY : e.pageY,
	// 			offsets = elem.getBoundingClientRect(),
	// 			w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth,
	// 			h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight,
	// 			wMultiple = 320 / w,
	// 			offsetX = 0.52 - (pageX - offsets.left - bdsl) / w,
	// 			offsetY = 0.52 - (pageY - offsets.top - bdst) / h,
	// 			dy = pageY - offsets.top - bdst - h / 2,
	// 			dx = pageX - offsets.left - bdsl - w / 2,
	// 			yRotate = (offsetX - dx) * (0.07 * wMultiple),
	// 			xRotate = (dy - offsetY) * (0.1 * wMultiple),
	// 			imgCSS = "rotateX(" + xRotate + "deg) rotateY(" + yRotate + "deg)",
	// 			arad = Math.atan2(dy, dx),
	// 			angle = (arad * 180) / Math.PI - 90;

	// 		if (angle < 0) {
	// 			angle = angle + 360;
	// 		}

	// 		if (elem.firstChild.className.indexOf(" over") != -1) {
	// 			imgCSS += " scale3d(1.07,1.07,1.07)";
	// 		}
	// 		elem.firstChild.style.transform = imgCSS;

	// 		shine.style.background =
	// 			"linear-gradient(" +
	// 			angle +
	// 			"deg, rgba(255,255,255," +
	// 			((pageY - offsets.top - bdst) / h) * 0.4 +
	// 			") 0%,rgba(255,255,255,0) 80%)";
	// 		shine.style.transform =
	// 			"translateX(" +
	// 			offsetX * totalLayers -
	// 			0.1 +
	// 			"px) translateY(" +
	// 			offsetY * totalLayers -
	// 			0.1 +
	// 			"px)";

	// 		var revNum = totalLayers;
	// 		for (var ly = 0; ly < totalLayers; ly++) {
	// 			layers[ly].style.transform =
	// 				"translateX(" +
	// 				offsetX * revNum * ((ly * 2.5) / wMultiple) +
	// 				"px) translateY(" +
	// 				offsetY * totalLayers * ((ly * 2.5) / wMultiple) +
	// 				"px)";
	// 			revNum--;
	// 		}
	// 	}

	// 	function processEnter(e, elem) {
	// 		elem.firstChild.className += " over";
	// 	}

	// 	function processExit(e, elem, layers, totalLayers, shine) {
	// 		var container = elem.firstChild;

	// 		container.className = container.className.replace(" over", "");
	// 		container.style.transform = "";
	// 		shine.style.cssText = "";

	// 		for (var ly = 0; ly < totalLayers; ly++) {
	// 			layers[ly].style.transform = "";
	// 		}
	// 	}
	// }

	// useEffect(() => atvImg(), []);

	return (
		<div className="max-w-7.5xl mx-auto flex px-5 pb-24 flex-col items-center justify-center">
			<div className="border-2 rounded-2xl flex flex-nowrap md:flex-row flex-col gap-4 justify-between p-4 md:mx-16 m-2 items-center">
				<div className="w-44 shrink-0">
					<Image src="/images/team-Nilizadeh.jpg" className="rounded" width={384} height={384} />
					<div className="flex justify-center items-center p-2">
						<Link
							className="w-8 h-8 mx-1 bg-slate-100 hover:bg-slate-200 transition-all p-1 rounded flex justify-center items-center"
							href="https://twitter.com/ShirinNilizadeh"
							target="_blank"
						>
							<Image src="./icons/twitter.svg" className="w-6 twitter" width={24} height={24} />
						</Link>
						<Link
							className="w-8 h-8 mx-1 bg-slate-100 hover:bg-slate-200 transition-all p-1 rounded flex justify-center items-center"
							href="https://sprlab.uta.edu/"
							target="_blank"
						>
							<Image src="./icons/internet.svg" className="w-6 h-6 internet"  width={24} height={24} />
						</Link>
					</div>
				</div>
				<div className="md:border-l-2 md:border-t-0 md:w-0 md:h-56 border-t-2 rounded-2xl w-5/6" />
				<div>
					<p className="md:text-left text-xl font-semibold text-center">
						Dr. Shirin Nilizadeh
					</p>
					<p className="md:text-left text-md font-light pb-2 italic text-center">
						Advisor
					</p>
					<p className="md:text-left text-justify">
						Dr. Shirin Nilizadeh is Assistant Professor at the Department of Computer
						Science and Engineering, University of Texas at Arlington. She received her
						Ph.D. in Security Informatics from the Indiana University Bloomington (IUB).
						For her dissertation on Privacy-aware Decentralized Architectures for
						Socially Networked Systems, she received a two-year fellowship from the
						School of Informatics and Computing at IUB. Following her doctorate, she
						held post-doctoral positions in CNets at IUB from 2014-2015, in SecLab at
						University of California Santa Barbara from 2015-2017, and then in CyLab at
						Carnegie Mellon University from 2017-2018.
					</p>
				</div>
			</div>
			<div className="border-2 rounded-2xl flex flex-nowrap md:flex-row flex-col gap-4 justify-between p-4 md:mx-16 m-2 items-center">
				<div className="w-44 shrink-0">
					<Image src="/images/team-Ryan.jpg" className="rounded" width={384} height={384} />
					<div className="flex justify-center items-center p-2">
						<Link
							className="w-8 h-8 mx-1 bg-slate-100 hover:bg-slate-200 transition-all p-1 rounded flex justify-center items-center"
							href="https://linkedin.com/in/lryanle/"
							target="_blank"
						>
							<Image src="./icons/linkedin.svg" className="w-6 linkedin" width={32} height={32} />
						</Link>
						<Link
							className="w-8 h-8 mx-1 bg-slate-100 hover:bg-slate-200 transition-all p-1 rounded flex justify-center items-center"
							href="https://github.com/lryanle"
							target="_blank"
						>
							<Image src="./icons/github.svg" className="w-6 github" width={32} height={32} />
						</Link>
						<Link
							className="w-8 h-8 mx-1 bg-slate-100 hover:bg-slate-200 transition-all p-1 rounded flex justify-center items-center"
							href="https://lryanle.com/"
							target="_blank"
						>
							<Image src="./icons/internet.svg" className="w-6 internet" width={32} height={32} />
						</Link>
					</div>
				</div>
				<div className="md:border-l-2 md:border-t-0 md:w-0 md:h-56 border-t-2 rounded-2xl w-5/6" />
				<div>
					<p className="md:text-left text-xl font-semibold text-center">Ryan Lahlou</p>
					<p className="md:text-left text-md font-light pb-2 italic text-center">
						Software Engineer
					</p>
					<p className="md:text-left text-justify">
						Ryan Lahlou is a computer science student at the University of
						Texas at Arlington (expected grad. Dec. 2024). As a former high school
						valedictorian, Ryan has consistently demonstrated academic excellence. He
						has developed skills in various programming languages and tools, including
						Java, React, Next.js, JavaScript, C++, and Python. Ryan's passion for
						computer science is evident in his involvement in research and internships,
						such as working with the NSF, the Security and Privacy Research Lab, and an
						upcoming Software Engineer Intern position at JPMorgan Chase & Co. In
						addition to academics, Ryan has founded the Association for Computing
						Machinery (ACM) and re-founded HackUTA at his university.
					</p>
				</div>
			</div>
			<div className="border-2 rounded-2xl flex flex-nowrap md:flex-row flex-col gap-4 justify-between p-4 md:mx-16 m-2 items-center">
				<div className="w-44 shrink-0">
					<Image src="/images/team-Sayak.jpeg" className="rounded" width={384} height={384} />
					<div className="flex justify-center items-center p-2">
						<Link
							className="w-8 h-8 mx-1 bg-slate-100 hover:bg-slate-200 transition-all p-1 rounded flex justify-center items-center"
							href="https://linkedin.com/in/sayak-saha-roy-8682461a2/"
							target="_blank"
						>
							<Image src="./icons/linkedin.svg" className="w-6 linkedin" width={24} height={24} />
						</Link>
						<Link
							className="w-8 h-8 mx-1 bg-slate-100 hover:bg-slate-200 transition-all p-1 rounded flex justify-center items-center"
							href="https://github.com/sayaksr"
							target="_blank"
						>
							<Image src="./icons/github.svg" className="w-6 github" width={24} height={24} />
						</Link>
						<Link
							className="w-8 h-8 mx-1 bg-slate-100 hover:bg-slate-200 transition-all p-1 rounded flex justify-center items-center"
							href="https://twitter.com/SayakSahaRoy"
							target="_blank"
						>
							<Image src="./icons/twitter.svg" className="w-6 twitter" width={24} height={24} />
						</Link>
						<Link
							className="w-8 h-8 mx-1 bg-slate-100 hover:bg-slate-200 transition-all p-1 rounded flex justify-center items-center"
							href="https://sayaksr.com/"
							target="_blank"
						>
							<Image src="./icons/internet.svg" className="w-6 internet" width={24} height={24} />
						</Link>
					</div>
				</div>
				<div className="md:border-l-2 md:border-t-0 md:w-0 md:h-56 border-t-2 rounded-2xl w-5/6" />
				<div>
					<p className="md:text-left text-xl font-semibold text-center">Sayak Saha Roy</p>
					<p className="md:text-left text-md font-light pb-2 italic text-center">
						Principal Investigator
					</p>
					<p className="md:text-left text-justify">
						Sayak Saha Roy is a 3rd year PhD. student at the Security and Privacy
						Research Lab at UT Arlington. His work focuses on developing novel
						strategies towards detecting and mitigating social engineering attacks that
						spread rapidly through online resources, as well as improving prevalent
						educational approaches aimed towards raising user awareness towards these
						attacks. In 2021, he discovered how vital threat intelligence shared on
						Twitter is overlooked by several security vendors, motivating him to publish
						his{" "}
						<Link
							className="text-blue-500 hover:text-blue-600 transition-all italics"
							href="https://bit.ly/41ThrWc"
							target="_blank"
						>
							 findings
						</Link> at APWG eCrime, and
						subsequently designing the Social ThreatFinder framework - an effort to make
						such data easily accessible to end users and organizations alike. After
						spending a summer at UC Santa Barbara, Sayak is currently focused towards
						extending STF's coverage towards decentralised threats such as
						cryptocurrency and NFT Scams.
					</p>
				</div>
			</div>

			{/* <div className="inline-block h-48 w-48 m-4 rounded-lg atvImg">
				<div
					className="atvImg-layer"
                    data-img="https://media.licdn.com/dms/image/D5603AQE_BMzuPhlDeA/profile-displayphoto-shrink_400_400/0/1681351018827?e=1687392000&v=beta&t=t59KiWlH2hGn3GCg4paloMKl0LBh-9Zj0aqScfOxs5o"
				></div>
                <div className="atvImg-layer"></div>
				<div
					className="atvImg-layer"
					data-img="https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81qP5gxQhP_FuF-PqZgwLTsRcmhMzVO6qWCx2wjNymi9kHcnIi_ydscumgKt0Zx37n9T2h-n2XAXM0Rpw1LTimAEHpYIyA=w3024-h1732"
				></div>
			</div>

			<div className="inline-block h-48 w-48 m-4 rounded-lg atvImg">
				<div
					className="atvImg-layer"
					data-img="https://media.licdn.com/dms/image/C4E03AQGA_PowSDFZyA/profile-displayphoto-shrink_400_400/0/1593915854800?e=1687392000&v=beta&t=4a_DnTPXLUIGlJNFffDyGB0PC4zOthCJZYgsOkScsdM"
				></div>
                <div className="atvImg-layer"></div>
				<div
					className="atvImg-layer"
					data-img="https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81qP5gxQhP_FuF-PqZgwLTsRcmhMzVO6qWCx2wjNymi9kHcnIi_ydscumgKt0Zx37n9T2h-n2XAXM0Rpw1LTimAEHpYIyA=w3024-h1732"
				></div>
			</div>

			<div className="inline-block h-48 w-48 m-4 rounded-lg atvImg">
				<div
					className="atvImg-layer"
					data-img="https://crystal.uta.edu/~shirin/Nilizadeh.jpg"
				></div>
                <div className="atvImg-layer"></div>
				<div
					className="atvImg-layer"
					data-img="https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81qP5gxQhP_FuF-PqZgwLTsRcmhMzVO6qWCx2wjNymi9kHcnIi_ydscumgKt0Zx37n9T2h-n2XAXM0Rpw1LTimAEHpYIyA=w3024-h1732"
				></div>
			</div> */}
		</div>
	);
}
