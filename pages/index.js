/* eslint-disable @next/next/no-img-element */
import React from 'react'
import CarouselComponent from '../components/Carousel'
import about from '../assets/about.jpg'
import Image from 'next/image'
import logo from '../assets/logo.png'
import Head from 'next/head'

const index = () => {
  return (
    <>
      <Head>
        <title>Home | Manab Racing</title>
      </Head>
      <CarouselComponent />
      <div className='pt-20 text-6xl md:pl-32 pl-0 md:block flex flex-col justify-center items-center bg-black'>
        <p className='text-white animate__animated animate__bounceInLeft'>About Us</p>
        <div className='w-32 h-1 bg-[#d1222d] rounded pt-1 pb-1'></div>
      </div>
      <section className="text-gray-600 body-font bg-black">
        <div className="container px-5 py-12 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg overflow-hidden animate__animated animate__bounceInRight">
              <Image alt="content" height={2400} src={about} className='rounded-lg' />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-white text-lg">The Team</h2>
                  <div className="w-12 h-1 bg-[#d1222d] rounded mt-2 mb-2"></div>
                  <div className='sm:w-full w-1/2 rounded'>
                    <Image src={logo} alt='logo' className='rounded' />
                  </div>
                </div>
              </div>
              <div
                className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4 text-white">Manab Racing is the official Formula Student team of Haldia
                  Institute of Technology, Haldia, West Bengal. We are a group of students representing our college at
                  Formula Student competition in India , where we design and manufacture Formula style racecar
                  prototype. Since the year 2014, our team has been constantly pushing the limits in the field of racing
                  prototype cars. As the world is moving towards green energy ,we at Manab Racing have thus made the
                  decision to go fully electric from this seasons and the preparation for it are in full throttle.</p>
                <a className="text-[#d1222d] inline-flex items-center">Learn More About Us
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default index
