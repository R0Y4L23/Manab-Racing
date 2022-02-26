import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Loading from '../components/loading';

const OurCars = () => {

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
                    <title>Our Cars | Manab Racing</title>
                </Head>
                <div className='our-cars flex justify-center items-center relative'>
                    <div className='absolute top-0 bg-black h-[80vh] opacity-60 w-full'></div>
                    <p
                        className='uppercase sm:text-6xl text-4xl font-bold text-center text-[#d1222d] tracking-widest z-10 animate__animated animate__bounceInLeft'>
                        MR 05</p>
                </div>
                <div className='bg-black flex justify-center'>
                    <div className='bg-[#141414] xl:w-1/2 lg:w-2/3 w-4/5 my-32 py-16'>
                        <p className='text-center sm:text-5xl text-3xl text-white font-bold'>WEIGHT : 230 KG</p>
                        <div className='flex md:flex-row flex-col items-center justify-between w-full'>
                            <div className='md:w-1/2 w-4/5'>
                                <p className='text-[#d1222d] sm:text-4xl text-2xl pt-12 md:pl-10'>Suspension & Steering</p>
                                <p className='text-white sm:text-xl text-lg pt-2 md:pl-10'>..SLA double wishbone</p>
                                <p className='text-white sm:text-xl text-lg pt-2 md:pl-10'>..Self - designed rack and pinion assembly</p>
                                <p className='text-[#d1222d] sm:text-4xl text-2xl pt-12 md:pl-10'>Engine</p>
                                <p className='text-white sm:text-xl text-lg pt-2 md:pl-10'>..KTM Duke 390 Engine</p>
                                <p className='text-white sm:text-xl text-lg pt-2 md:pl-10'>..Displacement : 390cc</p>
                                <p className='text-white tsm:ext-xl text-lg pt-2 md:pl-10'>..Max torque : 33Nm @ 5500rpm</p>
                                <p className='text-[#d1222d] sm:text-4xl text-2xl pt-12 md:pl-10'>Brakes</p>
                                <p className='text-white sm:text-xl text-lg pt-2 md:pl-10'>..Self design custom rotor</p>
                                <p className='text-white sm:text-xl text-lg pt-2 md:pl-10'>..Egronomic pedal design</p>
                            </div>
                            <div className='md:w-1/2 w-4/5 md:ml-28 ml-0'>
                                <p className='text-[#d1222d] sm:text-4xl text-2xl pt-12 md:pr-10'>Chassis</p>
                                <p className='text-white sm:text-xl text-lg pt-2 md:pr-10'>..AISI - 1020 steel tubular space frame</p>
                                <p className='text-white sm:text-xl text-lg pt-2 md:pr-10'>..Front track - 1200</p>
                                <p className='text-[#d1222d] sm:text-4xl text-2xl pt-12 md:pr-10'>Transmission</p>
                                <p className='text-white sm:text-xl text-lg pt-2 md:pr-10'>..Clutch type : open differential</p>
                                <p className='text-white sm:text-xl text-lg pt-2 md:pr-10'>..Drive system : chain and sprocket based</p>
                                <p className='text-white sm:text-xl text-lg pt-2 md:pr-10 invisible'>abcd</p>
                                <p className='text-[#d1222d] sm:text-4xl text-2xl pt-12 md:pr-10'>Composites</p>
                                <p className='text-white sm:text-xl text-lg pt-2 md:pr-10'>..Glass fiber nose and side pods</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    else
        return (
            <Loading />
        )
}

export default OurCars