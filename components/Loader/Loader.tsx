import { Loader as LoaderIcon } from 'lucide-react'

const Loader = () => {
  return (
    <div className='flex size-full items-center justify-center'>
      <LoaderIcon className='size-6 animate-spin text-muted-foreground' />
    </div>
  )
}

export default Loader
