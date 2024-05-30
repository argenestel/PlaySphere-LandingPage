import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const About = () => {
  return (
    <>
      <div className='p-3'>
        <div className='bg-[#c1ffb3] text-black py-3'>
          <Marquee autoFill>
            <h2 className='font-cc text-2xl md:text-5xl my-3 w-fit'>ABOUT US ·&nbsp;</h2>
          </Marquee>
        </div>
        <div className='relative h-[800px] w-full rounded-b-[50px] md:rounded-b-[100px] overflow-hidden'>
          <Image src={'/aboutbg.webp'} layout='fill' objectFit='cover' />
          <div className='opacity-100 font-dmmono  backdrop-blur-xl bg-[#0f0f0f80] z-10 backdrop-blur-xl absolute left-[50%] bottom-0 w-full md:w-fit -translate-x-1/2 rounded-t-[20px] md:p-5 p-2'>
            <p className='m-6'>"Celestials" is a collection of 1919 elven girls divided into Day and Night Elves, thriving in the magical realm of Eldoria. </p>
            <p className='m-6'>These ethereal beings, captured as captivating NFTs, embody the essence of light and shadow. </p>
            <p className='m-6'>Day Elves, radiant and nurturing, tend to nature under the sun's warmth, while Night Elves, mysterious and contemplative, uncover cosmic secrets beneath the moon's glow. </p>
            <p className='m-6'>Each NFT tells a unique story, frozen in moments of care, connection, and wonder. </p>
            <p className='m-6'>Own more than art - own a piece of Eldoria's soul through meticulously detailed pixels. </p>
            <p className='m-6'>Immerse yourself in the enchanting balance of "Celestials," where magic and art intertwine, celebrating the beauty of both day and night.</p></div>
        </div>
      </div>
    </>
  )
}

export default About