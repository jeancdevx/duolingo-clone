import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { InfinityIcon } from 'lucide-react'

import { getUserProgress, getUserSubscription } from '@/db/queries'

import { Button } from '@/components/ui/Button'

const UserProgress = async () => {
  const userProgressData = getUserProgress()
  const userSubscriptionData = getUserSubscription()

  const [userProgress, userSubscription] = await Promise.all([
    userProgressData,
    userSubscriptionData
  ])

  if (!userProgress?.activeCourse) redirect('/courses')

  const hasActiveSubscription = !!userSubscription?.isActive

  return (
    <div className='flex w-full items-center justify-between gap-x-2'>
      <Link href='/courses'>
        <Button variant='ghost'>
          <Image
            src={userProgress.activeCourse.imageSrc}
            alt={userProgress.activeCourse.title}
            width={32}
            height={32}
            className='rounded-md'
          />
        </Button>
      </Link>

      <Link href='/shop'>
        <Button variant='ghost' className='text-orange-500'>
          <Image
            src='/points.svg'
            alt='Points'
            width={28}
            height={28}
            className='mr-2'
          />
          {userProgress.points}
        </Button>
      </Link>

      <Link href='/shop'>
        <Button variant='ghost' className='text-rose-500'>
          <Image
            src='/heart.svg'
            alt='Hearts'
            width={22}
            height={22}
            className='mr-2'
          />
          {hasActiveSubscription ? (
            <InfinityIcon className='size-4 shrink-0 stroke-[3]' />
          ) : (
            userProgress.hearts
          )}
        </Button>
      </Link>
    </div>
  )
}

export default UserProgress
