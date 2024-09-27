import { getCourses, getUserProgress } from '@/db/queries'

import Card from '@/components/Courses/Card'

const List = async () => {
  const [courses, userProgress] = await Promise.all([
    getCourses(),
    getUserProgress()
  ])

  return (
    <div className='grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]'>
      {courses.map(course => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          active={course.id === userProgress?.activeCourseId}
          activeCourseId={userProgress?.activeCourseId}
        />
      ))}
    </div>
  )
}

export default List
