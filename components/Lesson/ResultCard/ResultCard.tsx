import Image from 'next/image'

import { InfinityIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

interface ResultCardProps {
  variant: 'POINTS' | 'HEARTS'
  value: number
}

const ResultCard = ({ variant, value }: ResultCardProps) => {
  const imageSrc = variant === 'POINTS' ? '/points.svg' : '/heart.svg'

  return (
    <div
      className={cn(
        'w-full rounded-2xl border-2',
        variant === 'POINTS' && 'border-orange-400 bg-orange-400',
        variant === 'HEARTS' && 'border-rose-500 bg-rose-500'
      )}
    >
      <div
        className={cn(
          'rounded-t-xl p-1.5 text-center text-xs font-bold uppercase text-white',
          variant === 'POINTS' && 'bg-orange-400',
          variant === 'HEARTS' && 'bg-rose-500'
        )}
      >
        {variant === 'HEARTS' ? 'Hears Left' : 'Total XP'}
      </div>

      <div
        className={cn(
          'flex items-center justify-center rounded-2xl bg-white p-6 text-lg font-bold',
          variant === 'POINTS' && 'text-orange-400',
          variant === 'HEARTS' && 'text-rose-500'
        )}
      >
        <Image
          src={imageSrc}
          alt={variant}
          height={30}
          width={30}
          className='mr-1.5'
        />

        {value === Infinity ? (
          <InfinityIcon className='size-4 shrink-0 stroke-[3]' />
        ) : (
          value
        )}
      </div>
    </div>
  )
}

export default ResultCard
