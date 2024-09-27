import Link from 'next/link'

import { NotebookText } from 'lucide-react'

import { Button } from '@/components/ui/Button'

interface UnitBannerProps {
  title: string
  description: string
  activeLessonPercentage?: number
}

const UnitBanner = ({
  title,
  description,
  activeLessonPercentage
}: UnitBannerProps) => {
  return (
    <div className='flex w-full items-center justify-between rounded-xl border-2 border-green-500 bg-green-50 p-5 text-black'>
      <div className='space-y-2.5'>
        <h3 className='text-2xl font-extrabold'>{title}</h3>
        <p className=''>{description}</p>
      </div>

      <Link href='/lesson'>
        <Button
          size='lg'
          variant='secondary'
          className='hidden border-2 border-b-4 active:border-b-2 xl:flex'
        >
          <NotebookText className='mr-2' />
          {activeLessonPercentage ? 'Continue' : 'Start'}
        </Button>
      </Link>
    </div>
  )
}

export default UnitBanner
