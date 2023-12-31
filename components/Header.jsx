
import React from 'react'

export default function Header() {
    return (
        <header className="sticky inset-x-0 top-0 z-50 bg-white border-b border-gray-200">
            <div className="relative flex items-center justify-between h-16 max-w-screen-xl gap-4 px-4 mx-auto sm:gap-8">
                <div className="flex items-center flex-1 gap-4">
                    <a href="/">
                        <div className="inline-flex gap-1.5 text-sm">
                            <span className="font-medium text-gray-900">SynergyUI</span>
                            {/* <span aria-hidden="true" role="img">🚀</span> */}
                        </div>
                    </a>
                        </div><div className="flex items-center justify-end gap-2 sm:gap-4"><div className="relative flex items-center h-16"><form role="search" className="min-w-[120px] sm:min-w-[240px]"><label htmlFor="SiteSearch" className="sr-only">Search</label><input type="text" placeholder="Search..." id="SiteSearch" className="w-full text-sm border-gray-200 rounded-md" /><button tabIndex="-1" className="sr-only">Submit</button></form></div><a href="https://github.com/markmead/SynergyUI" rel="noreferrer" target="_blank" className="text-gray-900 hover:opacity-75"><span className="sr-only"> GitHub </span><svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path></svg></a><div className="flex items-center lg:hidden"><button className="text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg><span className="sr-only">Toggle menu</span></button></div></div></div></header>
    )
}
