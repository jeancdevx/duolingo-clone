'use client'

import { useTransition } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Check } from 'lucide-react'
import { toast } from 'sonner'

import { cn } from '@/lib/utils'
import { upsertUserProgress } from '@/actions/user-progress'

interface CardProps {
  id: number
  title: string
  imageSrc: string
  active?: boolean
  activeCourseId?: number | null
}

const Card = ({ id, title, imageSrc, active, activeCourseId }: CardProps) => {
  const router = useRouter()
  const [pending, startTransition] = useTransition()

  const onClick = (id: number) => {
    if (pending) return

    if (id === activeCourseId) {
      return router.push('/learn')
    }

    startTransition(() => {
      upsertUserProgress(id).catch(() => toast.error('Something went wrong.'))
    })
  }

  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        'flex h-full min-h-[217px] min-w-[200px] cursor-pointer flex-col items-center justify-between rounded-xl border-2 border-b-4 p-3 pb-6 duration-200 hover:bg-black/5 active:border-b-2',
        pending && 'pointer-events-none opacity-50'
      )}
    >
      <div className='flex min-h-[24px] w-full items-center justify-end'>
        {active && (
          <div className='flex items-center justify-center rounded-full bg-green-600 p-1.5'>
            <Check className='size-4 stroke-[4] text-white' />
          </div>
        )}
      </div>

      <Image
        src={imageSrc}
        alt={title}
        width={93.33}
        height={70}
        className='rounded-lg border object-cover drop-shadow-md'
      />

      <h2 className='mt-3 text-center font-bold text-neutral-700'>{title}</h2>
    </div>
  )
}

export default Card
