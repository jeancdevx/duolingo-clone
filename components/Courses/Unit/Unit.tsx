import type { lessons, units } from '@/db/schema'

import LessonButton from '@/components/Courses/LessonButton'

import UnitBanner from './UnitBanner'

interface UnitProps {
  id: number
  order: number
  description: string
  title: string
  lessons: Array<
    typeof lessons.$inferSelect & {
      completed: boolean
    }
  >
  activeLessonId:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect
      })
    | undefined
  activeLessonPercentage: number
}

const Unit = ({
  id,
  order,
  description,
  title,
  lessons,
  activeLessonId,
  activeLessonPercentage
}: UnitProps) => {
  return (
    <>
      <UnitBanner
        title={title}
        description={description}
        activeLessonPercentage={activeLessonPercentage}
      />

      <div className='relative flex flex-col items-center'>
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLessonId?.id
          const isLocked = !lesson.completed && !isCurrent

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          )
        })}
      </div>
    </>
  )
}

export default Unit
