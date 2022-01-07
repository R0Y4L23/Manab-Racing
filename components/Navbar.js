/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import logo from "../assets/logo.png"
import Image from 'next/image'
import DrawerComponent from './Drawer'

const Navbar = () => {
    const [visible, setVisible] = React.useState(false);
    const onClose = () => {
        setVisible(false);
    };
    const onVisible = () => {
        setVisible(true);
    };
    return (
        <>
            <div className='flex justify-between items-center px-20 bg-black text-white'>
                <div className='lg:w-1/5 md:w-2/5 w-1/2 transform lg:translate-x-0 sm:-translate-x-10 -translate-x-14'>
                    <Image src={logo} width={200} height={200} />
                </div>
                <div
                    className='md:flex hidden justify-between 2xl:w-2/5 lg:w-3/5 w-[1000px] xl:text-xl text-base items-center transform translate-y-2 lg:translate-x-40 '>
                    <p className='text-[#d1222d] cursor-pointer'>Home</p>
                    <p className='cursor-pointer hover:text-[#d1222d]'>Formula Student</p>
                    <p className='cursor-pointer hover:text-[#d1222d]'>Our Team</p>
                    <p className='cursor-pointer hover:text-[#d1222d]'>Our Sponsors</p>
                    <p className='cursor-pointer hover:text-[#d1222d]'>Support Us</p>
                </div>
                <div
                    className='md:flex hidden justify-between w-2/5 2xl:px-40 lg:px-28  2xl:text-6xl lg:text-4xl text-2xl items-center transform lg:translate-x-36 translate-x-16'>
                    <a href="https://instagram.com/manab.racing?utm_medium=copy_link" target={"_blank"}
                        rel="noreferrer"><i
                            className="fab fa-instagram cursor-pointer text-[#b6b6b6] hover:text-[#d1222d]"></i></a>
                    <a href="https://www.linkedin.com/company/manab-racing" target={"_blank"} rel="noreferrer"><i
                        className="fab fa-linkedin-in cursor-pointer text-[#b6b6b6] hover:text-[#d1222d]"></i></a>
                    <a href="https://youtube.com/channel/UCF1g28AvE2Ca89EQQ8S3LFg" target={"_blank"} rel="noreferrer"><i
                        className="fab fa-youtube cursor-pointer text-[#b6b6b6] hover:text-[#d1222d]"></i></a>
                    <a href="https://www.facebook.com/manabracing/" target={"_blank"} rel="noreferrer"><i
                        className="fab fa-facebook-f cursor-pointer text-[#b6b6b6] hover:text-[#d1222d]"></i></a>
                </div>
                <div className='md:hidden block w-1/2 text-right'>
                    <i className="fas fa-bars sm:text-5xl text-3xl transform sm:translate-x-0 translate-x-10 text-[#d1222d]"
                        onClick={onVisible}></i>
                </div>
            </div>
            <DrawerComponent visible={visible} onClose={onClose} />
        </>
    )
}

export default Navbar
