/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import logo from "../assets/logo.png"
import Image from 'next/image'
import DrawerComponent from './Drawer'
import { useRouter } from 'next/router'

const Navbar = () => {

    const Router = useRouter()


    const [visible, setVisible] = React.useState(false);
    const onClose = () => {
        setVisible(false);
    };
    const onVisible = () => {
        setVisible(true);
    };
    return (
        <>
            <div className='flex justify-center items-center bg-black text-white lg:h-40 h-32 border-b-[5px] border-[#b6b6b6]'>
                <div className='lg:w-auto w-2/6'>
                    <Image src={logo} width={175} height={175} />
                </div>
                <div
                    className='lg:w-auto w-4/6 md:flex hidden lg:justify-center justify-between xl:text-lg lg:text-base text-[10px] items-center text-center 2xl:mx-32 lg:mx-10 mx-5'>
                    <p className={`${Router.pathname == "/" ? "text-[#d1222d]" : "hover:text-[#d1222d]"} cursor-pointer 2xl:mx-6 lg:mx-4`} onClick={() => { Router.push("/") }}>Home</p>
                    <p className={`cursor-pointer ${Router.pathname == "/formulaStudent" ? "text-[#d1222d]" : "hover:text-[#d1222d]"} 2xl:mx-6 lg:mx-4`} onClick={() => { Router.push("/formulaStudent") }}>Formula Student</p>
                    <p className={`cursor-pointer ${Router.pathname == "/ourCars" ? "text-[#d1222d]" : "hover:text-[#d1222d]"} 2xl:mx-6 lg:mx-4`} onClick={() => { Router.push("/ourCars") }}>Our Cars</p>
                    <p className={`cursor-pointer ${Router.pathname == "/theTeam" ? "text-[#d1222d]" : "hover:text-[#d1222d]"} 2xl:mx-6 lg:mx-4`} onClick={() => { Router.push("/theTeam") }}>The Team</p>
                    <p className={`cursor-pointer ${Router.pathname == "/sponsors" ? "text-[#d1222d]" : "hover:text-[#d1222d]"} 2xl:mx-6 lg:mx-4`} onClick={() => { Router.push("/sponsors") }}>Our Sponsors</p>
                    <p className={`cursor-pointer ${Router.pathname == "/gallery" ? "text-[#d1222d]" : "hover:text-[#d1222d]"} 2xl:mx-6 lg:mx-4`} onClick={() => { Router.push("/gallery") }}>Gallery</p>
                    <p className={`cursor-pointer ${Router.pathname == "/supportUs" ? "text-[#d1222d]" : "hover:text-[#d1222d]"} 2xl:mx-6 lg:mx-4`} onClick={() => { Router.push("/supportUs") }}>Support Us</p>
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
