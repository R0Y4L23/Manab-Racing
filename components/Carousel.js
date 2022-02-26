import { Carousel } from 'antd';

import React from 'react'

const CarouselComponent = () => {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  return (
    <div className='border-b-[5px] border-[#b6b6b6] md:block hidden'>
      <Carousel afterChange={onChange}>
        <div className='cont'>
          <div className='overlay'></div>
        </div>
        <div className='cont2'>
          <div className='overlay-2'></div>
        </div>
      </Carousel>
    </div>)
}

export default CarouselComponent



