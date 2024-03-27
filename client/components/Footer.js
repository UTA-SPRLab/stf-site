import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-4">
      <div className="max-w-7xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        {/* <ul className="Footer_nav__2rFid text-xl font-medium sm:pb-20 flex justify-evenly gap-3 mb-5 md:mb-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <li className="space-y-5 row-span-2">
            <h2 className="text-xl tracking-wide text-gray-900 uppercase font-bold">
              Company
            </h2>
            <ul className="space-y-4 text-md">
              <li>
                <Link
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  Merch
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  Brand
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  Meetups
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-xl tracking-wide text-gray-900 uppercase font-bold">
              Newsroom
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-xl tracking-wide text-gray-900 uppercase font-bold">
              Connect
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 font-semibold text-lg"
                  href="/"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </li>
        </ul> */}
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-gray-600">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link
                href="/"
                className="text-md text-gray-600 transition-colors duration-300 hover:text-blue-500 font-semibold"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-md text-gray-600 transition-colors duration-300  hover:text-blue-500 font-semibold"
              >
                Privacy Policy
              </Link>
            </li>
            {/* <li>
              <Link
                href="/"
                className="text-md text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Ad Choices
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-md text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Cookie Policy
              </Link>
            </li> */}
            <li>
              <Link
                href="/"
                className="text-md text-gray-600 transition-colors duration-300 hover:text-blue-500 font-semibold"
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                href="https://sprlab.uta.edu/"
                target="_blank"
                className="text-md text-gray-600 transition-colors duration-300 hover:text-blue-500 font-semibold"
              >
                UTA SPRLab
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <Link
              href="#partners"
              className="text-md text-gray-600 transition-colors duration-300 hover:text-blue-500 font-semibold tracking-tight"
            >
              © 2024 Social Threat Finder.
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
