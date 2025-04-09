'use client'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
      <div className='space-y-6 text-center '>
        <div className='space-y-6 mx-auto'>
          <h1 className='gradient-title text-5xl font-bold md:text-6xl lg:text-7xl  xl:text-8xl '>Your Ai Carrer Coach for
            <br />
            Professional Success
          </h1>
          <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>Advance your carrer with personalized guidance, interviewprep, and AI-powered tools for job success.</p>
        </div>

        <div className='flex justify-center space-x-4'>
          <Link href={'/dashboard'}>
          <Button size="lg" className="px-8">
            Get Started
          </Button>
          </Link>
          <Link href={'https://www.youtube.com/roadsidecoder'}>
          <Button size="lg" variant="outline" className="px-8">
            Demo Video
          </Button>
          </Link>
        </div>

        <div className='hero-image-wrapper mt-5 md:mt-0'>
          <div>
            <Image
            priority
            className='rounded-lg shadow-2xl border mx-auto'
            src={"/karasuno.jpg"}
            width={1280}
            height={720}
            alt='Banner MentorAi'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
