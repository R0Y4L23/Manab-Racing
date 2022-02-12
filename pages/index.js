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
      <div className='bg-black'>
        <div className='pt-20 text-6xl md:pl-32 pl-0 md:block flex flex-col justify-center items-center '>
          <p className='text-white animate__animated animate__bounceInLeft'>About Us</p>
          <div className='w-32 h-1 bg-[#d1222d] rounded pt-1 pb-1'></div>
        </div>
        <section className="text-gray-600 body-font ">
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
        {/* <section className="text-gray-400 bg-gray-900 body-font relative">
          <div className="absolute inset-0 bg-gray-900">
            <iframe title="map" width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
              <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
              <p className="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-400">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-400">Message</label>
                <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <p className="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </div>
          </div>
        </section> */}
      </div>
    </>
  )
}

export default index
