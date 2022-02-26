import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Loading from '../components/Loading';

const FormulaStudent = () => {

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
                    <title>Formula Student | Manab Racing</title>
                </Head>
                <div className='formula-student flex justify-center items-center relative'>
                    <div className='absolute top-0 bg-black h-[50vh] opacity-60 w-full'></div>
                    <p
                        className='uppercase sm:text-6xl text-4xl font-bold text-center text-white tracking-widest z-10 animate__animated animate__bounceInLeft'>
                        Formula Student</p>
                </div>
                <div className='flex flex-col items-center justify-start pt-10 pb-10 bg-black'>
                    <p className='uppercase font-bold sm:text-4xl text-2xl tracking-widest text-center text-white animate__animated animate__bounceInRight'>About Formula Student</p>
                    <div className='h-[2px] w-[200px] bg-[#F90602]'>
                    </div>
                </div>
                <div className='flex justify-center  pb-16 bg-black'>
                    <p className='sm:w-2/3 w-4/5 sm:text-xl text-base text-white'>Formula Student is the world’s biggest competition for engineers.  The Formula Student is a great challenge for students from all over the world who are constructing their formula racing car in teamwork at their colleges and universities. Every year competitions are held all across the globe. Founded by the «Society of Automotive Engineers» in 1981.  The goal is to develop and provide a platform for student engineers to experience, build, and learn.  During their studies, students    gain and develop skills such as engineering, project management, and teamwork and learn to cope with similar  tasks under time and cost pressure as those that await them later in their professional lives.  To win a competition, it is not only crucial to own the car with the best racing performance and the best constructive solutions in the field. A good financing and sales strategy is just as important as a clear cost report and a detailed description of the construction. The team with the best overall package wins the competition.</p>
                </div>
                <div className='flex flex-col items-center justify-start pb-10 bg-black'>
                    <p className='uppercase font-bold sm:text-4xl text-2xl tracking-widest text-center text-white'>The Competition</p>
                    <div className='h-[2px] w-[200px] bg-[#F90602]'>
                    </div>
                </div>
                <div className='flex flex-col items-center bg-black'>
                    <p className='sm:w-2/3 w-4/5 sm:text-xl text-base text-white'>The teams have to present a coherent overall concept at the events. The competitions are divided into static disciplines, which are made up of a business plan presentation, cost event, and engineering design event. In addition, the dynamic disciplines Skid-Pad, Acceleration, Autocross, and Endurance. With Fuel Efficiency, the consumption during the endurance race is included in the overall rating. Before you can start in the dynamic disciplines, the vehicles are checked for safety by members of the Formula Student jury. The jury is made up of experts from the motorsport, automotive, and supplier industries.</p>
                </div>
            </>
        );
    else
        return (
            <Loading />
        )
};

export default FormulaStudent;
