import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/nextjs'
import { Loader } from 'lucide-react'

import Logo from '@/components/Logo'
import { Button } from '@/components/ui/Button'

const Header = () => {
  return (
    <header className='h-20 w-full border-b-2 border-slate-200/60'>
      <div className='mx-auto flex h-full items-center justify-between lg:max-w-screen-lg'>
        <Logo />

        <ClerkLoading>
          <Loader className='size-5 animate-spin text-muted-foreground' />
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode='modal' fallbackRedirectUrl='/learn'>
              <Button
                className='font-extrabold text-primary'
                size='lg'
                variant='ghost'
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  )
}

export default Header
