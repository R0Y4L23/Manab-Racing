/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Loading from '../components/Loading';

import pbd from "../assets/positive_brand_development.png";
import visibility from "../assets/visibility.png";
import ey from "../assets/empowering_youth.png";
import seminar from "../assets/seminar.png";
import connectivity from "../assets/connectivity.png";
import csr from "../assets/csr.png";

import material from "../assets/material.png";
import manufacturing from "../assets/manufacturing.png";
import knowledge from "../assets/knowledge.png";
import financial from "../assets/financial.png";
import logistics from "../assets/logistics.png";

const SupportUs = () => {

    const [showPage, setShowPage] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowPage(true)
        }, 1000)
    }, [])

    if (showPage)
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
                        <div className='mx-auto w-32 my-5'>
                            <Image src={pbd} alt='' height={100} width={100} />
                        </div>
                        <p className='md:text-left text-center text-lg'>We believe that every product or service needs a platform to do something different to reach its customer and build a brand image. Providing support to a student for the project which is working towards an initiative of sustainable engineering will add a positive outlook on your brand.</p>
                    </div>
                    <div className='md:w-[23%] md:mx-20 animate__animated animate__bounceIn'>
                        <p className='text-2xl font-bold uppercase text-center'>Visibility</p>
                        <div className='mx-auto w-32 my-5'>
                            <Image src={visibility} alt='' height={100} width={100} />
                        </div>
                        <p className='md:text-left text-center text-lg'>Our sponsors are constantly promoted on our college campus and regularly participate in national and international Formula SAE competitions and are promoted through Team Manab Racing's social media handles and website. And our sponsor's visibility also includes the Team Manab Racing newsletter, information brochures in the workshop's participation certificate.</p>
                    </div>
                    <div className='md:w-[23%] animate__animated animate__bounceInLeft'>
                        <p className='text-2xl font-bold uppercase text-center'>Empowering Youth</p>
                        <div className='mx-auto w-32 my-5'>
                            <Image src={ey} alt='' height={100} width={100} />
                        </div>
                        <p className='md:text-left text-center text-lg'>Our team helps promote technological advancement among engineering students by providing them the opportunity to gain practical knowledge and practical experience applied in the industry. To create the next group of budding engineers who can play a major role in revolutionizing India's automobile future.</p>
                    </div>
                </div>
                <div className='md:flex justify-center bg-black text-white pb-24'>
                    <div className='md:w-[23%] animate__animated animate__bounceInRight'>
                        <p className='text-2xl font-bold uppercase text-center'>Webinars</p>
                        <div className='mx-auto w-32 my-5'>
                            <Image src={seminar} alt='' height={100} width={100} />
                        </div>
                        <p className='md:text-left text-center text-lg'>Team Manab Racing organizes seminars and workshops throughout the year to spread awareness, show students the practical side of automobile engineering, and here we arrange to provide our sponsors with an alternative to meet and connect with the young minds in our college.</p>
                    </div>
                    <div className='md:w-[23%] md:mx-20 animate__animated animate__bounceIn'>
                        <p className='text-2xl font-bold uppercase text-center'>Connectivity</p>
                        <div className='mx-auto w-32 my-5'>
                            <Image src={connectivity} alt='' height={100} width={100} />
                        </div>
                        <p className='md:text-left text-center text-lg'>Our team reaches out to all our students and alumni through regular newsletters and social media that prominently feature our sponsors, and provides a channel for your business to be marketed to the alumni network and to the students of our college.</p>
                    </div>
                    <div className='md:w-[23%] animate__animated animate__bounceInLeft'>
                        <p className='text-2xl font-bold uppercase text-center'>CORPORATE SOCIAL RESPONSIBILITY</p>
                        <div className='mx-auto w-32 my-5'>
                            <Image src={csr} alt='' height={100} width={100} />
                        </div>
                        <p className='md:text-left text-center text-lg'>As notified under Section 135 under the Companies Act 2013, associating with Team Manab Racing also covers your company’s required CSR activities.</p>
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
                        <div className='mx-auto w-32 my-5'>
                            <Image src={material} alt='' height={100} width={100} />
                        </div>
                        <p className='text-center text-lg'>Supplier of parts used in the construction of a Formula Prototype racecar.</p>
                    </div>
                    <div className='md:w-1/5 md:mx-20'>
                        <p className='text-2xl font-bold uppercase text-center'>Knowledge</p>
                        <div className='mx-auto w-32 my-5'>
                            <Image src={knowledge} alt='' height={100} width={100} />
                        </div>
                        <p className='text-center text-lg'>Specialist on the related topics can support with technical guidelines.</p>
                    </div>
                    <div className='md:w-1/5'>
                        <p className='text-2xl font-bold uppercase text-center'>Manufacturing</p>
                        <div className='mx-auto w-32 my-5'>
                            <Image src={manufacturing} alt='' height={100} width={100} />
                        </div>
                        <p className='text-center text-lg'>Provide us machines necessary for the manufacturing of special parts.</p>
                    </div>
                </div>
                <div className='md:flex justify-center bg-black text-white pb-28'>
                    <div className='md:w-1/5'>
                        <p className='text-2xl font-bold uppercase text-center'>Financial Support</p>
                        <div className='mx-auto w-32 my-5'>
                            <Image src={financial} alt='' height={100} width={100} />
                        </div>
                        <p className='text-center text-lg'>Support us by making a financial contribution, which actually is really important.</p>
                    </div>
                    <div className='md:w-1/5 md:ml-20'>
                        <p className='text-2xl font-bold uppercase text-center'>Logistics</p>
                        <div className='mx-auto w-32 my-5'>
                            <Image src={logistics} alt='' height={100} width={100} />
                        </div>
                        <p className='text-center text-lg'>Aid us by shipping our car within the country and globally for competitions.</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-start pt-2 pb-20 bg-black'>
                    <p className='uppercase font-bold sm:text-5xl text-2xl tracking-widest text-center text-white'>Benefits For Sponsors</p>
                    <div className='h-[2px] w-[200px] bg-[#F90602]'>
                    </div>
                </div>
                <div className='md:flex justify-center bg-black text-white py-10'>
                    <p className='md:w-1/5 text-center text-lg'>Logo on car</p>
                    <p className='md:w-1/5 md:mx-20 text-center text-lg'>Logo on Team Apparel</p>
                    <p className='md:w-1/5 text-center text-lg'>Online Publicity</p>
                </div>
                <div className='md:flex justify-center bg-black text-white md:py-10 py-3'>
                    <p className='md:w-1/5 text-center text-lg'>Distribution of Company Merchandise</p>
                    <p className='md:w-1/5 md:mx-20 text-center text-lg'>Promotion at events (FSI+FE)</p>
                    <p className='md:w-1/5 text-center text-lg'>Promotion at Car launch and college fests</p>
                </div>
                <div className='md:flex justify-center bg-black text-white md:py-10 py-3 pb-32'>
                    <p className='md:w-1/5 text-center text-lg'>Exclusive Ad Campaigns</p>
                    <p className='md:w-1/5 md:mx-20 text-center text-lg'>Team and Car Availibility</p>
                    <p className='md:w-1/5 text-center text-lg'>Themed Body</p>
                </div>
                <div className='flex justify-center pb-32 bg-black'>
                    <div className='h-[2px] md:w-[600px] w-[300px] bg-[#F90602]'></div>
                </div>
            </>
        );
    else
        return <Loading />
};

export default SupportUs;
