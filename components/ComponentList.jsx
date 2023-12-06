import React from 'react'
import Link from 'next/link'
export default function ComponentList({ categoryData }) {
    const colors = [
        {
            color: 'text-white',
            background: 'bg-[#753FFE]'
        },
        {
            color: 'text-white',
            background: 'bg-[#FF9B1E]'
        },
        {
            color: 'text-white',
            background: 'bg-[#F425A7]'
        },
        {
            color: 'text-white',
            background: 'bg-[#1EA5FF]'
        },
        {
            color: 'text-white',
            background: 'bg-[#3498db]'
        },
        {
            color: 'text-white',
            background: 'bg-[#2ecc71]'
        },
        {
            color: 'text-white',
            background: 'bg-[#e74c3c]'
        },
        {
            color: 'text-white',
            background: 'bg-[#1abc9c]'
        },
        {
            color: 'text-white',
            background: 'bg-[#9b59b6]'
        },
        {
            color: 'text-white',
            background: 'bg-[#34495e]'
        },
        {
            color: 'text-white',
            background: 'bg-[#27ae60]'
        },
        {
            color: 'text-white',
            background: 'bg-[#2980b9]'
        },
        {
            color: 'text-white',
            background: 'bg-[#8e44ad]'
        },
        {
            color: 'text-white',
            background: 'bg-[#7f8c8d]'
        },
        {
            color: 'text-white',
            background: 'bg-[#16a085]'
        },
        {
            color: 'text-white',
            background: 'bg-[#f39c12]'
        },
        {
            color: 'text-white',
            background: 'bg-[#3498db]'
        },
    ]
    return (
        <div className="bg-white mx-auto px-8 md:px-36 pb-8 lg:pb-12">
            <ul className="space-y-8">
                <li className="space-y-4">
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {categoryData.data.map((r, i) => {
                            return (
                                <li key={i}>
                                    <Link href="/components/alerts">
                                        <div className={`group relative block h-full   before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900`}>
                                            <div className={`rounded-lg border-2 border-gray-900 ${colors[i % 17].background} ${colors[i % 17].color} transition group-hover:-translate-y-2 group-hover:-translate-x-2`}>
                                                <div className="p-4 sm:p-6">
                                                    <h2 className="mt-4  sm:text-xl  font-bold">{r.title}</h2>
                                                    <p className="mt-1 text-md">4 Components</p>
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
