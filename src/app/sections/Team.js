import React from 'react'
import Marquee from 'react-fast-marquee'
import TeamItem from '../components/TeamItem'
import Footer from './Footer'

const Team = () => {
  return (
    <>
      <div className='m-3 flex flex-wrap items-center justify-center bg-[#c1ffb3] rounded-[50px]  overflow-hidden pb-[50px]'>
        <div className='bg-[#c1ffb3] text-black py-3'>
          <Marquee autoFill>
            <h2 className='font-cc text-2xl md:text-5xl my-5 w-fit'>MEET THE TEAM ·&nbsp;</h2>
          </Marquee>
        </div>
        <div className='flex flex-wrap justify-center items-center'>
          <TeamItem image={'/image.png'} name={'@ShivaRK'} position={'Web developer'}/>
          <TeamItem image={'/image.png'} name={'@ShivaRK'} position={'Web developer'}/>
          <TeamItem image={'/image.png'} name={'@ShivaRK'} position={'Web developer'}/>
          <TeamItem image={'/image.png'} name={'@ShivaRK'} position={'Web developer'}/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Team