import React from 'react'
import { Drawer } from 'antd';

const DrawerComponent = ({ visible, onClose }) => {

    return (
        <>
            <Drawer placement="right" onClose={onClose} visible={visible} size={"100vw"}>
                <div className='relative h-[70vh]'>
                    <div className='text-4xl mt-20'>
                        <p className='text-[#d1222d] cursor-pointer'>Home</p>
                        <p className='cursor-pointer hover:text-[#d1222d]'>Formula Student</p>
                        <p className='cursor-pointer hover:text-[#d1222d]'>Our Cars</p>
                        <p className='cursor-pointer hover:text-[#d1222d]'>Our Team</p>
                        <p className='cursor-pointer hover:text-[#d1222d]'>Our Sponsors</p>
                        <p className='cursor-pointer hover:text-[#d1222d]'>Support Us</p>
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
