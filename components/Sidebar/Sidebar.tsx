import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'

import { cn } from '@/lib/utils'

import Logo from '@/components/Logo'

import { sidebarItems } from './constants'
import SidebarItem from './SidebarItem'

interface SidebarProps {
  className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <aside
      className={cn(
        'left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]',
        className
      )}
    >
      <Logo />

      <div className='flex flex-1 flex-col gap-y-2'>
        {sidebarItems.map(item => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </div>

      <div className='flex items-center justify-center p-4'>
        <ClerkLoading>
          <Loader className='size-5 animate-spin text-muted-foreground' />
        </ClerkLoading>

        <ClerkLoaded>
          <UserButton showName />
        </ClerkLoaded>
      </div>
    </aside>
  )
}

export default Sidebar
