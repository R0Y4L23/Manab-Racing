import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-black body-font md:pb-0 pb-10 border-t-[5px] border-[#b6b6b6]">
            <div className="container px-5 mx-auto flex items-center sm:flex-row flex-col">
                <a>
                    <Image src={logo} alt='logo' height={150} width={150} />
                </a>
                <p
                    className="text-white text-lg sm:ml-4 sm:pl-4 sm:border-l-2 text-center sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2024 Manab Racing —
                    <a href="https://www.instagram.com/manabracing/" className="text-white ml-1"
                        rel="noopener noreferrer" target="_blank">@manab.racing</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-3xl">
                    <a href="https://www.instagram.com/manabracing/" className='mx-5' target={"_blank"}
                        rel="noreferrer"><i
                            className="fab fa-instagram cursor-pointer text-[#b6b6b6] hover:text-[#d1222d]"></i></a>
                    <a href="https://www.linkedin.com/company/manab-racing" className='mx-5' target={"_blank"}
                        rel="noreferrer"><i
                            className="fab fa-linkedin-in cursor-pointer text-[#b6b6b6] hover:text-[#d1222d]"></i></a>
                    <a href="https://youtube.com/channel/UCF1g28AvE2Ca89EQQ8S3LFg" className='mx-5' target={"_blank"}
                        rel="noreferrer"><i
                            className="fab fa-youtube cursor-pointer text-[#b6b6b6] hover:text-[#d1222d]"></i></a>
                    <a href="https://www.facebook.com/manabracing/" className='mx-5' target={"_blank"}
                        rel="noreferrer"><i
                            className="fab fa-facebook-f cursor-pointer text-[#b6b6b6] hover:text-[#d1222d]"></i></a>
                </span>
            </div>
        </footer>
    )
}

export default Footer
