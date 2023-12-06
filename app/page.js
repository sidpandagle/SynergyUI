import ComponentList from '@/components/ComponentList'
import PageHeading from '@/components/PageHeading'
import Image from 'next/image'
import Link from 'next/link'

async function getCategoryData() {
  const res = await fetch('https://synergyapi.178765.xyz/category/')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  // console.log(res.json())
  return res.json()
}

export default async function Home() {
  const categoryData = await getCategoryData();
  return (
    <div className='text-gray-900 bg-white'>
      <PageHeading heading='HomePage' subHeading='Free Tailwind CSS Application UI Components' content='Working on an CMS, eCommerce platform or admin hub? SynergyUI has a growing range of application UI Tailwind CSS components, that will help you build an accessible, responsive application for your next project.' />
      <ComponentList categoryData={categoryData}/>
    </div>
  )
}
// ['Accordion', 'Alerts', 'Avatar', 'Badge', 'Banner', 'Bottom Navigation', 'Breadcrumb', 'Buttons', 'Button Group', 'Card', 'Carousel', 'Device Mockups', 'Drawer', 'Dropdowns', 'Footer', 'Forms', 'Gallery', 'Indicators', 'Jumbotron', 'KBD', 'List Group', 'Mega menu', 'Modal', 'Navbar', 'Pagination', 'Popover', 'Progress', 'Rating', 'Sidebar', 'Skeleton', 'Speed Dial', 'Spinner', 'Stepper', 'Tables', 'Tabs', 'Timeline', 'Toast', 'Tooltips', 'Typography', 'Video', 'Input Field', 'File Input', 'Search Input', 'Number Input', 'Phone Input', 'Select', 'Textarea', 'Checkbox', 'Radio', 'Toggle', 'Range', 'Floating Label']
