import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const ImageSlider = ({images,direction}) => {
  return (
    <>
    <Marquee autoFill direction={direction}>
      {images.map((src,ind)=>{
        return <Image className='ml-1 mb-1' priority key={ind} alt='slide' src={src} width={'335'} height={100}/>
      })}
    </Marquee>
    </>
  )
}

export default ImageSlider