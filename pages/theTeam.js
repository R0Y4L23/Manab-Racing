/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Head from 'next/head';

import Image from 'next/image';
import Loading from '../components/loading';
import example from "../assets/user.png";
import rohit from "../assets/Rohit.jpg";
import apoorv from "../assets/apoorv.jpg";
import ashish from "../assets/ashish.jpg";
import himanshu from "../assets/Himanshu.jpg";
import tanya from "../assets/tanya.jpg";

import adarsh from "../assets/adarsh.jpg";
import harsh from "../assets/harsh.jpg";
import ankit from "../assets/ankit.jpg";
import wasi from "../assets/wasi.jpg";

import khwahish from "../assets/khwahish.jpg";
import abhinay from "../assets/abhinay.jpeg";

import saurabh from "../assets/saurabh.jpg";

import subham from "../assets/subham.jpeg";

import priyanshu from "../assets/priyanshu.jpg";
import sai from "../assets/sai.jpg";
import sreejit from "../assets/sreejit.jpg";
import deep from "../assets/deep.jpg";

//import soumava from "../assets/soumava.jpg";
import indrajeet from   "../assets/indrajeet.jpg";
import partha from "../assets/partha.jpg";

//import rohit from "../assets/rohit.jpg";
import manish from "../assets/manish.jpg";
import badal from "../assets/badal.jpg";
import sachin from "../assets/sachin.jpg";
import rachit from "../assets/rachit.jpg";
import yash from "../assets/yash.jpg";
import soumyadip from "../assets/soumyadip.jpg";
import prashant from "../assets/prashant.jpg";
import kaustav from "../assets/kaustav.jpeg";
import shanu from "../assets/shanu.jpg";
import rahul from "../assets/rahul.jpg";
import kaushik from "../assets/kaushik.jpg";
import ritoban from "../assets/ritoban.jpg";
import akanksha from "../assets/akanksha.jpg";
import soham from "../assets/soham.jpg";
import rajeev from "../assets/rajeev.jpg";
import raushan from "../assets/raushan.jpg";
import gaurav from "../assets/gaurav.jpg";
import ajeet from "../assets/ajeet.jpg";
import nasir from "../assets/nasir.jpg";
import sudeshnu from "../assets/sudeshnu.jpg";
import abhishek from "../assets/abhishek.jpg";
import dipraj from "../assets/dipraj.jpg";
import { ANT_MARK } from 'antd/lib/locale-provider';



