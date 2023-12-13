import { apiURL } from '@/app/constants';
import PageHeading from '@/components/PageHeading'
import PreviewComponent from '@/components/PreviewComponent';
import React from 'react'


async function getCodesByCategoryId(categoryId) {
    const res = await fetch(`${apiURL}/code/category/${categoryId}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

export default async function Category({ params }) {
    const { categoryId } = params;
    const codeData = await getCodesByCategoryId(categoryId);
    return (
        <div className="py-8 bg-white">
            <PreviewComponent codeData={codeData}/>
        </div>
    )
}
