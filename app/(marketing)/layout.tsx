import Footer from '@/components/Marketing/Footer'
import Header from '@/components/Marketing/Header'

interface MarketingLayoutProps {
  children: React.ReactNode
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />

      <main className='flex flex-1 flex-col items-center justify-end'>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default MarketingLayout
