import CategoryList from '@/components/CategoryList'
import PageHeading from '@/components/PageHeading'
import Image from 'next/image'
import Link from 'next/link'
import { apiURL } from './constants'
export const dynamic = 'force-dynamic'

async function getCategoryData() {
  const res = await fetch(`${apiURL}/category/code_count`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  // console.log(res.json())
  return res.json()
}

export default async function Home() {
  const categoryData = await getCategoryData();
  return (
    <div className='min-h-screen text-gray-900 bg-white'>
      <PageHeading heading='HomePage' subHeading='Free Tailwind CSS Components' content='Working on an CMS, eCommerce platform or admin hub? SynergyUI has a growing range of Tailwind CSS components, that will help you build an accessible, responsive application for your next project.' />
       <CategoryList categoryData={categoryData}/>
    </div>
  )
}