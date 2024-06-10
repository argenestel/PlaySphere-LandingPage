import React from 'react'
import Marquee from 'react-fast-marquee'
import TeamItem from '../components/TeamItem'
import Footer from './Footer'

const team = [{
  "image": "/1.png",
  "name": "@ShivaRK",
  "position": "Web developer"
}, {
  "image": "/5.png",
  "name": "@ShivaRK",
  "position": "Web developer"
}, {
  "image": "/9.png",
  "name": "@ShivaRK",
  "position": "Web developer"
}, {
  "image": "/12.png",
  "name": "@ShivaRK",
  "position": "Web developer"
}]

const Team = () => {
  return (
    <>
      <div id='team' className='m-3 flex flex-wrap items-center justify-center rounded-[50px] bg-gradient-to-br from-pink-300 to-cyan-300 overflow-hidden pb-[50px]'>
        <div className='bg-gradient-to-r from-soft-pink to-soft-cyan text-black py-3'>
          <Marquee autoFill>
            <h2 className='font-cc text-2xl md:text-5xl my-5 w-fit'>MEET THE TEAM ·&nbsp;</h2>
          </Marquee>
        </div>
        <div className='w-full bg-black h-[7px]'>

        </div>
        <div className='flex flex-wrap justify-center items-center'>
          {team.map((e,ind)=>{
            return <TeamItem key={ind} image={e.image} name={e.name} position={e.position} />
          })}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Team