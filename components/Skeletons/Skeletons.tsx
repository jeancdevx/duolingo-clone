import { Skeleton } from '@/components/ui/Skeleton'

import Loader from '../Loader'

interface SkeletonCoursesProps {
  count?: number
}

export const SkeletonCourses = ({ count = 6 }: SkeletonCoursesProps) => {
  return (
    <div className='grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]'>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          className='h-full min-h-[217px] min-w-[200px] cursor-pointer rounded-xl border-2 border-b-4 p-3 pb-6 active:border-b-2'
          key={index}
        />
      ))}
    </div>
  )
}

export const SkeletonUserProgress = () => {
  return (
    <div className='flex size-full items-center justify-between gap-x-2'>
      <Skeleton className='h-[44px] w-[64px] rounded-md' />
      <Skeleton className='h-[44px] w-[64px] rounded-md' />
      <Skeleton className='h-[44px] w-[64px] rounded-md' />
    </div>
  )
}

export const SkeletonPromo = () => {
  return (
    <div className='space-y-4 rounded-xl border-2 p-4'>
      <div className='space-y-2'>
        <div className='flex items-center gap-x-2'>
          <Skeleton className='size-6 rounded-md' />
          <Skeleton className='h-6 w-32 rounded-md' />
        </div>

        <Skeleton className='h-4 w-44 rounded-md' />
      </div>

      <Skeleton className='h-12 w-full rounded-md' />
    </div>
  )
}

export const SkeletonQuestList = () => {
  return (
    <div className='space-y-4 rounded-xl border-2 p-4'>
      <div className='flex w-full items-center justify-between space-y-2'>
        <Skeleton className='h-6 w-24 rounded-md' />
        <Skeleton className='h-8 w-24 rounded-md' />
      </div>

      <ul className='w-full space-y-4'>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className='flex w-full items-center gap-x-3 pb-4'>
            <Skeleton className='size-8 rounded-md' />

            <div className='flex w-full flex-col gap-y-2'>
              <Skeleton className='h-4 w-32 rounded-md' />
              <Skeleton className='h-2 w-full rounded-md' />
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}

export const SkeletonUnits = () => {
  return (
    <>
      <div className='sticky top-0 mb-8 flex items-center justify-between border-b-2 bg-white pb-3 text-neutral-400 lg:z-50 lg:mt-[-28px] lg:pt-[28px]'>
        <Skeleton className='h-[36px] w-[44px] rounded-md' />
        <Skeleton className='h-8 w-32 rounded-md' />
        <Skeleton />
      </div>

      <div className='mb-10'>
        <div className='flex w-full items-center justify-between rounded-xl border-2 p-5'>
          <div className='space-y-2.5'>
            <Skeleton className='h-8 w-48 rounded-md' />
            <Skeleton className='h-4 w-64 rounded-md' />
          </div>

          <Skeleton className='h-12 w-32 rounded-md' />
        </div>

        <div className='h-96'>
          <Loader />
        </div>
      </div>
    </>
  )
}
