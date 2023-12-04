import React from 'react'
import Link from 'next/link'
export default function ComponentList() {
    return (
        <div class="bg-white mx-auto px-36 pb-8 lg:pb-12">
            <ul class="space-y-8">
                <li class="space-y-4">
                    <h2 class="text-lg font-bold text-gray-900 sm:text-xl">Application UI</h2>
                    <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <li>
                            <Link href="/components/application-ui/alerts">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">📣</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Alerts</h2>
                                            <p class="mt-1 text-xs text-gray-700">4 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/badges">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">🥁</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Badges</h2>
                                            <p class="mt-1 text-xs text-gray-700">5 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/breadcrumbs">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">🍞</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Breadcrumbs</h2>
                                            <p class="mt-1 text-xs text-gray-700">2 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/button-groups">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">👆</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Button Groups</h2>
                                            <p class="mt-1 text-xs text-gray-700">5 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/details-list">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">🪪</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Details Lists</h2>
                                            <p class="mt-1 text-xs text-gray-700">4 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/dividers">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">🗡️</span><span class="-me-1.5 -mt-1.5 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium capitalize sm:-me-3 sm:-mt-3 bg-green-100 text-green-700 false">new</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Dividers</h2>
                                            <p class="mt-1 text-xs text-gray-700">4 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/dropdown">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">💧</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Dropdowns</h2>
                                            <p class="mt-1 text-xs text-gray-700">3 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/error-pages">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">🥲</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Error Pages</h2>
                                            <p class="mt-1 text-xs text-gray-700">4 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/grids">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">📦</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Grids</h2>
                                            <p class="mt-1 text-xs text-gray-700">12 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/headers">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">🐤</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Header</h2>
                                            <p class="mt-1 text-xs text-gray-700">4 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/inputs">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">🔌</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Inputs</h2>
                                            <p class="mt-1 text-xs text-gray-700">7 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/login-forms">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">🪧</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Auth Forms</h2>
                                            <p class="mt-1 text-xs text-gray-700">2 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/media">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">🌆</span><span class="-me-1.5 -mt-1.5 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium capitalize sm:-me-3 sm:-mt-3 bg-green-100 text-green-700 false">new</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Media</h2>
                                            <p class="mt-1 text-xs text-gray-700">8 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/pagination">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">🔢</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Pagination</h2>
                                            <p class="mt-1 text-xs text-gray-700">4 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/progress">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">💈</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Progress</h2>
                                            <p class="mt-1 text-xs text-gray-700">4 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/radio-groups">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">📻</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Radio Groups</h2>
                                            <p class="mt-1 text-xs text-gray-700">6 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/selects">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">📣</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Selects</h2>
                                            <p class="mt-1 text-xs text-gray-700">3 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/side-menu">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">🎮</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Side Menu</h2>
                                            <p class="mt-1 text-xs text-gray-700">2 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/stats">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">📊</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Stats</h2>
                                            <p class="mt-1 text-xs text-gray-700">6 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/steps">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">🪜</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Steps</h2>
                                            <p class="mt-1 text-xs text-gray-700">6 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/tables">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">🍽</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Tables</h2>
                                            <p class="mt-1 text-xs text-gray-700">7 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/tabs">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">🗂</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Tabs</h2>
                                            <p class="mt-1 text-xs text-gray-700">5 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/textareas">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">🔌</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Textareas</h2>
                                            <p class="mt-1 text-xs text-gray-700">3 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/toggles">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">🎚</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Toggles</h2>
                                            <p class="mt-1 text-xs text-gray-700">4 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/application-ui/vertical-menu">
                                <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
                                    <div class="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                                        <div class="p-4 sm:p-6">
                                            <div class="flex items-start justify-between"><span aria-hidden="true" role="img" class="text-lg sm:text-xl">🍟</span></div>
                                            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Vertical Menu</h2>
                                            <p class="mt-1 text-xs text-gray-700">9 Components</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
