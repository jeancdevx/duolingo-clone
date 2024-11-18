import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { quests } from '@/constants'

import { getUserProgress } from '@/db/queries'

import { Button } from '@/components/ui/Button'
import { Progress } from '@/components/ui/Progress'

const QuestList = async () => {
  const userProgressData = getUserProgress()

  const [userProgress] = await Promise.all([userProgressData])

  if (!userProgress?.activeCourse) redirect('/courses')

  return (
    <div className='space-y-4 rounded-xl border-2 p-4'>
      <div className='flex w-full items-center justify-between space-y-2'>
        <h3 className='font-bold'>Quests</h3>
        <Link href='/quests'>
          <Button size='sm' variant='primaryOutline'>
            View all
          </Button>
        </Link>
      </div>

      <ul className='w-full space-y-4'>
        {quests.map(quest => {
          const progress = (userProgress.points / quest.value) * 100

          return (
            <div
              key={quest.title}
              className='flex w-full items-center gap-x-3 pb-4'
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
  )
}

export default QuestList
