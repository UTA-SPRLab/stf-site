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
                <a
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  Merch
                </a>
              </li>{" "}
              <li>
                <a
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  Brand
                </a>
              </li>{" "}
              <li>
                <a
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  Meetups
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-xl tracking-wide text-gray-900 uppercase font-bold">
              Newsroom
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  Blog
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-xl tracking-wide text-gray-900 uppercase font-bold">
              Connect
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 text-lg"
                  href="/"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500 text-gray-900 transition-colors duration-200 font-semibold text-lg"
                  href="/"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </li>
        </ul> */}
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Privacy Policy
              </a>
            </li>
            {/* <li>
              <a
                href="/"
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Ad Choices
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Cookie Policy
              </a>
            </li> */}
            <li>
              <a
                href="/"
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Partners
              </a>
            </li>
            <li>
              <a
                href="https://sprlab.uta.edu/"
                target="_blank"
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                UTA SPRLab
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              href="#partners"
              className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              © 2023 Social Threat Finder.
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
