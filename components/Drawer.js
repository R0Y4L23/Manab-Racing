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
                        <p className={`cursor-pointer ${router.pathname == "/supportUs" ? "text-[#d1222d]" : "hover:text-[#d1222d]"}`} onClick={() => { router.push("/supportUs"); onClose() }}>Support Us</p>
                    </div>
                    <div className='w-full flex justify-between text-4xl absolute bottom-5 px-10'>
                        <a href="https://instagram.com/manab.racing?utm_medium=copy_link" target={"_blank"}
                            rel="noreferrer"><i
                                className="fab fa-instagram cursor-pointer text-[#b6b6b6] hover:text-[#d1222d]"></i></a>
                        <a href="https://www.linkedin.com/company/manab-racing" target={"_blank"} rel="noreferrer"><i
                            className="fab fa-linkedin-in cursor-pointer text-[#b6b6b6] hover:text-[#d1222d]"></i></a>
                        <a href="https://youtube.com/channel/UCF1g28AvE2Ca89EQQ8S3LFg" target={"_blank"}
                            rel="noreferrer"><i
                                className="fab fa-youtube cursor-pointer text-[#b6b6b6] hover:text-[#d1222d]"></i></a>
                        <a href="https://www.facebook.com/manabracing/" target={"_blank"} rel="noreferrer"><i
                            className="fab fa-facebook-f cursor-pointer text-[#b6b6b6] hover:text-[#d1222d]"></i></a>
                    </div>
                </div>
            </Drawer>
        </>
    );
}

export default DrawerComponent
