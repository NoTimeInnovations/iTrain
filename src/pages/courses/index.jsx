import Footer from '@/components/common/Footer'
import HeroSection from '@/components/coursesPage/HeroSection'
import SecondSection from '@/components/coursesPage/SecondSection'
import WorldisDigitalTM from '@/components/coursesPage/WorldisDigitalTM'
import React from 'react'

const CoursesPage = () => {
  return (
    <main className='overflow-x-hidden'>
        <HeroSection/>
        <SecondSection/>
        <WorldisDigitalTM/>
        <Footer/>
    </main>
  )
}

export default CoursesPage