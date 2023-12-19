import { apiURL } from '@/app/constants';
import ComponentList from '@/components/ComponentList';
import PageHeading from '@/components/PageHeading'
import PreviewComponent from '@/components/PreviewComponent';
import React from 'react'


async function getCodesByCategoryId(categoryId) {
    const res = await fetch(`${apiURL}/category/${categoryId}`)
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
        {/* {JSON.stringify(codeData)} */}
          <PageHeading heading='Category' subHeading='Free Tailwind CSS Components' content='Working on an CMS, eCommerce platform or admin hub? SynergyUI has a growing range of Tailwind CSS components, that will help you build an accessible, responsive application for your next project.'/>
          <ComponentList category={codeData.title} />
      </div>
    )
}
