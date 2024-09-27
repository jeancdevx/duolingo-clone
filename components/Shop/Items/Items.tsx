'use client'

import { useTransition } from 'react'

import Image from 'next/image'

import { Loader } from 'lucide-react'
import { toast } from 'sonner'

import { POINTS_TO_REFILL_HEARTS } from '@/constants'

import { refillHearts } from '@/actions/user-progress'
import { createStripeUrl } from '@/actions/user-subscription'

import { Button } from '@/components/ui/Button'

interface ItemsProps {
  hearts: number
  points: number
  hasActiveSubscription: boolean
}

const Items = ({ hearts, points, hasActiveSubscription }: ItemsProps) => {
  const [pending, startTransition] = useTransition()

  const onRefillHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFILL_HEARTS) return

    startTransition(() => {
      refillHearts().catch(() => toast.error('Failed to refill hearts.'))
    })
  }

  const onUpgrade = () => {
    startTransition(() => {
      createStripeUrl()
        .then(({ data }) => {
          if (data) window.location.href = data
        })
        .catch(error => {
          toast.error('Failed to create stripe session.')
          console.error(error)
        })
    })
  }

  return (
    <ul className='w-full'>
      <div className='flex w-full items-center gap-x-4 border-t-2 p-4'>
        <Image src='/heart.svg' alt='Heart' height={48} width={48} />
        <div className='flex-1'>
          <p className='text-base font-extrabold text-neutral-700 lg:text-lg'>
            Refill hears
          </p>
          <p className='text-xs text-muted-foreground'>
            Get 5 more hearts to keep playing.
          </p>
        </div>

        <Button
          disabled={pending || hearts === 5 || points < POINTS_TO_REFILL_HEARTS}
          onClick={onRefillHearts}
        >
          {hearts === 5 ? (
            'full'
          ) : (
            <div className='flex items-center'>
              {pending ? (
                <Loader className='size-4 animate-spin' />
              ) : (
                <>
                  <Image
                    src='/points.svg'
                    alt='Points'
                    height={20}
                    width={20}
                  />
                  <span className='ml-1'>{POINTS_TO_REFILL_HEARTS}</span>
                </>
              )}
            </div>
          )}
        </Button>
      </div>

      <div className='flex w-full items-center gap-x-4 border-t-2 p-4 pt-8'>
        <Image src='/unlimited.svg' alt='Unlimited' height={48} width={48} />
        <div className='flex-1'>
          <p className='text-base font-extrabold text-neutral-700 lg:text-lg'>
            Unlimited hearts
          </p>
          <p className='text-xs text-muted-foreground'>
            Get unlimited hearts for 1 month.
          </p>
        </div>

        <Button disabled={pending} onClick={onUpgrade}>
          {hasActiveSubscription ? 'settings' : 'upgrade'}
        </Button>
      </div>
    </ul>
  )
}

export default Items
