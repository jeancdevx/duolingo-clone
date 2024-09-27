import Image from 'next/image'

import { Button } from '@/components/ui/Button'

import { FOOTER_LANGUAGES } from './constants'

const Footer = () => {
  return (
    <footer className='hidden h-20 w-full border-t-2 border-slate-200/60 p-2 lg:block'>
      <div className='mx-auto flex h-full max-w-screen-lg items-center justify-evenly'>
        {FOOTER_LANGUAGES.map(language => (
          <Button
            size='lg'
            variant='ghost'
            className='w-full'
            key={language.lang}
          >
            <Image
              src={language.image}
              alt={language.lang}
              height={32}
              width={40}
              className='mr-3 rounded-md'
            />
            {language.lang}
          </Button>
        ))}
      </div>
    </footer>
  )
}

export default Footer
