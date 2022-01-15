import { Carousel } from 'antd';

import React from 'react'

const CarouselComponent = () => {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  return (
    <Carousel afterChange={onChange} className='border-b-[5px] border-[#b6b6b6] animate__animated animate__zoomInUp'>
      <div className='cont'>
      </div>
      <div className='cont2'>
      </div>
    </Carousel>)
}

export default CarouselComponent



