'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useExitModal } from '@/store/use-exit-modal'

import { Button } from '@/components/ui/Button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle
} from '@/components/ui/Dialog'

const ExitModal = () => {
  const [isMounted, setIsMounted] = useState(false)

  const { isOpen, close } = useExitModal()

  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className='max-w-md'>
        <div className='mb-4 flex w-full items-center justify-center'>
          <Image
            src='/mascot_sad.svg'
            height={80}
            width={80}
            alt='Sad mascot'
          />
        </div>

        <DialogTitle className='text-center text-2xl font-bold'>
          Wait, don&apos;t go!
        </DialogTitle>

        <DialogDescription className='text-center text-sm font-semibold'>
          You&apos;re about to leave the page. Are you sure?
        </DialogDescription>

        <DialogFooter className='mb-4'>
          <div className='flex w-full flex-col gap-y-4'>
            <Button
              variant='primary'
              className='w-full'
              size='lg'
              onClick={close}
            >
              Keep Learning
            </Button>

            <Button
              variant='dangerOutline'
              className='w-full'
              size='lg'
              onClick={() => {
                close()
                router.push('/learn')
              }}
            >
              End Session
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ExitModal
