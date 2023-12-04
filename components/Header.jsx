
import React from 'react'

export default function Header() {
    return (
        <header class="sticky inset-x-0 top-0 z-50 border-b border-gray-200 bg-white">
            <div class="mx-auto max-w-screen-xl px-4 relative flex h-16 items-center justify-between gap-4 sm:gap-8">
                <div class="flex flex-1 items-center gap-4">
                    <a href="/">
                        <div class="inline-flex gap-1.5 text-sm">
                            <span class="font-medium text-gray-900">SynergyUI</span>
                            <span aria-hidden="true" role="img">🚀</span>
                            </div>
                            </a><nav aria-label="Global" class="hidden lg:block lg:flex-1"><ul class="gap-4 flex">
                                <li class="">
                                    <a href="/components/application-ui">
                                        <div class="block text-xs font-medium text-gray-900 hover:opacity-75">Application UI</div></a></li><li class=""><a href="/components/marketing"><div class="block text-xs font-medium text-gray-900 hover:opacity-75">Marketing</div></a></li><li class=""><a href="/components/ecommerce"><div class="block text-xs font-medium text-gray-900 hover:opacity-75">eCommerce</div></a></li><li class=""><a href="/blog"><div class="block text-xs font-medium text-gray-900 hover:opacity-75">Blog</div></a></li><li class="lg:ms-auto"><a target="_blank" rel="noreferrer" href="https://js.SynergyUI.dev"></a></li></ul></nav></div><div class="flex items-center justify-end gap-2 sm:gap-4"><div class="relative flex h-16 items-center"><form role="search" class="min-w-[120px] sm:min-w-[240px]"><label for="SiteSearch" class="sr-only">Search</label><input type="text" placeholder="Search..." id="SiteSearch" class="w-full rounded-md border-gray-200 text-sm" value="" /><button tabindex="-1" class="sr-only">Submit</button></form></div><a href="https://github.com/markmead/SynergyUI" rel="noreferrer" target="_blank" class="text-gray-900 hover:opacity-75"><span class="sr-only"> GitHub </span><svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd"></path></svg></a><div class="flex items-center lg:hidden"><button class="text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg><span class="sr-only">Toggle menu</span></button></div></div></div></header>
    )
}