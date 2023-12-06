import PageHeading from '@/components/PageHeading'
import PreviewComponent from '@/components/PreviewComponent';
import React from 'react'

export default function Category({ params }) {
    const { category } = params;
    return (
        <div className="bg-white py-8">
            <PreviewComponent />
        </div>
    )
}
