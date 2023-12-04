import React from 'react'

export default function PageHeading({heading, subHeading, content}) {
    return (
        <section class="bg-white text-center">
            <div class="mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
                <div class="flex flex-col space-y-4 space-y-reverse">
                    <h1 class="order-last text-lg text-gray-700">{subHeading}</h1>
                    <h2 class="text-5xl font-bold text-gray-900 sm:text-6xl">{heading}</h2>
                </div>
                <p class="mx-auto mt-6 max-w-lg text-base/relaxed text-gray-600">{content}</p>
            </div>
        </section>
    )
}
