import React from 'react'
import Marquee from 'react-fast-marquee'
import Footer from './Footer'
import Image from 'next/image'

const SneakPeek = () => {
  return (
    <>
      <div id='sneakpeek' className='m-3 flex flex-wrap items-center justify-center rounded-[50px] bg-gradient-to-br from-pink-300 to-cyan-300 overflow-hidden pb-[50px]'>
        <div className='bg-gradient-to-r from-soft-pink to-soft-cyan text-black py-3 w-full'>
          <Marquee autoFill>
            <h2 className='font-cc text-2xl md:text-5xl my-5 w-fit'>SNEAK PEEK ·&nbsp;</h2>
          </Marquee>
        </div>
        <div className='w-full bg-black h-[7px]'>
        </div>
        <div className="flex md:flex-row w-full flex-col justify-evenly items-center py-10">
          <Image alt="qrcode" className="m-4" src='/qr.png' width={250} height={250} />
          <h3 className="text-center font-cc text-xl md:text-3xl text-black uppercase">Scan this QR to bring Victors to your room </h3>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default SneakPeek