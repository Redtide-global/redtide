import Image from 'next/image'
import RootLayout from '@/components/layout'
import HeroSection from "@/components/HeroSection"
import HeroImages from '@/components/HeroImages'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const LandingPage = () => {
  return (
    <RootLayout>
      <HeroSection/>
      <HeroImages/>
    </RootLayout>
  )
}

export default LandingPage