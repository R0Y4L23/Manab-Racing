import React from 'react'
import Image from "next/image"
import loading from "../assets/loading.png"

const Loading = () => {
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center bg-black'>
            <div className='rotate'>
                <Image src={loading} alt="Loading" width={150} height={150} />
            </div>
        </div>
    )
}

export default Loading