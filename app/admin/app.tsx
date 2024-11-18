'use client'

import simpleRestProvider from 'ra-data-simple-rest'
import { Admin, Resource } from 'react-admin'

import {
  ChallengeCreate,
  ChallengeEdit,
  ChallengeList
} from '@/components/Admin/Challenge'
import {
  ChallengeOptionCreate,
  ChallengeOptionEdit,
  ChallengeOptionList
} from '@/components/Admin/ChallengeOption'
import { CourseCreate, CourseEdit, CourseList } from '@/components/Admin/Course'
import { LessonCreate, LessonEdit, LessonList } from '@/components/Admin/Lesson'
import { UnitCreate, UnitEdit, UnitList } from '@/components/Admin/Unit'

const dataProvider = simpleRestProvider('/api')

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name='courses'
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
        recordRepresentation='title'
      />

      <Resource
        name='units'
        list={UnitList}
        create={UnitCreate}
        edit={UnitEdit}
        recordRepresentation='title'
      />

      <Resource
        name='lessons'
        list={LessonList}
        create={LessonCreate}
        edit={LessonEdit}
        recordRepresentation='title'
      />

      <Resource
        name='challenges'
        list={ChallengeList}
        create={ChallengeCreate}
        edit={ChallengeEdit}
        recordRepresentation='question'
      />

      <Resource
        name='challengeOptions'
        list={ChallengeOptionList}
        create={ChallengeOptionCreate}
        edit={ChallengeOptionEdit}
        recordRepresentation='text'
        options={{ label: 'Challenge Options' }}
      />
    </Admin>
  )
}

export default App
