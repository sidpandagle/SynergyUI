'use client'
import React, { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function ComponentList({category}) {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  const [width, setWidth] = useState('100%')

  const [copiedCode, setCopiedCode] = useState(false);
  const [viewCode, setViewCode] = useState(false);

  const copyCode = (htmlCode) => {
    navigator.clipboard.writeText(htmlCode);
    setCopiedCode(true)
    setTimeout(() => {
      setCopiedCode(false)
    }, 2000)
  }

  
  useEffect(() => {
    function handleResize() {
      if(getWindowDimensions().width < 1022){
        setWidth('100%')
      }
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const componentList = [
    {
      name: 'Header',
      htmlCode: `<header>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="text-center sm:text-left">
        <h1 class="text-2xl font-bold text-gray-50 dark:text-red-500 sm:text-3xl">Welcome Back, Barry!</h1>

        <p class="mt-1.5 text-sm text-gray-500">Let's write a new blog post! 🎉</p>
      </div>

      <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
        <button
          class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <span class="text-sm font-medium"> View Website </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>

        <button
          class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
          type="button"
        >
          Create Post
        </button>
      </div>
    </div>
  </div>
</header>`
    }
  ]

  return (
    <div className='max-w-sm mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl'>
      <div className='pb-8 text-4xl font-extrabold text-gray-900 '>{category} Components</div>
      <ul className="space-y-8 lg:space-y-12 ">
        {
          componentList.map((r, i) => {
            return (
              <li key={i}>
                <div id={`component-${i}`}>
                  <div className="space-y-4">
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl"><a href="#component-1" className="relative inline-block group"><span aria-hidden="true" className="hidden group-hover:opacity-25 lg:absolute lg:inset-y-0 lg:-left-6 lg:block lg:opacity-0 lg:transition">#</span>{r.name}</a></h2>
                    <div className="lg:flex lg:items-end">
                      <div className="flex flex-wrap items-end gap-4"><button onClick={() => setViewCode(!viewCode)}><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"><span className="text-xs font-medium">View</span>
                      </span></button>
                        <button onClick={() => copyCode(r.htmlCode)} className="hidden sm:block"><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"><span className="text-xs font-medium">{copiedCode ? 'Copied' : 'Copy'}</span>
                        </span></button>
                      </div>
                      <div className="hidden lg:flex lg:flex-1 lg:items-end lg:justify-end lg:gap-4">
                        <button onClick={() => setWidth('30%')}><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"><span className="text-xs font-medium">Mobile</span></span></button>
                        <button onClick={() => setWidth('50%')}><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 bg-white text-gray-900 hover:bg-gray-900 hover:text-white"><span className="text-xs font-medium">Tablet</span></span></button>
                        <button onClick={() => setWidth('100%')}><span className="inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"><span className="text-xs font-medium">Desktop</span></span></button></div>
                    </div>
                    <div className="relative ">
                      <div className="rounded-lg  bg-white bg-[linear-gradient(45deg,_rgb(249_250_251)_25%,_transparent_25%),_linear-gradient(-45deg,_rgb(249_250_251)_25%,_transparent_25%),_linear-gradient(45deg,_transparent_75%,_rgb(249_250_251)_75%),_linear-gradient(-45deg,_transparent_75%,_rgb(249_250_251)_75%)] bg-[length:_20px_20px] [background-position:_0_0,_0_10px,_10px_-10px,_-10px_0px] ">
                        {
                          !viewCode &&
                          <iframe className={`h-96 w-96 lg:w-full rounded-lg ring-2 ring-gray-900 lg:transition-all bg-white `} style={{ width: width }} loading="lazy" srcDoc={`
                                                                    <!DOCTYPE html >
                                                                    <html lang="en">
                                                                    <head>
                                                                        <meta charset="UTF-8" />
                                                                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                                                        <title>Document</title>
                                                                        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
                                                                        <link type="text/css" rel="Stylesheet" href="app/globals.css" />
                                                                        </head>
                                                                    <body>
                                                                    ${r.htmlCode}
                                                                    </body>
                                                                    </html>
                                    
                                    `} title="Popup Component" >

                          </iframe>
                        }
                        {
                          viewCode &&
                          <div className={`h-96  lg:w-[100%] rounded-lg ring-2 ring-gray-900 lg:transition-all bg-white overflow-y-scroll`} >
                            <SyntaxHighlighter language="htmlbars" style={atomOneDark}>
                              {r.htmlCode}
                            </SyntaxHighlighter>
                          </div>
                        }
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


