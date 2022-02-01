/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import example from "../assets/example.jpg";
import rohit from "../assets/Rohit.jpg";
import apoorv from "../assets/apoorv.jpg";
import ashish from "../assets/ashish.jpg";
import himanshu from "../assets/Himanshu.jpg";
import tanya from "../assets/tanya.jpg";

import adarsh from "../assets/adarsh.jpg";
import harsh from "../assets/harsh.jpg";
import ankit from "../assets/ankit.jpg";
import wasi from "../assets/wasi.jpg";

import kwahish from "../assets/kwahish.jpg";
import abhinay from "../assets/abhinay.jpeg";

import saurabh from "../assets/saurabh.jpg";

import subham from "../assets/subham.jpeg";

const TheTeam = () => {
    return (
        <>
            <Head>
                <title>The Team | Manab Racing</title>
            </Head>

            <div className='flex flex-col items-center justify-start pt-20 pb-20 bg-black'>
                <p className='uppercase font-bold sm:text-4xl text-2xl tracking-widest text-center text-white animate__animated animate__bounceInUp'>2021-2022</p>
                <div className='h-[2px] w-[200px] bg-[#F90602]'>
                </div>
                <p className='text-white pt-12 text-4xl font-bold uppercase text-center'>Management</p>
            </div>
            <div className='bg-black md:flex justify-center -mb-16'>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={example} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Yash Raj</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Captain</p>
                </div>
            </div>
            <div className='bg-black md:flex justify-center -mb-16'>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={rohit} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Rohit Kumar</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Vice-Captain</p>
                </div>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={apoorv} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Apoorv Anand</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Manager</p>
                </div>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={example} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Kaustav Ghosh</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Sponsor & Media Head</p>
                </div>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={ashish} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Ashish Kumar</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Finance Head</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-start pt-20 pb-20 bg-black'>
                <p className='text-white text-4xl font-bold uppercase text-center'>Technical Heads</p>
            </div>
            <div className='bg-black md:flex justify-center -mb-5'>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={example} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Badal Kumar</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Bodyworks Head</p>
                </div>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={tanya} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Tanya Sinha</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Brakes Head</p>
                </div>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={example} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Rachit Raj</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Electronics Head</p>
                </div>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={himanshu} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Himanshu Kumar</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Engine Head</p>
                </div>
            </div>
            <div className='bg-black md:flex justify-center -mb-5'>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={apoorv} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Apoorv Anand</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Suspension Head</p>
                </div>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={rohit} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Rohit Kumar</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Steering Head</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-start pt-20 pb-20 bg-black'>
                <p className='text-white text-4xl font-bold uppercase text-center'>Vehicle Dynamics Department</p>
            </div>
            <div className='bg-black md:flex justify-center -mb-5'>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={apoorv} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Apoorv Anand</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Head</p>
                </div>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={rohit} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Rohit Kumar</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Head</p>
                </div>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={example} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Manish Kumar</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Head</p>
                </div>
            </div>
            <div className='bg-black md:flex justify-center -mb-5'>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={adarsh} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Adarsh Raj</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                </div>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={harsh} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Harsh Raj</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                </div>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={example} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Priyanshu Mandal</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                </div>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={ankit} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Ankit Kumar</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                </div>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={wasi} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Md. Wasi Amer</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-start pt-20 pb-20 bg-black'>
                <p className='text-white text-4xl font-bold uppercase text-center'>Bodyworks Department</p>
            </div>
            <div className='bg-black md:flex justify-center -mb-5'>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={example} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Badal Kumar</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Head</p>
                </div>
            </div>
            <div className='bg-black md:flex justify-center -mb-5'>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={kwahish} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Khwahish Sharma</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                </div>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={abhinay} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Abhinay Sinha</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                </div>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={example} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Partha Pratim</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                </div>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={example} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Soumava</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-start pt-20 pb-20 bg-black'>
                <p className='text-white text-4xl font-bold uppercase text-center'>Brakes Department</p>
            </div>
            <div className='bg-black md:flex justify-center -mb-5'>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={tanya} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Tanya Sinha</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Head</p>
                </div>
            </div>
            <div className='bg-black md:flex justify-center -mb-5'>
                <div className='md:mx-24 mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={saurabh} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Saurabh Choudhary</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                </div>
                <div className='md:mx-24 mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={example} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Sai Gopal Chhetri</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-start pt-20 pb-20 bg-black'>
                <p className='text-white text-4xl font-bold uppercase text-center'>Electronics Department</p>
            </div>
            <div className='bg-black md:flex justify-center -mb-5'>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={example} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Rachit Raj</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Head</p>
                </div>
            </div>
            <div className='bg-black md:flex justify-center -mb-5'>
                <div className='md:mx-24 mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={subham} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Subham Roy</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                </div>
                <div className='md:mx-24 mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={example} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Soumyadip Samanta</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-start pt-20 pb-20 bg-black'>
                <p className='text-white text-4xl font-bold uppercase text-center'>Engine Department</p>
            </div>
            <div className='bg-black md:flex justify-center -mb-5'>
                <div className='mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={himanshu} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Himanshu Kumar</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Head</p>
                </div>
            </div>
            <div className='bg-black md:flex justify-center -mb-5'>
                <div className='md:mx-24 mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={example} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Deep Raj Bera</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                </div>
                <div className='md:mx-24 mx-8'>
                    <div className='flex justify-center'>
                        <Image className='rounded-full' src={example} height={250} width={250} alt='' />
                    </div>
                    <p className='text-[#F90602] text-center text-3xl font-semibold'>Sreejit Paul</p>
                    <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                </div>
            </div>
        </>
    );
};

export default TheTeam;
