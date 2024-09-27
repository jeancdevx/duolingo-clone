import Image from 'next/image'
import Link from 'next/link'

import { getUserSubscription } from '@/db/queries'

import { Button } from '@/components/ui/Button'

const Promo = async () => {
  const userSubscriptionData = getUserSubscription()

  const [userSubscription] = await Promise.all([userSubscriptionData])

  if (userSubscription?.isActive) return null

  return (
    <div className='space-y-4 rounded-xl border-2 p-4'>
      <div className='space-y-2'>
        <div className='flex items-center gap-x-2'>
          <Image src='/unlimited.svg' width={24} height={24} alt='Unlimited' />

          <h3 className='font-bold'>Upgrade to Pro</h3>
        </div>

        <p className='text-xs text-muted-foreground'>
          Get unlimited hearts and more!
        </p>
      </div>

      <Button asChild variant='super' className='w-full' size='lg'>
        <Link href='/shop'>Upgrade now</Link>
      </Button>
    </div>
  )
}

export default Promo
