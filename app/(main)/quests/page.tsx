import { Suspense } from 'react'

import Image from 'next/image'
import { redirect } from 'next/navigation'

import { quests } from '@/constants'

import { getUserProgress } from '@/db/queries'

import Promo from '@/components/Promo'
import { Progress } from '@/components/ui/Progress'
import { Separator } from '@/components/ui/Separator'
import UserProgress from '@/components/UserProgress'
import FeedWrapper from '@/components/Wrappers/FeedWrapper'
import StickyWrapper from '@/components/Wrappers/StickyWrapper'

const QuestsPage = async () => {
  const userProgressData = getUserProgress()

  const [userProgress] = await Promise.all([userProgressData])

  if (!userProgress ?? !userProgress?.activeCourse) redirect('/courses')

  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <UserProgress />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Promo />
        </Suspense>
      </StickyWrapper>

      <FeedWrapper>
        <div className='flex w-full flex-col items-center'>
          <Image src='/quests.svg' alt='Shop' height={90} width={90} />
          <h1 className='my-4 text-center text-2xl font-extrabold text-neutral-800'>
            Quests
          </h1>

          <p className='mb-6 text-center text-sm text-muted-foreground'>
            Complete quests to earn points and rewards
          </p>

          <Separator className='mb-4 h-0.5 rounded-full' />

          <ul className='w-full'>
            {quests.map(quest => {
              const progress = (userProgress.points / quest.value) * 100

              return (
                <div
                  key={quest.title}
                  className='flex w-full items-center gap-x-4 p-4'
                >
                  <Image src='/points.svg' alt='Point' height={32} width={32} />

                  <div className='flex w-full flex-col gap-y-2'>
                    <p className='text-sm font-extrabold text-neutral-700'>
                      {quest.title}
                    </p>

                    <Progress value={progress} className='h-2' />
                  </div>
                </div>
              )
            })}
          </ul>
        </div>
      </FeedWrapper>
    </div>
  )
}

export default QuestsPage
