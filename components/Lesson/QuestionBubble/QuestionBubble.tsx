import Image from 'next/image'

interface QuestionBubbleProps {
  question: string
}

const QuestionBubble = ({ question }: QuestionBubbleProps) => {
  return (
    <div className='mb-6 flex items-center gap-x-4'>
      <Image
        src='/mascot.svg'
        alt='Lingo Mascot'
        width={60}
        height={60}
        className='hidden lg:block'
      />

      <Image
        src='/mascot.svg'
        alt='Lingo Mascot'
        width={40}
        height={40}
        className='block lg:hidden'
      />

      <div className='relative rounded-xl border-2 px-4 py-2 text-sm lg:text-base'>
        {question}

        <div className='absolute -left-3 top-1/2 size-0 -translate-y-1/2 rotate-90 border-x-8 border-t-8 border-x-transparent' />
      </div>
    </div>
  )
}

export default QuestionBubble
