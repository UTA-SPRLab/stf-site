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
				className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				value={value || ""}
				onChange={(e) => {
					setValue(e.target.value);
					onChange(e.target.value);
				}}
				placeholder={`${count} records...`}
			/>
		</label>
	);
}

export function SelectColumnFilter({
	column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
	// Calculate the options for filtering
	// using the preFilteredRows
	const options = React.useMemo(() => {
		const options = new Set();
		preFilteredRows.forEach((row) => {
			options.add(row.values[id]);
		});
		return [...options.values()];
	}, [id, preFilteredRows]);

	// Render a multi-select box
	return (
		<label className="flex gap-x-2 items-baseline">
			<span className="text-gray-700">{render("Header")}: </span>
			<select
				className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				name={id}
				id={id}
				value={filterValue}
				onChange={(e) => {
					setFilter(e.target.value || undefined);
				}}
			>
				<option value="">All</option>
				{options.map((option, i) => (
					<option key={i} value={option}>
						{option}
					</option>
				))}
			</select>
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
	return (
		<div className="flex items-center">
			<div className="flex-shrink-0 h-36 w-64">
				<img
					className="h-full w-full rounded-lg"
					src={String(value).toLowerCase()}
					alt=""
				/>
			</div>
		</div>
	);
}

export function BodyCell({ value, column, row }) {
    const getFlagEmoji = countryCode => String(countryCode) != "undefined" ? String.fromCodePoint(...[...countryCode.toUpperCase()].map(x=>0x1f1a5+x.charCodeAt())) : ""

	return (
		<div className="flex flex-col flex-nowrap justify-between content-around gap-14">
			{/* <div className="text-sm font-medium text-gray-900">{value}</div>
			<div className="text-sm text-gray-500">{formattedValue}</div> */}
			<div className="flex flex-row flex-nowrap justify-between items-start gap-4">
				<div>{String(row.original.report_summary)}</div>
				<div className="text-3xl border rounded"> {String(getFlagEmoji(row.original.report_country))} </div>
			</div>
			<div className="flex flex-row flex-nowrap justify-between items-end">
				<img className="h-8 w-8 rounded-lg" src={`./icons/${String(row.original.report_source).toLowerCase()}.png`} />
				<div>{String(row.original.report_category)}</div>
				<div>{String(row.original.report_trust)}</div>
			</div>
		</div>
	);
}

function ReportsDB() {
	// Use the state and functions returned from useTable to build your UI

	const [phishList, setPhishList] = useState([
		{
			id: "error",
			url: "error",
			ipAddress: "error",
			urlAlive: "error",
			location: "error",
			imageUrl: "error",
			target: "error",
		},
	]);
	// const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get("http://localhost:8022/api/fetch/reports?start=0&amount=200")
			.then((res) => {
				setPhishList(res.data.message);
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
				Header: "BODY",
				accessor: "report_summary",
				username: "report_user_name",
				location: "report_location",
				source: "report_source",
				category: "report_category",
				discovered: "report_discovered",
                trust: "report_trust",
				url: "report_url",
                flag: "report_country",
				Cell: BodyCell,
			},
		],
		[]
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
			<div className="sm:flex sm:gap-x-2">
				<GlobalFilter
					preGlobalFilteredRows={preGlobalFilteredRows}
					globalFilter={state.globalFilter}
					setGlobalFilter={setGlobalFilter}
				/>
				{headerGroups.map((headerGroup) =>
					headerGroup.headers.map((column) =>
						column.Filter ? (
							<div className="mt-2 sm:mt-0" key={column.id}>
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
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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