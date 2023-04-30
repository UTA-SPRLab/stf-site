import SmallButton from "./Buttons.js";

export default function ResearchCitation({
	id,
	pos,
	children,
	title,
	authors,
	journal,
	publisher,
	year,
	link,
	...rest
}) {
	const cite = (id) => {
		const citationButton = document.getElementsByClassName("citeButton").item(id);
		const citationText = document.getElementsByClassName("citationText").item(id);

		const oldCitationButton = String(citationButton.innerText);

		const clipboardItem = new ClipboardItem({
			"text/plain": new Blob([citationText.innerText], { type: "text/plain" }),
			"text/html": new Blob([citationText.outerHTML], { type: "text/html" }),
		});

		navigator.clipboard.write([clipboardItem]);

		let range, selection;

		if (document.body.createTextRange) {
			range = document.body.createTextRange();
			range.moveToElementText(citationText);
			range.select();
		} else if (window.getSelection) {
			selection = window.getSelection();
			range = document.createRange();
			range.selectNodeContents(citationText);
			selection.removeAllRanges();
			selection.addRange(range);
		}

		citationButton.innerHTML = "Copied";
		citationButton.classList.remove("hover:bg-blue-600");
		citationButton.classList.add("hover:bg-green-600");
		citationButton.classList.add("bg-green-500");

		setTimeout(() => {
			citationButton.innerHTML = oldCitationButton;
			citationButton.classList.remove("hover:bg-green-600");
			citationButton.classList.remove("bg-green-500");
			citationButton.classList.add("hover:bg-blue-600");
		}, 3000);
	};

	return (
		<div className={`flex justify-between items-center w-full md:flex-row flex-col hover:bg-gray-50 hover:text-gray-800 transition-all ${pos === "top" ? "border-x-2 border-t-2 rounded-t" : (pos === "bottom" ? "border-x-2 border-b-2 rounded-b" : "border-2")}`}>
			<p className="citationText w-7/8 py-2 px-4 text-justify md:text-left" id={id}>
				{authors}. "
				<a href={`${link}`} target="_blank">
					{title}
				</a>
				." <i>{journal}</i>. {publisher}, {year}.
			</p>
			{/* <div className="md:border-l-2 md:border-t-0 md:w-0 md:h-16 border-t-2 rounded-2xl w-5/6 mx-4" /> */}
			<div className="w-1/8 flex md:flex-col md:gap-0 gap-2 md:border-l-2 p-2">
				<a
					className="inline-flex justify-center items-center px-2 py-1 font-medium text-white transition-all duration-150 ease-in-out transform bg-transparent border rounded-lg bg-blue-500 hover:bg-blue-600 w-28 text-center cursor-pointer"
					href={`${link}`}
					target="_blank"
				>
					IEEE Xplore
				</a>
				<a
					className="citeButton inline-flex justify-center items-center px-2 py-1 font-medium text-white transition-all duration-150 ease-in-out transform bg-transparent border rounded-lg bg-blue-500 hover:bg-blue-600 w-28 text-center cursor-pointer"
					id={id}
					onClick={(e) => cite(e.target.id)}
				>
					Cite (MLA)
				</a>
			</div>
		</div>
	);
}
