import Link from 'next/link';

export default function ReturnHome() {
	return (
		<Link
			className="w-64 p-1 mx-auto font-bold text-center text-gray-500 border-2 border-gray-500 rounded-lg sm:p-4 hover:bg-gray-200 transition-all"
			href="/"
		>
			Return Home
		</Link>
	);
}
