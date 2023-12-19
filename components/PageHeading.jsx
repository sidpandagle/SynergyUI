import React from 'react'

export default function PageHeading({heading, subHeading, content}) {
    return (
        <section className="text-center">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-12">
                <div className="flex flex-col space-y-4 space-y-reverse">
                    {subHeading && <h1 className="order-last text-lg text-gray-700">{subHeading}</h1>}
                    {heading && <h2 className="text-5xl font-bold text-gray-900 sm:text-6xl">{heading}</h2>}
                </div>
                {/* {content && <p className="max-w-lg mx-auto mt-6 text-gray-600 text-base/relaxed">{content}</p>} */}
            </div>
        </section>
    )
}
