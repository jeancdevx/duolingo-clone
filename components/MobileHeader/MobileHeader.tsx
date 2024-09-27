import MobileSidebar from '@/components/MobileSidebar'

const MobileHeader = () => {
  return (
    <nav className='fixed inset-x-0 top-1 z-50 mx-auto flex h-[50px] w-[96%] items-center rounded-md bg-green-500 px-3 lg:hidden'>
      <MobileSidebar />

      <div className='flex flex-1 justify-center'>
        <h1 className='text-lg font-bold text-white'>Learn</h1>
      </div>
    </nav>
  )
}

export default MobileHeader
