'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/Button'

interface SidebarItemProps {
  label: string
  iconSrc: string
  href: string
}

const SidebarItem = ({ label, iconSrc, href }: SidebarItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Button
      variant={isActive ? 'sidebarOutline' : 'sidebar'}
      className='h-[52px] w-full justify-start'
      asChild
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          className='mr-4'
          height={28}
          width={28}
        />
        {label}
      </Link>
    </Button>
  )
}

export default SidebarItem
