'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useHeartsModal } from '@/store/use-hearts-modal'

import { Button } from '@/components/ui/Button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle
} from '@/components/ui/Dialog'

const HeartsModal = () => {
  const [isMounted, setIsMounted] = useState(false)

  const { isOpen, close } = useHeartsModal()

  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const onClick = () => {
    close()

    router.push('/store')
  }

  if (!isMounted) return null

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className='max-w-md'>
        <div className='mb-4 flex w-full items-center justify-center'>
          <Image
            src='/mascot_bad.svg'
            height={80}
            width={80}
            alt='Bad mascot'
          />
        </div>

        <DialogTitle className='text-center text-2xl font-bold'>
          You ran out of hearts!
        </DialogTitle>

        <DialogDescription className='text-center text-sm font-semibold'>
          Get Pro for unlimited hearts or purchase them in the shop.
        </DialogDescription>

        <DialogFooter className='mb-4'>
          <div className='flex w-full flex-col gap-y-4'>
            <Button
              variant='primary'
              className='w-full'
              size='lg'
              onClick={onClick}
            >
              Get Unlimited Hearts
            </Button>

            <Button
              variant='dangerOutline'
              className='w-full'
              size='lg'
              onClick={close}
            >
              No thanks
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default HeartsModal
