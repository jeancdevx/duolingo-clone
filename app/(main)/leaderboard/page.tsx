import { Suspense } from 'react'

import Image from 'next/image'

import LeaderboardList from '@/components/Leaderboard/LeaderboardList'
import Loader from '@/components/Loader'
import Promo from '@/components/Promo'
import { Separator } from '@/components/ui/Separator'
import UserProgress from '@/components/UserProgress'
import FeedWrapper from '@/components/Wrappers/FeedWrapper'
import StickyWrapper from '@/components/Wrappers/StickyWrapper'

const LeaderboardPage = () => {
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <Suspense fallback={<div>loading...</div>}>
          <UserProgress />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Promo />
        </Suspense>
      </StickyWrapper>

      <FeedWrapper>
        <div className='flex w-full flex-col items-center'>
          <Image src='/leaderboard.svg' alt='Shop' height={90} width={90} />
          <h1 className='my-4 text-center text-2xl font-extrabold text-neutral-800'>
            Leaderboard
          </h1>
          <p className='mb-6 text-center text-sm text-muted-foreground'>
            See how you stack up against your peers
          </p>

          <Separator className='mb-4 h-0.5 rounded-full' />

          <Suspense fallback={<Loader />}>
            <LeaderboardList />
          </Suspense>
        </div>
      </FeedWrapper>
    </div>
  )
}

export default LeaderboardPage
