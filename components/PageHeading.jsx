import React from 'react'

export default function PageHeading({heading, subHeading, content}) {
    return (
        <section className="text-center">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
                <div className="flex flex-col space-y-4 space-y-reverse">
                    {subHeading && <h1 className="order-last text-lg text-gray-700">{subHeading}</h1>}
                    {heading && <h2 className="text-5xl font-bold text-gray-900 sm:text-6xl">{heading}</h2>}
                </div>
                {content && <p className="mx-auto mt-6 max-w-lg text-base/relaxed text-gray-600">{content}</p>}
            </div>
        </section>
    )
}
