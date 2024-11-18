import { redirect } from 'next/navigation'

import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress
} from '@/db/queries'

import Unit from '@/components/Courses/Unit'
import Header from '@/components/Header'

const Units = async () => {
  const userProgressData = getUserProgress()
  const courseProgressData = getCourseProgress()
  const lessonPercentageData = getLessonPercentage()
  const unitsData = getUnits()

  const [userProgress, courseProgress, lessonPercentage, units] =
    await Promise.all([
      userProgressData,
      courseProgressData,
      lessonPercentageData,
      unitsData
    ])

  if (!userProgress?.activeCourse) redirect('/courses')

  if (!courseProgress) redirect('/courses')

  return (
    <>
      <Header title={userProgress.activeCourse.title} />

      {units.map(unit => (
        <div className='mb-10' key={unit.id}>
          <Unit
            id={unit.id}
            order={unit.order}
            description={unit.description}
            title={unit.title}
            lessons={unit.lessons}
            activeLessonId={courseProgress.activeLesson}
            activeLessonPercentage={lessonPercentage}
          />
        </div>
      ))}
    </>
  )
}

export default Units
