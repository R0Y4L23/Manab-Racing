/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import Loading from '../components/loading'

const Gallery = () => {
  const [showPage, setShowPage] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowPage(true)
        }, 1000)
    }, [])

    if (showPage)
    {
        return (
            <>
                <Head>
                    <title>Gallery | Manab Racing</title>
                </Head>
                <section className="text-gray-600 body-font bg-black">
  <div className="container px-5 pt-24 pb-5 mx-auto flex flex-wrap">
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={"gallery/g1.jpg"}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={"gallery/g2.JPEG"}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={"gallery/g3.JPEG"}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={"gallery/g4.jpg"}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={"gallery/g5.JPEG"}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={"gallery/g6.jpeg"}/>
          
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font bg-black">
  <div className="container px-5 pb-4 mx-auto flex flex-wrap">
    <div className="flex flex-wrap md:-m-2 -m-1">
    <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={"gallery/g7.JPEG"}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={"gallery/g8.jpg"}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={"gallery/g12.jpg"}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={"gallery/g10.JPEG"}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={"gallery/g11.jpg"}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={"gallery/g9.JPEG"}/>
        </div>      
   </div>
    </div>
  </div>
</section>





<section className="text-gray-600 body-font bg-black">
  <div className="container px-5 pt-2 pb-2 mx-auto flex flex-wrap">
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={"gallery/g1.jpg"}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={"gallery/g2.JPEG"}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={"gallery/g3.JPEG"}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={"gallery/g4.jpg"}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={"gallery/g5.JPEG"}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={"gallery/g6.jpeg"}/>
          
        </div>
      </div>
    </div>
  </div>
</section>






<section className="text-gray-600 body-font bg-black">
  <div className="container px-5 pt-2 pb-5 mx-auto flex flex-wrap">
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={"gallery/g13.jpg"}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={"gallery/g14.Jpg"}/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={"gallery/g15.Jpg"}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={"gallery/g16.jpg"}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={"gallery/g17.jpg"}/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={"gallery/g18.jpg"}/>
          
        </div>
      </div>
    </div>
  </div>
</section>











            </>
        )
    }
    else
    return (
        <Loading />
    )

}

export default Gallery