import React from 'react'
import Link from 'next/link'
export default function ComponentList() {
    return (
        <div className="bg-white mx-auto px-8 md:px-36 pb-8 lg:pb-12">
            <ul className="space-y-8">
                <li className="space-y-4">
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {[...new Array(200)].map((r, i) => {
                            return (
                                <li key={i}>
                                    <Link href="/components/alerts">
                                        <div className="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                            <div className="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                                <div className="p-4 sm:p-6">
                                                    <div className="flex items-start justify-between"><span aria-hidden="true" role="img" className="text-lg sm:text-xl">📣</span></div>
                                                    <h2 className="mt-4 font-medium text-gray-900 sm:text-lg">Alerts</h2>
                                                    <p className="mt-1 text-xs text-gray-700">4 Components</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )

                        })
                        }
                    </ul>
                </li>
            </ul>
        </div>
    )
}
