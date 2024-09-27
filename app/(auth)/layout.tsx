interface layoutProps {
  children: React.ReactNode
}

const layout = ({ children }: layoutProps) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      {children}
    </div>
  )
}

export default layout
