import PageHeading from '@/components/PageHeading'
import React from 'react'

export default function Category({ params }) {
    const { category } = params;
    return (
        <div>
            <PageHeading heading={category} subHeading='Free Tailwind CSS Application UI Components' content='Working on an CMS, eCommerce platform or admin hub? SynergyUI has a growing range of application UI Tailwind CSS components, that will help you build an accessible, responsive application for your next project.' />
        </div>
    )
}
