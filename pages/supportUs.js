/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';

const SupportUs = () => {
    return (
        <>
            <Head>
                <title>Support Us | Manab Racing</title>
            </Head>
            <div className='flex flex-col items-center justify-start pt-20 pb-20 bg-black'>
                <p className='uppercase font-bold sm:text-5xl text-2xl tracking-widest text-center text-white animate__animated animate__bounceInUp'>Why Support Us?</p>
                <div className='h-[2px] w-[200px] bg-[#F90602]'>
                </div>
            </div>
            <div className='md:flex justify-center bg-black text-white pb-20'>
                <div className='md:w-[23%] animate__animated animate__bounceInRight'>
                    <p className='text-2xl font-bold uppercase text-center'>Positive Brand Development</p>
                    <p className='md:text-left text-center'>We believe that every product or service needs a platform to do something different to reach its customer and build a brand image. Providing support to a student for the project which is working towards an initiative of sustainable engineering will add a positive outlook on your brand.</p>
                </div>
                <div className='md:w-[23%] md:mx-20 animate__animated animate__bounceIn'>
                    <p className='text-2xl font-bold uppercase text-center'>Visibility</p>
                    <p className='md:text-left text-center'>Our sponsors are constantly promoted on our college campus and regularly participate in national and international Formula SAE competitions and are promoted through Team Manab Racing's social media handles and website. And our sponsor's visibility also includes the Team Manab Racing newsletter, information brochures in the workshop's participation certificate.</p>
                </div>
                <div className='md:w-[23%] animate__animated animate__bounceInLeft'>
                    <p className='text-2xl font-bold uppercase text-center'>Empowering Youth</p>
                    <p className='md:text-left text-center'>Our team helps promote technological advancement among engineering students by providing them the opportunity to gain practical knowledge and practical experience applied in the industry. To create the next group of budding engineers who can play a major role in revolutionizing India's automobile future.</p>
                </div>
            </div>
            <div className='md:flex justify-center bg-black text-white pb-24'>
                <div className='md:w-[23%] animate__animated animate__bounceInRight'>
                    <p className='text-2xl font-bold uppercase text-center'>Seminars</p>
                    <p className='md:text-left text-center'>Team Manab Racing organizes seminars and workshops throughout the year to spread awareness, show students the practical side of automobile engineering, and here we arrange to provide our sponsors with an alternative to meet and connect with the young minds in our college.</p>
                </div>
                <div className='md:w-[23%] md:mx-20 animate__animated animate__bounceIn'>
                    <p className='text-2xl font-bold uppercase text-center'>Connectivity</p>
                    <p className='md:text-left text-center'>Our team reaches out to all our students and alumni through regular newsletters and social media that prominently feature our sponsors, and provides a channel for your business to be marketed to the alumni network and to the students of our college.</p>
                </div>
                <div className='md:w-[23%] animate__animated animate__bounceInLeft'>
                    <p className='text-2xl font-bold uppercase text-center'>CORPORATE SOCIAL RESPONSIBILITY</p>
                    <p className='md:text-left text-center'>As notified under Section 135 under the Companies Act 2013, associating with Team Manab Racing also covers your company’s required CSR activities.</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-start pt-2 pb-20 bg-black'>
                <p className='uppercase font-bold sm:text-5xl text-2xl tracking-widest text-center text-white'>How To Support Us?</p>
                <div className='h-[2px] w-[200px] bg-[#F90602]'>
                </div>
            </div>
            <div className='md:flex justify-center bg-black text-white pb-20'>
                <div className='md:w-1/5'>
                    <p className='text-2xl font-bold uppercase text-center'>Material</p>
                    <p className='text-center'>Supplier of parts used in the construction of a Formula Prototype racecar.</p>
                </div>
                <div className='md:w-1/5 md:mx-20'>
                    <p className='text-2xl font-bold uppercase text-center'>Knowledge</p>
                    <p className='text-center'>Specialist on the related topics can support with technical guidelines.</p>
                </div>
                <div className='md:w-1/5'>
                    <p className='text-2xl font-bold uppercase text-center'>Manufacturing</p>
                    <p className='text-center'>Provide us machines necessary for the manufacturing of special parts.</p>
                </div>
            </div>
            <div className='md:flex justify-center bg-black text-white pb-28'>
                <div className='md:w-1/5'>
                    <p className='text-2xl font-bold uppercase text-center'>Financial Support</p>
                    <p className='text-center'>Support us by making a financial contribution, which actually is really important.</p>
                </div>
                <div className='md:w-1/5 md:ml-20'>
                    <p className='text-2xl font-bold uppercase text-center'>Logistics</p>
                    <p className='text-center'>Aid us by shipping our car within the country and globally for competitions.</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-start pt-2 pb-20 bg-black'>
                <p className='uppercase font-bold sm:text-5xl text-2xl tracking-widest text-center text-white'>Benefits For Sponsors</p>
                <div className='h-[2px] w-[200px] bg-[#F90602]'>
                </div>
            </div>
            <div className='md:flex justify-center bg-black text-white py-10'>
                <p className='md:w-1/5 text-center'>Logo on car</p>
                <p className='md:w-1/5 md:mx-20 text-center'>Logo on Team Apparel</p>
                <p className='md:w-1/5 text-center'>Online Publicity</p>
            </div>
            <div className='md:flex justify-center bg-black text-white md:py-10 py-3'>
                <p className='md:w-1/5 text-center'>Distribution of Company Merchandise</p>
                <p className='md:w-1/5 md:mx-20 text-center'>Promotion at events (FSI+FE)</p>
                <p className='md:w-1/5 text-center'>Promotion at Car launch and college fests</p>
            </div>
            <div className='md:flex justify-center bg-black text-white md:py-10 py-3 pb-32'>
                <p className='md:w-1/5 text-center'>Exclusive Ad Campaigns</p>
                <p className='md:w-1/5 md:mx-20 text-center'>Team and Car Availibility</p>
                <p className='md:w-1/5 text-center'>Themed Body</p>
            </div>
            <div className='flex justify-center pb-32 bg-black'>
                <div className='h-[2px] md:w-[600px] w-[300px] bg-[#F90602]'></div>
            </div>
        </>
    );
};

export default SupportUs;
