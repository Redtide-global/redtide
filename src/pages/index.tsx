import Image from 'next/image'
import RootLayout from '@/components/layout'
import HeroSection from "@/components/HeroSection"
import HeroImages from '@/components/HeroImages'
import { Inter } from 'next/font/google'
import WhereWeAre from '@/components/WhereWeAre'
import WhatYouCanDoContainer from '@/components/WhatYouCanDo'
import DonateNowHeading from '@/components/DonateNowHeading'
import StepsforDonation from '@/components/StepsForDonating'
import OurGallery from '@/components/OurGallery'
import GalleryShowCase from '@/components/GalleryShow'
import OurPartners from '@/components/OurPartners'


const inter = Inter({ subsets: ['latin'] })

const LandingPage = () => {
  return (
    <RootLayout>
      <HeroSection/>
      <HeroImages/>
      <WhereWeAre/>
      <WhatYouCanDoContainer/>
      <DonateNowHeading/>
      <StepsforDonation/>
      <OurGallery/>
      <GalleryShowCase/>
      <OurPartners/>
    </RootLayout>
  )
}

export default LandingPage