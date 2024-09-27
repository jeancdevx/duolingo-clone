import { CheckCircle, XCircle } from 'lucide-react'
import { useKey, useMedia } from 'react-use'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/Button'

interface FooterProps {
  status: 'CORRECT' | 'WRONG' | 'NONE' | 'COMPLETED'
  disabled?: boolean
  lessonId?: number
  onCheck: () => void
}

const Footer = ({ status, disabled, lessonId, onCheck }: FooterProps) => {
  useKey('Enter', onCheck, {}, [onCheck])

  const isMobile = useMedia('(max-width: 1024px)')

  return (
    <footer
      className={cn(
        'h-[100px] border-t-2 lg:h-[140px]',
        status === 'CORRECT' && 'border-transparent bg-green-100',
        status === 'WRONG' && 'border-transparent bg-rose-100'
      )}
    >
      <div className='mx-auto flex h-full max-w-[1140px] items-center justify-between px-6 lg:px-10'>
        {status === 'CORRECT' && (
          <div className='flex items-center text-base font-bold text-green-500 lg:text-2xl'>
            <CheckCircle className='mr-4 size-6 lg:size-10' />
            Nicely done!
          </div>
        )}

        {status === 'WRONG' && (
          <div className='flex items-center text-base font-bold text-rose-500 lg:text-2xl'>
            <XCircle className='mr-4 size-6 lg:size-10' />
            Try again.
          </div>
        )}

        {status === 'COMPLETED' && (
          <Button
            variant='default'
            size={isMobile ? 'sm' : 'lg'}
            onClick={() => (window.location.href = `/lesson/${lessonId}`)}
          >
            Practice again
          </Button>
        )}

        <Button
          disabled={disabled}
          className='ml-auto transition duration-200'
          onClick={onCheck}
          size={isMobile ? 'sm' : 'lg'}
          variant={status === 'WRONG' ? 'danger' : 'secondary'}
        >
          {status === 'NONE' && 'Check'}
          {status === 'CORRECT' && 'Next'}
          {status === 'WRONG' && 'Retry'}
          {status === 'COMPLETED' && 'Continue'}
        </Button>
      </div>
    </footer>
  )
}

export default Footer
