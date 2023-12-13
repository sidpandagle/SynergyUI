'use client'
import React, { useState } from 'react'

export default function PreviewComponent({ codeData }) {
  const codeList = codeData.data;
  const [width, setWidth] = useState('100%')

  return (
    <div className='max-w-sm mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl'>
      {JSON.stringify(codeList)}
      <div className='pb-8 text-4xl font-extrabold text-gray-900'>{codeList[0].category} Components</div>
      <ul className="space-y-8 lg:space-y-12 ">
        {
          codeList.map((r, i) => {
            return (
              <li key={i}>
                <div id="component-1">
                  <div className="space-y-4">
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl"><a href="#component-1" className="relative inline-block group"><span aria-hidden="true" className="hidden group-hover:opacity-25 lg:absolute lg:inset-y-0 lg:-left-6 lg:block lg:opacity-0 lg:transition">#</span>{r.title}</a></h2>
                    <div className="lg:flex lg:items-end">
                      <div className="flex flex-wrap items-end gap-4"><button><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"><span className="text-xs font-medium">View</span>
                      </span></button>
                        <button className="hidden sm:block"><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"><span className="text-xs font-medium">Copy</span>
                        </span></button>
                        <button><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"><span className="text-xs font-medium">Light</span>
                        </span></button></div>
                      <div className="hidden lg:flex lg:flex-1 lg:items-end lg:justify-end lg:gap-4">
                        <button onClick={() => setWidth('480px')}><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"><span className="text-xs font-medium">Mobile</span></span></button>
                        <button onClick={() => setWidth('768px')}><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"><span className="text-xs font-medium">Tablet</span></span></button>
                        <button onClick={() => setWidth('100%')}><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"><span className="text-xs font-medium">Desktop</span></span></button></div>
                    </div>
                    <div className="relative">
                      <div>
                        <div className="rounded-lg bg-white bg-[linear-gradient(45deg,_rgb(249_250_251)_25%,_transparent_25%),_linear-gradient(-45deg,_rgb(249_250_251)_25%,_transparent_25%),_linear-gradient(45deg,_transparent_75%,_rgb(249_250_251)_75%),_linear-gradient(-45deg,_transparent_75%,_rgb(249_250_251)_75%)] bg-[length:_20px_20px] [background-position:_0_0,_0_10px,_10px_-10px,_-10px_0px] ">
                          {
                            <iframe className={`h-96 rounded-lg ring-2 ring-gray-900 lg:transition-all bg-white`} style={{ width: width }} loading="lazy" srcDoc={`
                                        
                                        
                                                                    <!DOCTYPE html>
                                                                    <html lang="en">
                                                                    <head>
                                                                        <meta charset="UTF-8" />
                                                                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                                                        <title>Document</title>
                                                                        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
                                                                    </head>
                                                                    <body>
                                                                  
                                                                  ${r.code}




                                                                    </body>
                                                                    </html>
                                    
                                    `} title="Popup Component" >

                            </iframe>
                          }
                        </div>
                        {/* <div className="relative" hidden="">
                                        <div className="absolute right-4 top-4">
                                            <label htmlFor="CodeType" className="sr-only">Code Type</label>
                                            <select id="CodeType" className="w-32 text-white bg-gray-800 border-gray-700 rounded-lg sm:text-sm">
                                                <option value="html">HTML</option>
                                                <option value="jsx">JSX</option>
                                                <option value="vue">Vue</option>
                                            </select>
                                        </div>
                                    </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}


