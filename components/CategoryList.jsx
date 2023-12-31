'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import AddCode from './AddCode'
export default function CategoryList({ categoryData }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
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
        <div className="px-8 pb-8 mx-auto bg-white md:px-36 lg:pb-12">
            <div className='flex justify-end mb-8 text-center ' >
                <div className='w-24 px-4 py-2 text-white bg-blue-500 rounded-sm cursor-pointer hover:bg-blue-600 hover:' onClick={() => setIsModalOpen(true)}>Add</div>
            </div>
            <ul className="space-y-8">
                <li className="space-y-4">
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {categoryData.data.map((r, i) => {
                            return (
                                r.code_count &&
                                <li key={i}>
                                    <Link href={`/components/${r.id}`}>
                                        <div className={`group relative block h-full`}>
                                            {/* <div className={`rounded-lg skew-x-2 skew-y-2 ${colors[i % 17].background} ${colors[i % 17].color} transition group-hover:-translate-y-2 group-hover:-translate-x-2`}> */}
                                            <div className={`rounded-lg -skew-x-2  skew-y--skew-x-2  ${colors[i % 17].background} ${colors[i % 17].color} group-hover:-translate-y-1 group-hover:-translate-x-1 transition group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]`}>
                                                <div className="p-4 sm:p-6">
                                                    <h2 className="mt-4 font-bold sm:text-xl">{r.category}</h2>
                                                    <p className="mt-1 text-md">{r.code_count ? r.code_count : 0} Components</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </li>
            </ul>
            <AddCode isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} categoryData={categoryData} />
        </div>
    )
}