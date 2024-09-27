import { Suspense } from 'react'

import List from '@/components/Courses/List'
import { SkeletonCourses } from '@/components/Skeletons'

const CoursesPage = () => {
  return (
    <div className='mx-auto h-full max-w-[912px] px-4 lg:px-3'>
      <h1 className='text-3xl font-extrabold text-neutral-700'>
        Language Courses
      </h1>

      <Suspense fallback={<SkeletonCourses />}>
        <List />
      </Suspense>
    </div>
  )
}

export default CoursesPage
