import React from 'react'

export default function Demo() {
    return (
        <div className="text-black bg-white">
            <div className="flex flex-col items-center justify-between px-6 py-4 md:flex-row">
                {/* <div className='h-8'>
                </div> */}
                <img className='h-8' src="https://isayresearch.com/include/images/uploads/2015/10/iSay_Research-04.png" alt="" />
                <div className='gap-4 mt-8 text-center cursor-pointer md:mt-0 md:flex '>
                    <div className="mt-4 md:mt-0">
                        About
                    </div>
                    <div className="mt-4 md:mt-0">
                        Contact
                    </div>
                </div>
            </div>
            <div className="px-6 py-20 text-white bg-[#0469AB]">
                <div className='flex flex-col items-center justify-between md:flex-row'>

                    <div className="flex flex-col md:w-1/3">
                        <div className="font-semibold">SMARTER WAY TO DO</div>
                        <div className="mb-4 text-2xl font-semibold">MARKET RESEARCH</div>
                        <div className="">Research Reports and Business Intelligence for Consistent Growth</div>
                    </div>
                    <div className="md:w-1/3 mt-4 md:mt=0">
                        <div className='flex flex-col items-center justify-center gap-12 md:flex-row'>
                            <div className="flex flex-col items-center gap-1">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="28px" height="28px" viewBox="0 0 32 32" version="1.1">
                                        <title>books</title>
                                        <path d="M30.156 26.492l-6.211-23.184c-0.327-1.183-1.393-2.037-2.659-2.037-0.252 0-0.495 0.034-0.727 0.097l0.019-0.004-2.897 0.776c-0.325 0.094-0.609 0.236-0.86 0.42l0.008-0.005c-0.49-0.787-1.349-1.303-2.33-1.306h-2.998c-0.789 0.001-1.5 0.337-1.998 0.873l-0.002 0.002c-0.5-0.537-1.211-0.873-2-0.874h-3c-1.518 0.002-2.748 1.232-2.75 2.75v24c0.002 1.518 1.232 2.748 2.75 2.75h3c0.789-0.002 1.5-0.337 1.998-0.873l0.002-0.002c0.5 0.538 1.211 0.873 2 0.875h2.998c1.518-0.002 2.748-1.232 2.75-2.75v-16.848l4.699 17.54c0.327 1.182 1.392 2.035 2.656 2.037h0c0.001 0 0.003 0 0.005 0 0.251 0 0.494-0.034 0.725-0.098l-0.019 0.005 2.898-0.775c1.182-0.326 2.036-1.392 2.036-2.657 0-0.252-0.034-0.497-0.098-0.729l0.005 0.019zM18.415 9.708l5.31-1.423 3.753 14.007-5.311 1.422zM18.068 3.59l2.896-0.776c0.097-0.027 0.209-0.043 0.325-0.043 0.575 0 1.059 0.389 1.204 0.918l0.002 0.009 0.841 3.139-5.311 1.423-0.778-2.905v-1.055c0.153-0.347 0.449-0.607 0.812-0.708l0.009-0.002zM11.5 2.75h2.998c0.69 0.001 1.249 0.56 1.25 1.25v3.249l-5.498 0.001v-3.25c0.001-0.69 0.56-1.249 1.25-1.25h0zM8.75 23.25h-5.5v-14.5l5.5-0.001zM10.25 8.75l5.498-0.001v14.501h-5.498zM4.5 2.75h3c0.69 0.001 1.249 0.56 1.25 1.25v3.249l-5.5 0.001v-3.25c0.001-0.69 0.56-1.249 1.25-1.25h0zM7.5 29.25h-3c-0.69-0.001-1.249-0.56-1.25-1.25v-3.25h5.5v3.25c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM14.498 29.25h-2.998c-0.69-0.001-1.249-0.56-1.25-1.25v-3.25h5.498v3.25c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM28.58 27.826c-0.164 0.285-0.43 0.495-0.747 0.582l-0.009 0.002-2.898 0.775c-0.096 0.026-0.206 0.041-0.319 0.041-0.575 0-1.060-0.387-1.208-0.915l-0.002-0.009-0.841-3.14 5.311-1.422 0.841 3.14c0.027 0.096 0.042 0.207 0.042 0.321 0 0.23-0.063 0.446-0.173 0.63l0.003-0.006z" />
                                    </svg>
                                </div>
                                <div className="text-xs font-bold">
                                    15,000 +
                                </div>
                                <div className="text-xs">
                                    Market Research
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="28px" height="28px" viewBox="0 0 32 32" version="1.1">
                                        <title>books</title>
                                        <path d="M30.156 26.492l-6.211-23.184c-0.327-1.183-1.393-2.037-2.659-2.037-0.252 0-0.495 0.034-0.727 0.097l0.019-0.004-2.897 0.776c-0.325 0.094-0.609 0.236-0.86 0.42l0.008-0.005c-0.49-0.787-1.349-1.303-2.33-1.306h-2.998c-0.789 0.001-1.5 0.337-1.998 0.873l-0.002 0.002c-0.5-0.537-1.211-0.873-2-0.874h-3c-1.518 0.002-2.748 1.232-2.75 2.75v24c0.002 1.518 1.232 2.748 2.75 2.75h3c0.789-0.002 1.5-0.337 1.998-0.873l0.002-0.002c0.5 0.538 1.211 0.873 2 0.875h2.998c1.518-0.002 2.748-1.232 2.75-2.75v-16.848l4.699 17.54c0.327 1.182 1.392 2.035 2.656 2.037h0c0.001 0 0.003 0 0.005 0 0.251 0 0.494-0.034 0.725-0.098l-0.019 0.005 2.898-0.775c1.182-0.326 2.036-1.392 2.036-2.657 0-0.252-0.034-0.497-0.098-0.729l0.005 0.019zM18.415 9.708l5.31-1.423 3.753 14.007-5.311 1.422zM18.068 3.59l2.896-0.776c0.097-0.027 0.209-0.043 0.325-0.043 0.575 0 1.059 0.389 1.204 0.918l0.002 0.009 0.841 3.139-5.311 1.423-0.778-2.905v-1.055c0.153-0.347 0.449-0.607 0.812-0.708l0.009-0.002zM11.5 2.75h2.998c0.69 0.001 1.249 0.56 1.25 1.25v3.249l-5.498 0.001v-3.25c0.001-0.69 0.56-1.249 1.25-1.25h0zM8.75 23.25h-5.5v-14.5l5.5-0.001zM10.25 8.75l5.498-0.001v14.501h-5.498zM4.5 2.75h3c0.69 0.001 1.249 0.56 1.25 1.25v3.249l-5.5 0.001v-3.25c0.001-0.69 0.56-1.249 1.25-1.25h0zM7.5 29.25h-3c-0.69-0.001-1.249-0.56-1.25-1.25v-3.25h5.5v3.25c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM14.498 29.25h-2.998c-0.69-0.001-1.249-0.56-1.25-1.25v-3.25h5.498v3.25c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM28.58 27.826c-0.164 0.285-0.43 0.495-0.747 0.582l-0.009 0.002-2.898 0.775c-0.096 0.026-0.206 0.041-0.319 0.041-0.575 0-1.060-0.387-1.208-0.915l-0.002-0.009-0.841-3.14 5.311-1.422 0.841 3.14c0.027 0.096 0.042 0.207 0.042 0.321 0 0.23-0.063 0.446-0.173 0.63l0.003-0.006z" />
                                    </svg>
                                </div>
                                <div className="text-xs font-bold">
                                    15,000 +
                                </div>
                                <div className="text-xs">
                                    Market Research
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="28px" height="28px" viewBox="0 0 32 32" version="1.1">
                                        <title>books</title>
                                        <path d="M30.156 26.492l-6.211-23.184c-0.327-1.183-1.393-2.037-2.659-2.037-0.252 0-0.495 0.034-0.727 0.097l0.019-0.004-2.897 0.776c-0.325 0.094-0.609 0.236-0.86 0.42l0.008-0.005c-0.49-0.787-1.349-1.303-2.33-1.306h-2.998c-0.789 0.001-1.5 0.337-1.998 0.873l-0.002 0.002c-0.5-0.537-1.211-0.873-2-0.874h-3c-1.518 0.002-2.748 1.232-2.75 2.75v24c0.002 1.518 1.232 2.748 2.75 2.75h3c0.789-0.002 1.5-0.337 1.998-0.873l0.002-0.002c0.5 0.538 1.211 0.873 2 0.875h2.998c1.518-0.002 2.748-1.232 2.75-2.75v-16.848l4.699 17.54c0.327 1.182 1.392 2.035 2.656 2.037h0c0.001 0 0.003 0 0.005 0 0.251 0 0.494-0.034 0.725-0.098l-0.019 0.005 2.898-0.775c1.182-0.326 2.036-1.392 2.036-2.657 0-0.252-0.034-0.497-0.098-0.729l0.005 0.019zM18.415 9.708l5.31-1.423 3.753 14.007-5.311 1.422zM18.068 3.59l2.896-0.776c0.097-0.027 0.209-0.043 0.325-0.043 0.575 0 1.059 0.389 1.204 0.918l0.002 0.009 0.841 3.139-5.311 1.423-0.778-2.905v-1.055c0.153-0.347 0.449-0.607 0.812-0.708l0.009-0.002zM11.5 2.75h2.998c0.69 0.001 1.249 0.56 1.25 1.25v3.249l-5.498 0.001v-3.25c0.001-0.69 0.56-1.249 1.25-1.25h0zM8.75 23.25h-5.5v-14.5l5.5-0.001zM10.25 8.75l5.498-0.001v14.501h-5.498zM4.5 2.75h3c0.69 0.001 1.249 0.56 1.25 1.25v3.249l-5.5 0.001v-3.25c0.001-0.69 0.56-1.249 1.25-1.25h0zM7.5 29.25h-3c-0.69-0.001-1.249-0.56-1.25-1.25v-3.25h5.5v3.25c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM14.498 29.25h-2.998c-0.69-0.001-1.249-0.56-1.25-1.25v-3.25h5.498v3.25c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM28.58 27.826c-0.164 0.285-0.43 0.495-0.747 0.582l-0.009 0.002-2.898 0.775c-0.096 0.026-0.206 0.041-0.319 0.041-0.575 0-1.060-0.387-1.208-0.915l-0.002-0.009-0.841-3.14 5.311-1.422 0.841 3.14c0.027 0.096 0.042 0.207 0.042 0.321 0 0.23-0.063 0.446-0.173 0.63l0.003-0.006z" />
                                    </svg>
                                </div>
                                <div className="text-xs font-bold">
                                    15,000 +
                                </div>
                                <div className="text-xs">
                                    Market Research
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-2 text-center cursor-pointer">
                            <div className="px-2 py-3 font-semibold mt-4 w-52  text-black bg-[#F7921E] transition duration-200 hover:bg-[#E28111] text-xs border-white border rounded-full">SCHEDULE A CALL</div>
                        </div>
                    </div>
                    <div className='md:w-1/3 '>

                    </div>
                </div>
            </div>
            <div className="md:px-32 px-4 py-8 text-[#0469AB] bg-white">
                <div className="text-2xl font-semibold text-center">Published Reports</div>
                <div className="mt-2 mb-4 text-xs text-center text-gray-600">Published market research reports that dig deep to uncover niche segments & hard-to-get insights</div>
                <div className="flex flex-col justify-between gap-4 my-4 md:flex-row">
                    <div className="px-4 py-8 transition border border-gray-200 rounded-md cursor-pointer bg-gray-50 md:w-1/2 hover:border-gray-200 hover:bg-white">
                        <div className="text-xs text-gray-600">Healthcare</div>
                        <div className="text-md mt-2 text-[#0469AB] font-semibold">Topical Pain Relief Market</div>
                    </div>
                    <div className="px-4 py-8 transition border border-gray-200 rounded-md cursor-pointer bg-gray-50 md:w-1/2 hover:border-gray-200 hover:bg-white">
                        <div className="text-xs text-gray-600">Healthcare</div>
                        <div className="text-md mt-2 text-[#0469AB] font-semibold">Topical Pain Relief Market</div>
                    </div>
                    <div className="px-4 py-8 transition border border-gray-200 rounded-md cursor-pointer bg-gray-50 md:w-1/2 hover:border-gray-200 hover:bg-white">
                        <div className="text-xs text-gray-600">Healthcare</div>
                        <div className="text-md mt-2 text-[#0469AB] font-semibold">Topical Pain Relief Market</div>
                    </div>
                    <div className="px-4 py-8 transition border border-gray-200 rounded-md cursor-pointer bg-gray-50 md:w-1/2 hover:border-gray-200 hover:bg-white">
                        <div className="text-xs text-gray-600">Healthcare</div>
                        <div className="text-md mt-2 text-[#0469AB] font-semibold">Topical Pain Relief Market</div>
                    </div>
                </div>
                <div className="flex items-center justify-center text-center cursor-pointer">
                    <div className='px-2 py-3 font-semibold mt-4 w-52  text-[#0469AB] bg-white hover:bg-[#0469AB] transition duration-200 hover:text-white text-xs border-[#0469AB] border rounded-full'>
                        Export Published Reports
                    </div>
                </div>
            </div>
            <div className="md:px-32 px-4 py-8 text-[#0469AB] bg-gray-50 border border-gray-200">
                <div className="text-2xl font-semibold text-center">Upcoming Reports</div>
                <div className="mt-2 mb-4 text-xs text-center text-gray-600">Published market research reports that dig deep to uncover niche segments & hard-to-get insights</div>
                <div className="flex flex-col flex-wrap justify-between gap-4 md:flex-row">
                    <div className="w-full md:w-[49%] px-4 bg-white border rounded-md cursor-pointer transition duration-200 hover:border-blue-200 py-6">
                        <div className="text-xs text-gray-600">Healthcare</div>
                        <div className="text-md mt-2 text-[#0469AB] font-semibold">Topical Pain Relief Market</div>
                    </div>
                    <div className="w-full md:w-[49%] px-4 bg-white border rounded-md cursor-pointer transition duration-200 hover:border-blue-200 py-6">
                        <div className="text-xs text-gray-600">Healthcare</div>
                        <div className="text-md mt-2 text-[#0469AB] font-semibold">Topical Pain Relief Market</div>
                    </div>
                    <div className="w-full md:w-[49%] px-4 bg-white border rounded-md cursor-pointer transition duration-200 hover:border-blue-200 py-6">
                        <div className="text-xs text-gray-600">Healthcare</div>
                        <div className="text-md mt-2 text-[#0469AB] font-semibold">Topical Pain Relief Market</div>
                    </div>
                    <div className="w-full md:w-[49%] px-4 bg-white border rounded-md cursor-pointer transition duration-200 hover:border-blue-200 py-6">
                        <div className="text-xs text-gray-600">Healthcare</div>
                        <div className="text-md mt-2 text-[#0469AB] font-semibold">Topical Pain Relief Market</div>
                    </div>
                    <div className="w-full md:w-[49%] px-4 bg-white border rounded-md cursor-pointer transition duration-200 hover:border-blue-200 py-6">
                        <div className="text-xs text-gray-600">Healthcare</div>
                        <div className="text-md mt-2 text-[#0469AB] font-semibold">Topical Pain Relief Market</div>
                    </div>
                    <div className="w-full md:w-[49%] px-4 bg-white border rounded-md cursor-pointer transition duration-200 hover:border-blue-200 py-6">
                        <div className="text-xs text-gray-600">Healthcare</div>
                        <div className="text-md mt-2 text-[#0469AB] font-semibold">Topical Pain Relief Market</div>
                    </div>
                </div>
                <div className="flex items-center justify-center text-center cursor-pointer">
                    <div className='px-2 py-3 font-semibold mt-8 w-52  text-[#0469AB] bg-white hover:bg-[#0469AB] transition duration-200 hover:text-white text-xs border-[#0469AB] border rounded-full'>
                        Export Upcoming Reports
                    </div>
                </div>
            </div>

            <div className="md:px-32 px-4 py-8 text-[#0469AB] bg-white">
                <div className="text-2xl font-semibold text-center">Our Business is to Grow Yours.</div>
                <div className="mt-2 mb-4 text-xs text-center text-gray-600">Join 500+ expert analysts to supercharge your growth</div>
                <div className="flex items-center justify-center mt-4 text-center cursor-pointer">
                    <div className='px-2 py-3 font-semibold w-52  text-[#0469AB] bg-white hover:bg-[#0469AB] transition duration-200 hover:text-white text-xs border-[#0469AB] border rounded-full'>
                        About Future Market Insights
                    </div>
                </div>
                <div className="flex flex-col gap-8 py-4 md:flex-row">
                    <div className="md:w-1/2">
                        <div className='p-4 mb-4 border border-gray-200 rounded-md bg-gray-50'>
                            <div className="text-xl font-semibold">Events</div>
                            <div className="flex justify-between text-xs text-gray-500">
                                <div className="flex flex-col w-3/4 gap-4">
                                    <div className="text">PropTech Outsourcing: Unlocking Synergy Between Real Estate and IT Industry</div>
                                    <div className="cursor-pointer text-center px-2 py-3 font-semibold w-52  text-[#0469AB] bg-white hover:bg-[#0469AB] transition duration-200 hover:text-white text-xs border-[#0469AB] border rounded-full">View Events</div>
                                </div>
                                <div className="w-1/4 ml-8 transition duration-500 bg-gray-300 rounded-md hover:bg-blue-300 h-50"></div>
                            </div>
                        </div>
                        <div className='p-4 mb-4 border border-gray-200 rounded-md bg-gray-50'>
                            <div className="text-xl font-semibold">Events</div>
                            <div className="flex justify-between text-xs text-gray-500">
                                <div className="flex flex-col w-3/4 gap-4">
                                    <div className="text">PropTech Outsourcing: Unlocking Synergy Between Real Estate and IT Industry</div>
                                    <div className="cursor-pointer text-center px-2 py-3 font-semibold w-52  text-[#0469AB] bg-white hover:bg-[#0469AB] transition duration-200 hover:text-white text-xs border-[#0469AB] border rounded-full">View Events</div>
                                </div>
                                <div className="w-1/4 ml-8 transition duration-500 bg-gray-300 rounded-md hover:bg-blue-300 h-50"></div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className='p-4 mb-4 border border-gray-200 rounded-md bg-gray-50'>
                            <div className="text-xl font-semibold">Events</div>
                            <div className="flex justify-between text-xs text-gray-500">
                                <div className="flex flex-col w-3/4 gap-4">
                                    <div className="text">PropTech Outsourcing: Unlocking Synergy Between Real Estate and IT Industry</div>
                                    <div className="cursor-pointer text-center px-2 py-3 font-semibold w-52  text-[#0469AB] bg-white hover:bg-[#0469AB] transition duration-200 hover:text-white text-xs border-[#0469AB] border rounded-full">View Events</div>
                                </div>
                                <div className="w-1/4 ml-8 transition duration-500 bg-gray-300 rounded-md hover:bg-blue-300 h-50"></div>
                            </div>
                        </div>
                        <div className='p-4 mb-4 border border-gray-200 rounded-md bg-gray-50'>
                            <div className="text-xl font-semibold">Events</div>
                            <div className="flex justify-between text-xs text-gray-500">
                                <div className="flex flex-col w-3/4 gap-4">
                                    <div className="text">PropTech Outsourcing: Unlocking Synergy Between Real Estate and IT Industry</div>
                                    <div className="cursor-pointer text-center px-2 py-3 font-semibold w-52  text-[#0469AB] bg-white hover:bg-[#0469AB] transition duration-200 hover:text-white text-xs border-[#0469AB] border rounded-full">View Events</div>
                                </div>
                                <div className="w-1/4 ml-8 transition duration-500 bg-gray-300 rounded-md hover:bg-blue-300 h-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="aw">
                    <div className="icon">ICO</div>
                    <div className="awl">
                        <div className="test">Future Market Insights wins BRONZE STEVIE® in the 20th annual IBAs.</div>
                        <div className="test">Recognized for:</div>
                        <div className="test">Thought Leadership in Sustainable Packaging</div>
                    </div>
                </div> */}
            </div>
            {/* <div className="our-leadership">
                <div className="head">Our Leadership team</div>
                <div className="head">- Our team are craftspeople -</div>
                <div className="images">
                    <div className="image">IM1</div>
                    <div className="image">IM1</div>
                    <div className="image">IM1</div>
                    <div className="image">IM1</div>
                    <div className="image">IM1</div>
                    <div className="image">IM1</div>
                    <div className="image">IM1</div>
                </div>
                <div className="head">- Our team are craftspeople -</div>
                <div className="head">Connet Now</div>
            </div>
            <div className="trusted-by">
                <div className="header">Trusted By</div>
                <div className="icons">
                    <div className="icon">
                        ICO
                    </div>
                    <div className="icon">
                        ICO
                    </div>
                    <div className="icon">
                        ICO
                    </div>
                    <div className="icon">
                        ICO
                    </div>
                    <div className="icon">
                        ICO
                    </div>
                    <div className="icon">
                        ICO
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="fm">
                    <div className="fl"></div>
                    <div className="fl"></div>
                    <div className="fl"></div>
                </div>
                <div className="ref">
                    <div className="rl">
                        <div className="icons">
                            <div className="icon">
                                ICO
                            </div>
                            <div className="icon">
                                ICO
                            </div>
                            <div className="icon">
                                ICO
                            </div>
                            <div className="icon">
                                ICO
                            </div>
                        </div>
                    </div>
                    <div className="rr">Copyright © Future Market Insights, Inc.</div>
                </div>
            </div> */}
        </div>
    )
}
