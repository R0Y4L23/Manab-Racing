import React from 'react'
import { useRouter } from 'next/router';
import { Drawer } from 'antd';

const DrawerComponent = ({ visible, onClose }) => {

    const router = useRouter();

    return (
        <>
            <Drawer placement="right" onClose={onClose} visible={visible} size={"100vw"}>
                <div className='relative h-[70vh]'>
                    <div className='text-4xl mt-20'>
                        <p className={`${router.pathname == "/" ? "text-[#d1222d]" : "hover:text-[#d1222d]"} cursor-pointer`} onClick={() => { router.push("/"); onClose() }}>Home</p>
                        <p className={`cursor-pointer ${router.pathname == "/formulaStudent" ? "text-[#d1222d]" : "hover:text-[#d1222d]"}`} onClick={() => { router.push("/formulaStudent"); onClose() }}>Formula Student</p>
                        <p className={`cursor-pointer ${router.pathname == "/ourCars" ? "text-[#d1222d]" : "hover:text-[#d1222d]"}`} onClick={() => { router.push("/ourCars"); onClose() }}>Our Cars</p>
                        <p className={`cursor-pointer ${router.pathname == "/theTeam" ? "text-[#d1222d]" : "hover:text-[#d1222d]"}`} onClick={() => { router.push("/theTeam"); onClose() }}>The Team</p>
                        <p className={`cursor-pointer ${router.pathname == "/sponsors" ? "text-[#d1222d]" : "hover:text-[#d1222d]"}`} onClick={() => { router.push("/sponsors"); onClose() }}>Our Sponsors</p>
                        <p className={`cursor-pointer ${router.pathname == "/gallery" ? "text-[#d1222d]" : "hover:text-[#d1222d]"} 2xl:mx-6 lg:mx-4`} onClick={() => { router.push("/gallery") }}>Gallery</p>
                        <p className={`cursor-pointer ${router.pathname == "/supportUs" ? "text-[#d1222d]" : "hover:text-[#d1222d]"}`} onClick={() => { router.push("/supportUs"); onClose() }}>Support Us</p>
                    </div>
                </div>
            </Drawer>
        </>
    );
}

export default DrawerComponent
