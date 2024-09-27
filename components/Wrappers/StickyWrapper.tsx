interface StickyWrapperProps {
  children: React.ReactNode
}

const StickyWrapper = ({ children }: StickyWrapperProps) => {
  return (
    <div className='sticky bottom-6 hidden w-[368px] self-end lg:block'>
      <div className='sticky top-6 flex min-h-[calc(100vh-48px)] flex-col gap-y-4'>
        {children}
      </div>
    </div>
  )
}

export default StickyWrapper
