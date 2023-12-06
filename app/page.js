import ComponentList from '@/components/ComponentList'
import PageHeading from '@/components/PageHeading'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-white'>
      <PageHeading heading='HomePage' subHeading='Free Tailwind CSS Application UI Components' content='Working on an CMS, eCommerce platform or admin hub? SynergyUI has a growing range of application UI Tailwind CSS components, that will help you build an accessible, responsive application for your next project.' />
      <ComponentList />
    </div>
  )
}
