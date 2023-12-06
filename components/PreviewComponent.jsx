import React from 'react'

export default function PreviewComponent() {
    return (

        <div className='mx-auto xl:max-w-[1348px]'>
            <div className='text-gray-900 text-4xl font-extrabold pb-8'>Alert Components</div>
            <ul className="space-y-8 lg:space-y-12 ">
                <li>
                    <div id="component-1">
                        <div className="space-y-4">
                            <h2 className="text-lg font-bold text-gray-900 sm:text-xl"><a href="#component-1" className="group relative inline-block"><span aria-hidden="true" className="hidden group-hover:opacity-25 lg:absolute lg:inset-y-0 lg:-left-6 lg:block lg:opacity-0 lg:transition">#</span>Popup</a></h2>
                            <div className="lg:flex lg:items-end">
                                <div className="flex flex-wrap items-end gap-4"><button><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"><span aria-hidden="true" role="img" className="text-sm">👀</span><span className="text-xs font-medium">View</span></span></button><button className="hidden sm:block"><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"><span aria-hidden="true" role="img" className="text-sm">📋</span><span className="text-xs font-medium">Copy</span></span></button><button><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"><span aria-hidden="true" role="img" className="text-sm">🌞</span><span className="text-xs font-medium">Light</span></span></button><button><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"><span aria-hidden="true" role="img" className="text-sm">👉</span><span className="text-xs font-medium">LTR</span></span></button></div>
                                <div className="hidden lg:flex lg:flex-1 lg:items-end lg:justify-end lg:gap-4"><button><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"><span aria-hidden="true" role="img" className="text-sm">📱</span><span className="text-xs font-medium">Mobile</span></span></button><button><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"><span aria-hidden="true" role="img" className="text-sm">🐛</span><span className="text-xs font-medium">Small</span></span></button><button><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"><span aria-hidden="true" role="img" className="text-sm">🦭</span><span className="text-xs font-medium">Medium</span></span></button><button><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"><span aria-hidden="true" role="img" className="text-sm">🐴</span><span className="text-xs font-medium">Large</span></span></button><button><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 text-white bg-gray-900"><span aria-hidden="true" role="img" className="text-sm">🌕</span><span className="text-xs font-medium">Full</span></span></button></div>
                            </div>
                            <div className="relative">
                                <div>
                                    <div className="rounded-lg bg-white bg-[linear-gradient(45deg,_rgb(249_250_251)_25%,_transparent_25%),_linear-gradient(-45deg,_rgb(249_250_251)_25%,_transparent_25%),_linear-gradient(45deg,_transparent_75%,_rgb(249_250_251)_75%),_linear-gradient(-45deg,_transparent_75%,_rgb(249_250_251)_75%)] bg-[length:_20px_20px] [background-position:_0_0,_0_10px,_10px_-10px,_-10px_0px] ">
                                        <iframe className="h-[400px] w-full rounded-lg ring-2 ring-gray-900 lg:h-[600px] lg:transition-all bg-white" loading="lazy" srcdoc="
                           <html className=&quot;relative&quot; dir=&quot;ltr&quot;>
                           <head>
                           <link rel=&quot;stylesheet&quot; href=&quot;/components.css&quot;>
                           <link rel=&quot;preconnect&quot; href=&quot;https://fonts.googleapis.com&quot;>
                           <link rel=&quot;preconnect&quot; href=&quot;https://fonts.gstatic.com&quot; crossorigin>
                           <link href=&quot;https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap&quot; rel=&quot;stylesheet&quot;>
                           <script src=&quot;/iframe.js&quot;></script>
                           </head>
                           <body className=&quot;p-6 max-w-md mx-auto font-sans antialiased&quot;>
                           <div role=&quot;alert&quot; className=&quot;rounded-xl border border-gray-100 bg-white p-4&quot;>
                           <div className=&quot;flex items-start gap-4&quot;>
                           <span className=&quot;text-green-600&quot;>
                           <svg
                           xmlns=&quot;http://www.w3.org/2000/svg&quot;
                           fill=&quot;none&quot;
                           viewBox=&quot;0 0 24 24&quot;
                           stroke-width=&quot;1.5&quot;
                           stroke=&quot;currentColor&quot;
                           className=&quot;h-6 w-6&quot;
                           >
                           <path
                           stroke-linecap=&quot;round&quot;
                           stroke-linejoin=&quot;round&quot;
                           d=&quot;M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z&quot;
                           />
                           </svg>
                           </span>
                           <div className=&quot;flex-1&quot;>
                           <strong className=&quot;block font-medium text-gray-900&quot;> Changes saved </strong>
                           <p className=&quot;mt-1 text-sm text-gray-700&quot;>Your product changes have been saved.</p>
                           </div>
                           <button className=&quot;text-gray-500 transition hover:text-gray-600&quot;>
                           <span className=&quot;sr-only&quot;>Dismiss popup</span>
                           <svg
                           xmlns=&quot;http://www.w3.org/2000/svg&quot;
                           fill=&quot;none&quot;
                           viewBox=&quot;0 0 24 24&quot;
                           stroke-width=&quot;1.5&quot;
                           stroke=&quot;currentColor&quot;
                           className=&quot;h-6 w-6&quot;
                           >
                           <path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; d=&quot;M6 18L18 6M6 6l12 12&quot; />
                           </svg>
                           </button>
                           </div>
                           </div>
                           </body>
                           </html>
                           " title="Popup Component" ></iframe>
                                    </div>
                                    <div className="relative" hidden="">
                                        <div className="absolute right-4 top-4">
                                            <label for="CodeType" className="sr-only">Code Type</label>
                                            <select id="CodeType" className="w-32 rounded-lg border-gray-700 bg-gray-800 text-white sm:text-sm">
                                                <option value="html">HTML</option>
                                                <option value="jsx">JSX</option>
                                                <option value="vue">Vue</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