const TheTeam = () => {

    const [option, setOption] = useState(0)


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
                    <title>The Team | Manab Racing</title>
                </Head>
                
                <div className='flex flex-col items-center justify-start pt-20 pb-20 bg-black'>
                    <div className='flex flex-row justify-center items-center min-[425px]:gap-x-16'>
                        <div className='min-[425px]:scale-[100%] min-[425px]:ml-0 -ml-10 scale-[60%]'>
                            <p onClick={() => { setOption(0) }} className='uppercase cursor-pointer font-bold sm:text-4xl text-2xl tracking-widest text-center text-white animate__animated animate__bounceInUp'>2022-2023</p>
                            {option == 0 && <div className='h-[2px] w-[200px] bg-[#F90602]'>
                            </div>}
                        </div>
                        <div className='min-[425px]:scale-[100%] min-[425px]:ml-0 -ml-10 scale-[60%]'>
                            <p onClick={() => { setOption(1) }} className='uppercase cursor-pointer font-bold sm:text-4xl text-2xl tracking-widest text-center text-white animate__animated animate__bounceInUp'>2021-2022</p>
                            {option == 1 && <div className='h-[2px] w-[200px] bg-[#F90602]'>
                            </div>}
                        </div>
                    </div>
                    <p className='text-white pt-12 text-4xl font-bold uppercase text-center'>Management</p>
                </div>


                {option == 0 && <><div className='bg-black md:flex justify-center -mb-6'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={partha} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Partha Pratim Das</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Captain</p>
                    </div>
                </div>
                    <div className='bg-black md:flex justify-center -mb-2'>
                        <div className='mx-8'>
                            <div className='flex justify-center'>
                                <Image className='rounded-full' src={priyanshu} height={250} width={250} alt='' />
                            </div>
                            <p className='text-[#F90602] text-center text-3xl font-semibold'>Priyanshu Mandal</p>
                            <p className='text-white text-center text-lg transform -translate-y-5'>Vice-Captain</p>
                        </div>
                        <div className='mx-8'>
                            <div className='flex justify-center'>
                                <Image className='rounded-full' src={khwahish} height={250} width={250} alt='' />
                            </div>
                            <p className='text-[#F90602] text-center text-3xl font-semibold'>Khwahish Sharma</p>
                            <p className='text-white text-center text-lg transform -translate-y-5'>Manager</p>
                        </div>
                        <div className='mx-8'>
                            <div className='flex justify-center'>
                                <Image className='rounded-full' src={sreejit} height={250} width={250} alt='' />
                            </div>
                            <p className='text-[#F90602] text-center text-3xl font-semibold'>Sreejit Paul</p>
                            <p className='text-white text-center text-lg transform -translate-y-5'>Sponsor & Media Head</p>
                        </div>
                        <div className='mx-8'>
                            <div className='flex justify-center'>
                                <Image className='rounded-full' src={harsh} height={250} width={250} alt='' />
                            </div>
                            <p className='text-[#F90602] text-center text-3xl font-semibold'>Harsh Raj</p>
                            <p className='text-white text-center text-lg transform -translate-y-5'>Finance Head</p>
                        </div>
                    </div>
                    <div className='bg-black md:flex justify-center -mb-6'>
                        <div className='mx-8'>
                            <div className='flex justify-center'>
                                <Image className='rounded-full' src={ankit} height={250} width={250} alt='' />
                            </div>
                            <p className='text-[#F90602] text-center text-3xl font-semibold'>Ankit Kumar</p>
                            <p className='text-white text-center text-lg transform -translate-y-5'>Cashier</p>
                        </div>
                        <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={deep} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Deep Raj Bera </p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Public Relation</p>
                    </div>
                    </div></>}

                {option == 1 && <><div className='bg-black md:flex justify-center -mb-6'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={yash} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Yash Raj</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Captain</p>
                    </div>
                </div>
                    <div className='bg-black md:flex justify-center -mb-2'>
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
                                <Image className='rounded-full' src={kaustav} height={250} width={250} alt='' />
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
                    </div></>}



                <div className='flex justify-center items-center bg-black pt-20 -mt-5'>
                    <div className='h-[2px] w-[250px] bg-[#F90602]'></div>
                </div>

                <div className='flex flex-col items-center justify-start pt-20 pb-20 bg-black'>
                    <p className='text-white text-4xl font-bold uppercase text-center'>Vehicle Dynamics Department</p>
                </div>

                {option == 0 && <><div className='bg-black md:flex justify-center -mb-2'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={wasi} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Md. Wasi Amer</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Head</p>
                    </div>
                
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={adarsh} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Adarsh Raj</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={indrajeet} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Indrajeet Sen</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={ritoban} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Ritoban Maitra</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                    </div></div></>}

                {option == 1 && <><div className='bg-black md:flex justify-center -mb-5'>
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
                </div>
                    <div className='bg-black md:flex justify-center -mb-5'>
                        <div className='mx-8'>
                            <div className='flex justify-center'>
                                <Image className='rounded-full' src={manish} height={250} width={250} alt='' />
                            </div>
                            <p className='text-[#F90602] text-center text-3xl font-semibold'>Manish Kumar</p>
                            <p className='text-white text-center text-lg transform -translate-y-5'>Co-Head</p>
                        </div>
                        <div className='mx-8'>
                            <div className='flex justify-center'>
                                <Image className='rounded-full' src={sachin} height={250} width={250} alt='' />
                            </div>
                            <p className='text-[#F90602] text-center text-3xl font-semibold'>Sachin Kumar</p>
                            <p className='text-white text-center text-lg transform -translate-y-5'>Co-Head</p>
                        </div>
                        <div className='mx-8'>
                            <div className='flex justify-center'>
                                <Image className='rounded-full' src={prashant} height={250} width={250} alt='' />
                            </div>
                            <p className='text-[#F90602] text-center text-3xl font-semibold'>Prashant Kumar</p>
                            <p className='text-white text-center text-lg transform -translate-y-5'>Co-Head</p>
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
                                <Image className='rounded-full' src={priyanshu} height={250} width={250} alt='' />
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
                    </div></>}



                <div className='flex flex-col items-center justify-start pt-20 pb-20 bg-black'>
                    <p className='text-white text-4xl font-bold uppercase text-center'>Bodyworks Department</p>
                </div>

                {option == 0 && <><div className='bg-black md:flex justify-center -mb-6'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={abhinay} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Abhinay Sinha</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Head</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={shanu} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Shanu Kumar</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={rahul} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Rahul Barua</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                    </div>
                </div></>}




                {option == 1 && <><div className='bg-black md:flex justify-center -mb-5'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={badal} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Badal Kumar</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Head</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={kaustav} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Kaustav Ghosh</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Co-Head</p>
                    </div>
                </div>
                    <div className='bg-black md:flex justify-center -mb-5'>
                        <div className='mx-8'>
                            <div className='flex justify-center'>
                                <Image className='rounded-full' src={khwahish} height={250} width={250} alt='' />
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
                                <Image className='rounded-full' src={partha} height={250} width={250} alt='' />
                            </div>
                            <p className='text-[#F90602] text-center text-3xl font-semibold'>Partha Pratim</p>
                            <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                        </div>
                    </div></>}


                <div className='flex flex-col items-center justify-start pt-20 pb-20 bg-black'>
                    <p className='text-white text-4xl font-bold uppercase text-center'>Brakes Department</p>
                </div>

                {option == 0 && <><div className='bg-black md:flex justify-center -mb-5'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={sai} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Sai Gopal Chhetri</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Head</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={saurabh} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Saurabh Choudhary</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Co-Head</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={dipraj} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Dipraj Yadav</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                    </div>
                </div></>}


                {option == 1 && <><div className='bg-black md:flex justify-center -mb-5'>
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
                                <Image className='rounded-full' src={sai} height={250} width={250} alt='' />
                            </div>
                            <p className='text-[#F90602] text-center text-3xl font-semibold'>Sai Gopal Chhetri</p>
                            <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                        </div>
                    </div></>}


                <div className='flex flex-col items-center justify-start pt-20 pb-20 bg-black'>
                    <p className='text-white text-4xl font-bold uppercase text-center'>Electronics Department</p>
                </div>


                {option == 0 && <><div className='bg-black md:flex justify-center -mb-5'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={subham} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Subham Roy</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Head</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={soumyadip} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Soumyadip Samanta</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Co-Head</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={kaushik} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Kumar Kaushik</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={abhishek} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Abhishek Paul</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                    </div>
                </div></>}


                {option == 1 && <><div className='bg-black md:flex justify-center -mb-5'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={rachit} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Rachit Raj</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Head</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={kaustav} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Kaustav Ghosh</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Co-Head</p>
                    </div>
                </div>
                    <div className='bg-black md:flex justify-center -mb-5'>
                        <div className='md:mx-44 mx-8'>
                            <div className='flex justify-center'>
                                <Image className='rounded-full' src={subham} height={250} width={250} alt='' />
                            </div>
                            <p className='text-[#F90602] text-center text-3xl font-semibold'>Subham Roy</p>
                            <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                        </div>
                        <div className='md:mx-44 mx-8'>
                            <div className='flex justify-center'>
                                <Image className='rounded-full' src={soumyadip} height={250} width={250} alt='' />
                            </div>
                            <p className='text-[#F90602] text-center text-3xl font-semibold'>Soumyadip Samanta</p>
                            <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                        </div>
                    </div></>}


                <div className='flex flex-col items-center justify-start pt-20 pb-20 bg-black'>
                    <p className='text-white text-4xl font-bold uppercase text-center'>Engine Department</p>
                </div>

                {option == 0 && <><div className='bg-black md:flex justify-center -mb-6'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={deep} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Deep Raj Bera</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Head</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={sudeshnu} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Sudeshnu Das</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                    </div>
                </div></>}


                {option == 1 && <><div className='bg-black md:flex justify-center -mb-5'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={himanshu} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Himanshu Kumar</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Head</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={kaustav} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Kaustav Ghosh</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Co-Head</p>
                    </div>
                </div>
                    <div className='bg-black md:flex justify-center -mb-5'>
                        <div className='md:mx-44 mx-8'>
                            <div className='flex justify-center'>
                                <Image className='rounded-full' src={deep} height={250} width={250} alt='' />
                            </div>
                            <p className='text-[#F90602] text-center text-3xl font-semibold'>Deep Raj Bera</p>
                            <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                        </div>
                        <div className='md:mx-44 mx-8'>
                            <div className='flex justify-center'>
                                <Image className='rounded-full' src={sreejit} height={250} width={250} alt='' />
                            </div>
                            <p className='text-[#F90602] text-center text-3xl font-semibold'>Sreejit Paul</p>
                            <p className='text-white text-center text-lg transform -translate-y-5'>Member</p>
                        </div>
                    </div></>}
                    
                    <div className='flex flex-col items-center justify-start pt-20 pb-20 bg-black'>
                  <p className='text-white pt-12 text-4xl font-bold uppercase text-center'>Other Team Member</p>
                </div>


                {option == 0 && <><div className='bg-black md:flex justify-center -mb-6'>
                    <div className='mx-8'>
                    <div className='flex justify-center'>
                            <Image className='rounded-full' src={rajeev} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Rajeev Kumar</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Vehicle Dynamics Member</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={soham} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Soham Mukherjee</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Vehicle Dynamics Member</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={raushan} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Raushan Kumar</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Bodyworks Member</p>
                    </div>
                    </div>
                    <div className='bg-black md:flex justify-center -mb-2'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={gaurav} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Gaurav Kumar Sah</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Engine Member</p>
                    </div>
                
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={akanksha} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Akanksha Kumari</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Brakes Member</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={ajeet} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Ajeet Kumar</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Brakes Member</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={nasir} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Nasir Hussain</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Electronics Member</p>
                    </div>
                    </div></>}


                    
                {option == 1 && <><div className='bg-black md:flex justify-center -mb-6'>
                    <div className='mx-8'>
                    <div className='flex justify-center'>
                            <Image className='rounded-full' src={sudeshnu} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Sudeshnu Das</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Engine Member</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={indrajeet} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Indrajeet Sen</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Vehicle Dynamics Member</p>
                    </div>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={kaushik} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Kumar Kaushik</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Electronics Member</p>
                    </div>
                    </div>
                    <div className='bg-black md:flex justify-center -mb-2'>
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={rahul} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Rahul Barua</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Bodyworks Member</p>
                    </div>
                
                    <div className='mx-8'>
                        <div className='flex justify-center'>
                            <Image className='rounded-full' src={shanu} height={250} width={250} alt='' />
                        </div>
                        <p className='text-[#F90602] text-center text-3xl font-semibold'>Shanu Kumar</p>
                        <p className='text-white text-center text-lg transform -translate-y-5'>Bodyworks Member</p>
                    </div>
                    </div></>}
                     

                  



                    
                    
            </>
        );
    else
        return (
            <Loading />
        )
};

export default TheTeam;
