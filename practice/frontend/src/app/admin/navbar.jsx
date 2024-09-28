'use client'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <>
  {/* ========== HEADER ========== */}
  <header className="flex flex-wrap md:flex-col md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
    {/* Topbar */}
    <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="flex-1 flex items-center justify-end gap-x-3 pt-2">
        <a
          className="inline-flex justify-center items-center gap-x-2 font-medium text-[12px] text-gray-800 hover:text-neutral-500 focus:outline-none focus:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
          href="#"
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
            <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
            <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
            <circle cx={12} cy={12} r={10} />
          </svg>
          English (US)
        </a>
        {/* Button Group */}
        <div className="flex flex-wrap items-center gap-x-1.5">
          <link
            className="py-[7px] px-2.5 inline-flex items-center font-medium text-[12px] rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="#"
          >
            Sign in
          </link>
          <a
            className="py-2 px-2.5 inline-flex items-center font-medium text-[12px] rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600"
            href="#"
          >
            Get started
          </a>
        </div>
        {/* End Button Group */}
      </div>
    </div>
    {/* End Topbar */}
    <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center gap-x-1">
        <a
          className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
          href="#"
          aria-label="Brand"
        >
          Brand
        </a>
        {/* Collapse Button */}
        <button
          type="button"
          className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
          id="hs-header-base-collapse"
          aria-expanded="false"
          aria-controls="hs-header-base"
          aria-label="Toggle navigation"
          data-hs-collapse="#hs-header-base"
        >
          <svg
            className="hs-collapse-open:hidden size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1={3} x2={21} y1={6} y2={6} />
            <line x1={3} x2={21} y1={12} y2={12} />
            <line x1={3} x2={21} y1={18} y2={18} />
          </svg>
          <svg
            className="hs-collapse-open:block shrink-0 hidden size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span className="sr-only">Toggle navigation</span>
        </button>
        {/* End Collapse Button */}
      </div>
      {/* Collapse */}
      <div
        id="hs-header-base"
        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
        aria-labelledby="hs-header-base-collapse"
      >
        <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
            <div className="grow">
              <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                <a
                  className="p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="/eventHandling"
                  aria-current="page"
                >
                  <svg
                    className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                  Landing
                </a> 
                <a
                  className="p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  href="/eventHandling"
                  aria-current="page"
                >
                  <svg
                    className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                TO DO
                </a> 
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Collapse */}
    </nav>
  </header>
  {/* ========== END HEADER ========== */}
</>

    </div>
  )
}

export default Navbar