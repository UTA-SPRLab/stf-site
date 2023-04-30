import React from "react";
import { classNames } from "./Utils";

export function Button({ children, className, ...rest }) {
	return (
		<button
			type="button"
			className={classNames(
				"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",
				className
			)}
			{...rest}
		>
			{children}
		</button>
	);
}

export function PageButton({ children, className, ...rest }) {
	return (
		<button
			type="button"
			className={classNames(
				"relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
				className
			)}
			{...rest}
		>
			{children}
		</button>
	);
}

export function EnabledButton({ children, href, ...rest }) {
	return (
		<a
			className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-150 ease-in-out transform bg-transparent border rounded-lg bg-blue-500 hover:bg-blue-600"
			href={`${href}`}
			{...rest}
		>
			<span className="justify-center">{children}</span>
		</a>
	);
}

export function DisabledButton({ children, status, ...rest }) {
	return (
		<button
			className="inline-flex flex-col items-center px-5 py-2 mt-2 font-medium text-white transition duration-150 ease-in-out transform bg-transparent border rounded-lg bg-gray-400 hover:text-gray-200"
			disabled
			{...rest}
		>
			<span className="justify-center">{children}</span>
			<span className="justify-center text-xs">{status}</span>
		</button>
	);
}