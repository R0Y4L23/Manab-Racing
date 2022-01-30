/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import soft_sponsor_1 from "../assets/manab_racing_soft_sponsor_1.png";
import soft_sponsor_2 from "../assets/manab_racing_soft_sponsor_2.png";
import soft_sponsor_3 from "../assets/manab_racing_soft_sponsor_3.png";
import soft_sponsor_4 from "../assets/manab_racing_soft_sponsor_4.png";
import sponsor_1 from "../assets/sponsor_1.png";
import sponsor_2 from "../assets/sponsor_2.png";
import sponsor_3 from "../assets/sponsor_3.png";
import sponsor_4 from "../assets/sponsor_4.png";
import sponsor_5 from "../assets/sponsor_5.png";
import sponsor_6 from "../assets/sponsor_6.png";
import sponsor_7 from "../assets/sponsor_7.png";


const Sponsors = () => {
    return (
        <>
            <Head>
                <title>Our Sponsors | Manab Racing</title>
            </Head>
            <div>

                <div className='flex flex-col items-center justify-start md:my-20 my-12'>
                    <p className='text-center uppercase md:text-5xl text-4xl font-bold'>Thank you For Supporting Us</p>
                    <div className='h-1 w-[250px] bg-[#F90602]'>
                    </div>
                </div>
                <div className='flex justify-center md:my-20 my-12'>
                    <p className='md:w-3/4 w-4/5 md:text-2xl text-lg font-semibold text-center'>Our team had the privilege of being sponsored by some of the industry leaders without whom it would have never been possible for us to access the best possible resources required to satiate our never-ending thirst to do the finest engineering. Ever grateful to their technical and monetary support, each sponsor provides us with unique assistance that goes a long way from getting the tools to testing and getting the car ready in time for the events.</p>
                </div>
                <div className='flex flex-col items-center justify-start md:my-20 my-12'>
                    <p className='uppercase font-bold sm:text-5xl text-3xl animate__animated animate__bounceInLeft'>Our Sponsors</p>
                    <div className='h-1 w-[140px] bg-[#F90602]'>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col justify-center items-center md:gap-60 gap-20 my-10 animate__animated animate__bounceInRight'>
                    <Image src={soft_sponsor_1} alt="" />
                    <Image src={soft_sponsor_2} alt="" />
                </div>
                <div className='flex md:flex-row flex-col justify-center items-center md:gap-60 gap-20 md:mt-32 mt-16 animate__animated animate__bounceInLeft'>
                    <Image src={soft_sponsor_3} alt="" />
                    <Image src={soft_sponsor_4} alt="" />
                </div>

                <div className='flex justify-center md:mt-20 md:mb-20 mt-10 mb-10'>
                    <div className='w-1/4 h-[1px] bg-[#F90602]'>
                    </div>
                </div>

                <div className='flex md:flex-row flex-col justify-center items-center md:gap-60 gap-20 md:my-10 my-5'>
                    <Image src={sponsor_1} alt="" />
                    <Image src={sponsor_2} alt="" />
                </div>
                <div className='flex md:flex-row flex-col justify-center items-center md:gap-60 gap-20 md:mt-24 mt-16'>
                    <Image src={sponsor_3} alt="" />
                    <Image src={sponsor_4} alt="" />
                </div>
                <div className='flex md:flex-row flex-col justify-center items-center md:gap-60 gap-20 md:mt-24 mt-16'>
                    <Image src={sponsor_5} alt="" />
                    <Image src={sponsor_6} alt="" />
                </div>
                <div className='flex md:flex-row flex-col justify-center items-center gap-60 md:mt-20 mt-16'>
                    <Image src={sponsor_7} alt="" />
                </div>

                <div className='flex justify-center mt-20 mb-20'>
                    <div className='w-1/4 h-[1px] bg-[#F90602]'>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sponsors;
