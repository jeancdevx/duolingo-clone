import Image from 'next/image'
import { redirect } from 'next/navigation'

import { getUserProgress, getUserSubscription } from '@/db/queries'

import Items from '@/components/Shop/Items'
import UserProgress from '@/components/UserProgress'
import FeedWrapper from '@/components/Wrappers/FeedWrapper'
import StickyWrapper from '@/components/Wrappers/StickyWrapper'

const ShopPage = async () => {
  const userProgressData = getUserProgress()
  const userSubscriptionData = getUserSubscription()

  const [userProgress, userSubscription] = await Promise.all([
    userProgressData,
    userSubscriptionData
  ])

  if (!userProgress ?? !userProgress?.activeCourse) redirect('/courses')

  const isPro = !!userSubscription?.isActive

  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <UserProgress />
      </StickyWrapper>

      <FeedWrapper>
        <div className='flex w-full flex-col items-center'>
          <Image src='/shop.svg' alt='Shop' height={90} width={90} />
          <h1 className='my-4 text-center text-2xl font-extrabold text-neutral-800'>
            Shop
          </h1>
          <p className='mb-6 text-center text-sm text-muted-foreground'>
            Spend your points on cool stuff.
          </p>

          <Items
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={isPro}
          />
        </div>
      </FeedWrapper>
    </div>
  )
}

export default ShopPage
