import { useCallback } from 'react'

import Image from 'next/image'

import { useAudio, useKey } from 'react-use'

import type { challenges } from '@/db/schema'
import { cn } from '@/lib/utils'

interface CardProps {
  id: number
  text: string
  imageSrc: string | null
  shortcut: string
  selected?: boolean
  onClick: () => void
  status?: 'CORRECT' | 'WRONG' | 'NONE'
  audioSrc: string | null
  disabled?: boolean
  type: (typeof challenges.$inferSelect)['type']
}

const Card = ({
  id,
  text,
  imageSrc,
  shortcut,
  selected,
  onClick,
  status,
  audioSrc,
  disabled,
  type
}: CardProps) => {
  const [audio, , controls] = useAudio({ src: audioSrc ?? '' })

  const handleClick = useCallback(() => {
    if (disabled) return

    controls.play()

    onClick()
  }, [disabled, onClick, controls])

  useKey(shortcut, handleClick, {}, [handleClick])

  return (
    <div
      onClick={handleClick}
      className={cn(
        'h-full cursor-pointer rounded-xl border-2 border-b-4 p-4 hover:bg-black/5 active:border-b-2 lg:p-6',
        selected && 'border-sky-300 bg-sky-100 hover:bg-sky-100',
        selected &&
          status === 'CORRECT' &&
          'border-green-500 bg-green-100 hover:bg-green-100',
        selected &&
          status === 'WRONG' &&
          'border-rose-500 bg-rose-100 hover:bg-rose-100',
        disabled && 'pointer-events-none bg-muted opacity-70',
        type === 'ASSIST' && 'w-full lg:p-3'
      )}
    >
      {audio}

      {imageSrc && (
        <div className='relative mb-4 aspect-square max-h-[80px] w-full lg:max-h-[150px]'>
          <Image src={imageSrc} alt={text} fill />
        </div>
      )}

      <div
        className={cn(
          'flex items-center justify-between',
          type === 'ASSIST' && 'flex-row-reverse'
        )}
      >
        {type === 'ASSIST' && <div />}

        <p
          className={cn(
            'text-sm font-medium text-neutral-700 lg:text-base',
            selected && 'text-sky-500',
            selected && status === 'CORRECT' && 'text-green-500',
            selected && status === 'WRONG' && 'text-rose-500'
          )}
        >
          {text}
        </p>

        <div
          className={cn(
            'flex size-[25px] items-center justify-center rounded-lg border-2 text-xs font-semibold text-neutral-400 lg:size-[30px] lg:text-[15px]',
            selected && 'border-sky-300 text-sky-500',
            selected &&
              status === 'CORRECT' &&
              'border-green-500 text-green-500',
            selected && status === 'WRONG' && 'border-rose-500 text-rose-500'
          )}
        >
          {shortcut}
        </div>
      </div>
    </div>
  )
}

export default Card
