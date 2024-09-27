import { Menu } from 'lucide-react'

import Sidebar from '@/components/Sidebar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className='size-6 text-white' />
      </SheetTrigger>

      <SheetContent className='z-[100] p-0' side='left'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
