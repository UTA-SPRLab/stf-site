import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "regenerator-runtime";
import { toast } from "react-toastify";
import {
	useTable,
	useFilters,
	useGlobalFilter,
	useAsyncDebounce,
	useSortBy,
	usePagination,
} from "react-table";
import {
	ChevronDoubleLeftIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import { Button, PageButton } from "./icons/Buttons";
import { classNames } from "./icons/Utils";
import { SortIcon, SortUpIcon, SortDownIcon } from "./icons/Icons";

// get server side props to fetch data

function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
	const count = preGlobalFilteredRows.length;
	const [value, setValue] = React.useState(globalFilter);
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, 200);

	return (
		<label className="flex gap-x-2 items-baseline">
			<span className="text-gray-700">Search: </span>
			<input
				type="text"
				className="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
				value={value || ""}
				onChange={(e) => {
					setValue(e.target.value);
					onChange(e.target.value);
				}}
				placeholder={`${count} scam reports...`}
			/>
		</label>
	);
}

export function SelectColumnFilter(filter) {
	// Calculate the options for filtering
	// using the preFilteredRows

	const options = React.useMemo(() => {
		const options = new Set();

		filter.column.preFilteredRows.forEach((row) => {
			// if last char is a period, remove it
			if (String(row.values[filter.column.id][0]).slice(-1) === ".") {
				row.values[filter.column.id][0] = String(row.values[filter.column.id][0]).slice(0, -1);
			}

			options.add(row.values[filter.column.id][0]);
		});

		return [...options.values()];
	}, [filter.column.id[0], filter.column.preFilteredRows]);


	// Render a multi-select box
	return (
		<label className="flex gap-x-2 items-baseline flex-wrap">
			{options.map((option, i) => (
				<button
					className="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-500 focus:ring-opacity-50 px-2 py-1 max-w-fit m-1 disabled"
					key={i}
					value={option}
					onClick={(e) => {
						// setFilter(e.target.value || undefined);
						if (e.target.classList.contains("enabled")) {
							e.target.classList.remove("enabled");
							e.target.classList.add("disabled");
						} else {
							e.target.classList.remove("disabled");
							e.target.classList.add("enabled");
						}
						// consolelog all buttons with class enabled
						let enabled = document.querySelectorAll(".enabled");
						let enabledValues = [];
						enabled.forEach((button) => {
							if (button.value != undefined) { enabledValues.push(button.value); }
						}
						);
						if (enabledValues.length != undefined) {
							filter.column.setFilter(enabledValues);
						}
					}}
				>
					{option}
				</button>
			))}
		</label>
	);
}

export function StatusPill({ value }) {
	let status = "undefined";
	switch (value) {
		case 0:
			status = "offline";
			break;
		case 1:
			status = "online";
			break;
		case 999:
			status = "unknown";
			break;
	}

	return (
		<span
			className={classNames(
				"px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
				status.includes("offline") ? "bg-red-100 text-red-800" : null,
				status.includes("online") ? "bg-green-100 text-green-800" : null,
				status.includes("unknown") ? "bg-yellow-100 text-yellow-800" : null,
				status.includes("undefined") ? "bg-gray-100 text-gray-800" : null
			)}
		>
			{status}
		</span>
	);
}

export function IconCell({ value, column, row }) {
	 const checkUrl = async (url) => {
		console.log("hi",url)
		if (url === undefined) return false;

		fetch(url)
			.then((response) => {
				console.log("lmao",response.status)
				if (response.status == 200) {
					return true;
				} else {
					return false 
				};
			})
	};

	return (
		<Link className="flex items-center" target="_blank" href={`${row.original.report_url}`}>
			<div className="flex flex-shrink-0 justify-center h-36 w-64">
				<Image
					className="h-full rounded-lg border"
					src={
						(!String(value).toLowerCase().includes("none") && checkUrl(value))
							? value
							: `./images/imagenotfound.png`
					}
					width={384} height={384}
					alt=""
				/>
			</div>
		</Link>
	);
}

