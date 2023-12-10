import PageHeading from '@/components/PageHeading'
import ComponentList from '@/components/ComponentList';
import React from 'react'

export default function Category({ params }) {
    const { category } = params;
    return (
        <div className="py-8 bg-white">
            <PageHeading heading='Category' subHeading='Free Tailwind CSS Components' content='Working on an CMS, eCommerce platform or admin hub? SynergyUI has a growing range of Tailwind CSS components, that will help you build an accessible, responsive application for your next project.'/>
            <ComponentList category={category} />
        </div>
    )
}
