import Image from 'next/image'

import { useExitModal } from '@/store/use-exit-modal'
import { InfinityIcon, X } from 'lucide-react'

import { Progress } from '@/components/ui/Progress'

interface HeaderProps {
  hearts: number
  percentage: number
  hasActiveSubscription: boolean
}

const Header = ({ hearts, percentage, hasActiveSubscription }: HeaderProps) => {
  const { open } = useExitModal()

  return (
    <header className='mx-auto flex w-full max-w-[1140px] items-center justify-between gap-x-12 px-10 pt-[20px] lg:pt-[50px]'>
      <X
        className='size-6 cursor-pointer text-muted-foreground transition hover:opacity-95'
        onClick={open}
      />

      <Progress value={percentage} className='w-full' />

      <div className='mb-2 flex items-center font-bold text-rose-500'>
        <Image
          src='/heart.svg'
          height={28}
          width={28}
          alt='Heart'
          className='mr-2'
        />

        {hasActiveSubscription ? (
          <InfinityIcon className='size-4 shrink-0 stroke-[3]' />
        ) : (
          <span className='-mb-1'>{hearts}</span>
        )}
      </div>
    </header>
  )
}

export default Header
