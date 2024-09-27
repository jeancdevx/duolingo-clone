interface FeedWrapperProps {
  children: React.ReactNode
}

const FeedWrapper = ({ children }: FeedWrapperProps) => {
  return <div className='relative top-0 flex-1 pb-10'>{children}</div>
}

export default FeedWrapper
