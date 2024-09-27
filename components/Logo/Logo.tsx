import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/learn'>
      <div className='flex items-center gap-x-3 pb-7 pl-4 pt-8'>
        <Image src='/mascot.svg' height={40} width={40} alt='Lingo Mascot' />
        <h1 className='text-2xl font-extrabold tracking-wide text-green-500'>
          Lingo
        </h1>
      </div>
    </Link>
  )
}

export default Logo
