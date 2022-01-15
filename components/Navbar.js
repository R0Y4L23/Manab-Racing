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
            <div className='flex justify-center items-center bg-black text-white lg:h-40 h-32 border-b-[7px] border-[#b6b6b6] animate__animated animate__jackInTheBox'>
                <div className='lg:w-auto w-2/6'>
                    <Image src={logo} width={175} height={175} />
                </div>
                <div
                    className='lg:w-auto w-3/6 md:flex hidden lg:justify-center justify-between xl:text-lg lg:text-base text-[10px] items-center text-center 2xl:mx-32 lg:mx-10 mx-5'>
                    <p className='text-[#d1222d] cursor-pointer 2xl:mx-6 lg:mx-4'>Home</p>
                    <p className='cursor-pointer hover:text-[#d1222d] 2xl:mx-6 lg:mx-4'>Formula Student</p>
                    <p className='cursor-pointer hover:text-[#d1222d] 2xl:mx-6 lg:mx-4'>Our Cars</p>
                    <p className='cursor-pointer hover:text-[#d1222d] 2xl:mx-6 lg:mx-4'>Our Team</p>
                    <p className='cursor-pointer hover:text-[#d1222d] 2xl:mx-6 lg:mx-4'>Our Sponsors</p>
                    <p className='cursor-pointer hover:text-[#d1222d] 2xl:mx-6 lg:mx-4'>Support Us</p>
                </div>
                <div
                    className='md:flex hidden justify-center 2xl:text-4xl lg:text-2xl text-base items-center lg:w-auto w-2/6'>
                    <a href="https://instagram.com/manab.racing?utm_medium=copy_link" target={"_blank"}
                        rel="noreferrer"><i
                            className="fab fa-instagram cursor-pointer text-[#b6b6b6] hover:text-[#d1222d] 2xl:mx-6 mx-3"></i></a>
                    <a href="https://www.linkedin.com/company/manab-racing" target={"_blank"} rel="noreferrer"><i
                        className="fab fa-linkedin-in cursor-pointer text-[#b6b6b6] hover:text-[#d1222d] 2xl:mx-6 mx-3"></i></a>
                    <a href="https://youtube.com/channel/UCF1g28AvE2Ca89EQQ8S3LFg" target={"_blank"} rel="noreferrer"><i
                        className="fab fa-youtube cursor-pointer text-[#b6b6b6] hover:text-[#d1222d] 2xl:mx-6 mx-3"></i></a>
                    <a href="https://www.facebook.com/manabracing/" target={"_blank"} rel="noreferrer"><i
                        className="fab fa-facebook-f cursor-pointer text-[#b6b6b6] hover:text-[#d1222d] 2xl:mx-6 mx-3"></i></a>
                </div>
                <div className='md:hidden block w-1/2 text-right'>
                    <i className="fas fa-bars sm:text-5xl text-3xl text-[#d1222d]"
                        onClick={onVisible}></i>
                </div>
            </div>
            <DrawerComponent visible={visible} onClose={onClose} />
        </>
    )
}

export default Navbar
