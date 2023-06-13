import React from "react";

export default function Footer() {
  return (
    <footer className="flex w-[60vh] flex-col bg-[#202124] px-36 py-10 text-white sm:w-screen sm:flex-row">
      <div className="flex w-full flex-col items-start justify-evenly space-y-10 py-4 sm:flex-row sm:items-center">
        <div className="flex-1 ">
          <p className="text-3xl font-medium text-white">Join our Waitlist</p>
          <div className="mt-6 flex">
            <input
              type="text"
              placeholder="Email address"
              className="rounded-l bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="rounded-r bg-white px-4 py-2 text-black ">
              JOIN
            </button>
          </div>
        </div>

        <div className="mr-0 flex sm:mr-10">
          <div className="ml-0 sm:ml-5">
            <p className="font-bold">Company</p>
            <ul className="mt-2">
              <li>
                <a href="/docs" className="text-gray-300 hover:text-white">
                  Docs
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-300 hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="ml-6">
            <p className="font-bold">Resources</p>
            <ul className="mt-2">
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/learning" className="text-gray-300 hover:text-white">
                  Learning
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
