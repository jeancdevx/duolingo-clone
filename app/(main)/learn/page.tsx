import { Suspense } from 'react'

import Units from '@/components/Learn/Units'
import Promo from '@/components/Promo'
import QuestList from '@/components/Quests/QuestList'
import {
  SkeletonPromo,
  SkeletonQuestList,
  SkeletonUnits,
  SkeletonUserProgress
} from '@/components/Skeletons'
import UserProgress from '@/components/UserProgress'
import FeedWrapper from '@/components/Wrappers/FeedWrapper'
import StickyWrapper from '@/components/Wrappers/StickyWrapper'

const LearnPage = () => {
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <Suspense fallback={<SkeletonUserProgress />}>
          <UserProgress />
        </Suspense>

        <Suspense fallback={<SkeletonPromo />}>
          <Promo />
        </Suspense>

        <Suspense fallback={<SkeletonQuestList />}>
          <QuestList />
        </Suspense>
      </StickyWrapper>

      <FeedWrapper>
        <Suspense fallback={<SkeletonUnits />}>
          <Units />
        </Suspense>
      </FeedWrapper>
    </div>
  )
}

export default LearnPage