export function BodyCell({ value, column, row }) {
	const getFlagEmoji = (countryCode) =>
		String(countryCode) != "undefined"
			? String.fromCodePoint(
					...[...countryCode.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt())
			  )
			: "";

	let percent = Math.round(row.original.report_trust * 100);

	let dateSub = String(row.original.report_discovered).split(" ");

	const regexStrict =
		"/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]/g";
	const regexDate = "/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/g";
	const regexTime = "/(2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]/g";
	let date =
		String(row.original.report_discovered).includes(regexStrict) != null
			? new Date(`${dateSub[0]}T${dateSub[1]}`)
			: dateSub[0].includes(regexDate) != null
			? new Date(`${dateSub[0]}T00:00:00`)
			: new Date(`1970-01-0 00:00:00`);

	let yesterday = new Date().setDate(new Date().getDate() - 1);
	let prevDate = new Date(date.getTime());
	prevDate.setDate(date.getDate() - 1);

	let formattedDate =
		date.toDateString() === new Date().toDateString()
			? "Today"
			: yesterday === prevDate
			? "Yesterday"
			: !(date.valueOf() == 21600000)
			? `${date
					.toLocaleString("default", { month: "long" })
					.substring(0, 3)}. ${date.getDate()}, ${date.getFullYear()}`
			: "Unknown";

	let category = String(row.original.report_category).toLowerCase();

	// if last char is a period, remove it
	if (category.charAt(category.length - 1) === ".") {
		category = category.slice(0, -1);
	}

	category = category.charAt(0).toUpperCase() + category.slice(1);

	const confVal = Math.round(percent / 10);
	const pillInfo = `w-${Math.round(
		percent / 5
	)} rounded-full text-center flex items-center justify-center absolute z-0 bg-confidence-${confVal ? confVal : 100}`;

	return (
		<div className="flex flex-col flex-nowrap justify-between items-between content-around gap-2 h-44">
			<div className="flex flex-row flex-nowrap justify-between items-start gap-4">
				<div className="overflow-y-scroll relative flex-nowrap h-32 whitespace-pre-line inline-block">
					{String(row.original.report_summary)}
				</div>
				<div className="text-xl border rounded-full bg-gray-100 px-1.5 py-0.5">
					{" "}
					{String(getFlagEmoji(row.original.report_country))}{" "}
				</div>
			</div>
			<div className="flex flex-row flex-nowrap justify-between items-end hidden"> {/* GET BACK TO THIS ASAP */}
				<div className="flex items-center gap-2">
					<Image
						className="h-8 w-8 rounded-lg"
						width={32} height={32}
						src={
							row.original.report_source != "none"
								? `./icons/${String(row.original.report_source).toLowerCase()}.png`
								: `./icons/unknown.png`
						}
					/>
					<div className="flex flex-wrap flex-col flex-1">
						<Link
							href={`https://twitter.com/${String(row.original.report_user_name)}`}
							target="_blank"
						>
							{String(row.original.report_user_name)}
						</Link>
						<div className="text-gray-400 text-sm">{formattedDate}</div>
					</div>
				</div>
				<div className="flex flex-wrap items-end gap-4">
					<div className="bg-gray-100 px-2 border rounded-full">{`${category}`}</div>
					<div className="bg-gray-100 border rounded-full w-20 text-center">
						<div className={pillInfo}>
							<div className="text-center">{String("\u2003")}</div>
						</div>
						<div className="z-50 relative">{String(percent)}%</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function ReportsDB() {
	// Use the state and functions returned from useTable to build your UI

	const [phishList, setPhishList] = useState([
		{
			trust: "error",
			discovered: "error",
			accessor: "error",
			flag: "error",
			source: "error",
			username: "error",
			category: "error",
			url: "error",
		},
	]);
	// const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch("https://socialthreatfinder.com/api/fetch/reports?start=0&amount=10000")
			.then((res) => res.json())
			.then((res) => {
				setPhishList(res.message);
				// setLoading(false);
			})
			.catch((err) => {
				toast.error("Too many API requests!", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			});
	}, []);

	const data = React.useMemo(() => phishList, [phishList]);

	const columns = React.useMemo(
		() => [
			{
				Header: "IMG",
				accessor: "report_image",
				Cell: IconCell,
			},
			{
				Header: "Category",
				accessor: (props) => ([props.report_category, props.report_summary, props.report_user_name, props.report_source, props.report_discovered, props.report_trust, props.report_url, props.report_country]),
				category: "report_category",
				summary: "report_summary",
				username: "report_user_name",
				source: "report_source",
				discovered: "report_discovered",
				trust: "report_trust",
				url: "report_url",
				flag: "report_country",
				Cell: BodyCell,
				Filter: SelectColumnFilter, // new
				filter: "includesSome",
			},
		],[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page, // Instead of using 'rows', we'll use page,
		// which has only the rows for the active page

		// The rest of these things are super handy, too ;)
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,

		state,
		preGlobalFilteredRows,
		setGlobalFilter,
	} = useTable(
		{
			columns,
			data,
		},
		useFilters, // useFilters!
		useGlobalFilter,
		useSortBy,
		usePagination // new
	);

	// Render the UI for your table
	return (
		<>
			<div className="sm:flex sm:gap-x-2 flex-wrap justify-center gap-4">
				<GlobalFilter
					preGlobalFilteredRows={preGlobalFilteredRows}
					globalFilter={state.globalFilter}
					setGlobalFilter={setGlobalFilter}
				/>
				{headerGroups.map((headerGroup) =>
					headerGroup.headers.map((column) =>
						column.Filter ? (
							<div
								className="mt-2 sm:mt-0 mx-32 justify-center items-center"
								key={column.id}
							>
								{column.render("Filter")}
							</div>
						) : null
					)
				)}
			</div>
			<div className="mt-4 flex flex-col">
				<div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table
								{...getTableProps()}
								className="min-w-full divide-y divide-gray-200"
							>
								<thead className="bg-gray-50">
									<></>
								</thead>
								<tbody
									{...getTableBodyProps()}
									className="bg-white divide-y divide-gray-200"
								>
									{page.map((row, i) => {
										// new
										prepareRow(row);
										return (
											<tr {...row.getRowProps()}>
												{row.cells.map((cell) => {
													return (
														<td
															{...cell.getCellProps()}
															className="px-6 py-4"
															role="cell"
														>
															{cell.column.Cell.name ===
															"defaultRenderer" ? (
																<div className="text-sm text-gray-500">
																	{cell.render("Cell")}
																</div>
															) : (
																cell.render("Cell")
															)}
														</td>
													);
												})}
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			{/* Pagination */}
			<div className="py-3 flex items-center justify-between">
				<div className="flex-1 flex justify-between sm:hidden">
					<Button onClick={() => previousPage()} disabled={!canPreviousPage}>
						Previous
					</Button>
					<Button onClick={() => nextPage()} disabled={!canNextPage}>
						Next
					</Button>
				</div>
				<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
					<div className="flex gap-x-2 items-baseline">
						<span className="text-sm text-gray-700">
							Page <span className="font-medium">{state.pageIndex + 1}</span> of{" "}
							<span className="font-medium">{pageOptions.length}</span>
						</span>
						<label>
							<span className="sr-only">Items Per Page</span>
							<select
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
								value={state.pageSize}
								onChange={(e) => {
									setPageSize(Number(e.target.value));
								}}
							>
								{[5, 10, 20].map((pageSize) => (
									<option key={pageSize} value={pageSize}>
										Show {pageSize}
									</option>
								))}
							</select>
						</label>
					</div>
					<div>
						<nav
							className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
							aria-label="Pagination"
						>
							<PageButton
								className="rounded-l-md"
								onClick={() => gotoPage(0)}
								disabled={!canPreviousPage}
							>
								<span className="sr-only">First</span>
								<ChevronDoubleLeftIcon
									className="h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</PageButton>
							<PageButton onClick={() => previousPage()} disabled={!canPreviousPage}>
								<span className="sr-only">Previous</span>
								<ChevronLeftIcon
									className="h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</PageButton>
							<PageButton onClick={() => nextPage()} disabled={!canNextPage}>
								<span className="sr-only">Next</span>
								<ChevronRightIcon
									className="h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</PageButton>
							<PageButton
								className="rounded-r-md"
								onClick={() => gotoPage(pageCount - 1)}
								disabled={!canNextPage}
							>
								<span className="sr-only">Last</span>
								<ChevronDoubleRightIcon
									className="h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</PageButton>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
}

export default ReportsDB;
