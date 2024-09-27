'use client'

import { useState, useTransition } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useHeartsModal } from '@/store/use-hearts-modal'
import { usePracticeModal } from '@/store/use-practice-modal'
import Confetti from 'react-confetti'
import { useAudio, useMount, useWindowSize } from 'react-use'
import { toast } from 'sonner'

import type {
  challengeOptions,
  challenges,
  userSubscription
} from '@/db/schema'
import { upsertChallengeProgress } from '@/actions/challenge-progress'
import { reduceHearts } from '@/actions/user-progress'

import Challenge from '@/components/Lesson/Challenge'
import Footer from '@/components/Lesson/Footer'
import Header from '@/components/Lesson/Header'
import QuestionBubble from '@/components/Lesson/QuestionBubble'
import ResultCard from '@/components/Lesson/ResultCard'

interface QuizProps {
  initialPercentage: number
  initialHearts: number
  initialLessonId: number
  initialLessonChallenges: Array<
    typeof challenges.$inferSelect & {
      completed: boolean
      challengeOptions: Array<typeof challengeOptions.$inferSelect>
    }
  >
  userSubscription:
    | (typeof userSubscription.$inferSelect & {
        isActive: boolean
      })
    | null
}

const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonId,
  initialLessonChallenges,
  userSubscription
}: QuizProps) => {
  const router = useRouter()

  const [correctAudio, , correctControls] = useAudio({ src: '/correct.wav' })
  const [incorrectAudio, , incorrectControls] = useAudio({
    src: '/incorrect.wav'
  })
  const [finishAudio] = useAudio({
    src: '/finish.mp3',
    autoPlay: true
  })

  const { open: openHeartsModal } = useHeartsModal()
  const { open: openPracticeModal } = usePracticeModal()

  useMount(() => {
    if (initialPercentage === 100) openPracticeModal()
  })

  const { width, height } = useWindowSize()

  const [pending, startTransition] = useTransition()

  const [lessonId] = useState(initialLessonId)
  const [hearts, setHearts] = useState(initialHearts)
  const [percentage, setPercentage] = useState(() => {
    return initialPercentage === 100 ? 0 : initialPercentage
  })
  const [challenges] = useState(initialLessonChallenges)
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex(
      challenge => !challenge.completed
    )

    return uncompletedIndex === -1 ? 0 : uncompletedIndex
  })

  const [selectedOption, setSelectedOption] = useState<number>()
  const [status, setStatus] = useState<'CORRECT' | 'WRONG' | 'NONE'>('NONE')

  const challenge = challenges[activeIndex]
  const options = challenge?.challengeOptions ?? []

  const onNext = () => {
    setActiveIndex(current => current + 1)
  }

  const onSelect = (id: number) => {
    if (status !== 'NONE') return

    setSelectedOption(id)
  }

  const onContinue = () => {
    if (!selectedOption) return

    if (status === 'WRONG') {
      setStatus('NONE')
      setSelectedOption(undefined)

      return
    }

    if (status === 'CORRECT') {
      onNext()

      setStatus('NONE')
      setSelectedOption(undefined)

      return
    }

    const correctOption = options.find(option => option.correct)

    if (!correctOption) return

    if (correctOption.id === selectedOption) {
      startTransition(() => {
        upsertChallengeProgress(challenge.id)
          .then(response => {
            if (response?.error === 'hearts') {
              openHeartsModal()

              return
            }

            correctControls.play()

            setStatus('CORRECT')
            setPercentage(prev => prev + 100 / challenges.length)

            if (initialPercentage === 100) {
              setHearts(prev => Math.min(prev + 1, 5))
            }
          })
          .catch(() => toast.error('An error occurred. Please try again.'))
      })
    } else {
      startTransition(() => {
        reduceHearts(challenge.id)
          .then(response => {
            if (response?.error === 'hearts') {
              openHeartsModal()

              return
            }

            incorrectControls.play()

            setStatus('WRONG')

            if (!response?.error) setHearts(prev => Math.max(prev - 1, 0))
          })
          .catch(() => toast.error('An error occurred. Please try again.'))
      })
    }
  }

  if (!challenge) {
    return (
      <>
        {finishAudio}

        <Confetti
          recycle={false}
          numberOfPieces={100}
          tweenDuration={10000}
          width={width}
          height={height}
        />

        <div className='mx-auto flex h-full max-w-lg flex-col items-center justify-center gap-y-4 text-center lg:gap-y-8'>
          <Image
            src='/finish.svg'
            alt='Finish'
            className='hidden lg:block'
            height={100}
            width={100}
          />

          <Image
            src='/finish.svg'
            alt='Finish'
            className='block lg:hidden'
            height={50}
            width={50}
          />

          <h1 className='text-xl font-extrabold text-neutral-700 lg:text-3xl'>
            Great job <br />
            You&apos;ve completed the lesson!
          </h1>

          <div className='flex w-full items-center gap-x-4'>
            <ResultCard variant='POINTS' value={challenges.length * 10} />

            <ResultCard
              variant='HEARTS'
              value={userSubscription?.isActive ? Infinity : hearts}
            />
          </div>
        </div>

        <Footer
          lessonId={lessonId}
          status='COMPLETED'
          disabled={pending ?? !selectedOption}
          onCheck={() => router.push('/learn')}
        />
      </>
    )
  }

  const title =
    challenge.type === 'ASSIST'
      ? 'Select the correct meaning'
      : challenge.question

  return (
    <>
      {correctAudio}
      {incorrectAudio}

      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />

      <div className='flex-1'>
        <div className='flex h-full items-center justify-center'>
          <div className='flex w-full flex-col gap-y-12 px-6 lg:min-h-[350px] lg:w-[750px] lg:px-0'>
            <h1 className='text-center text-lg font-bold text-neutral-700 lg:text-3xl'>
              {title}
            </h1>

            <div>
              {challenge.type === 'ASSIST' && (
                <QuestionBubble question={challenge.question} />
              )}

              <Challenge
                options={options}
                onSelect={onSelect}
                status={status}
                selectedOption={selectedOption}
                disabled={pending}
                type={challenge.type}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer
        status={status}
        disabled={pending ?? !selectedOption}
        onCheck={onContinue}
      />
    </>
  )
}

export default Quiz
