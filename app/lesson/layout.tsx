interface layoutProps {
  children: React.ReactNode
}

const LessonLayout = ({ children }: layoutProps) => {
  return (
    <div className='flex h-full flex-col'>
      <div className='flex size-full flex-col'>{children}</div>
    </div>
  )
}

export default LessonLayout
