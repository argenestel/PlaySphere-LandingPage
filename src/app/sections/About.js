import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const About = () => {
  return (
    <>
      <div className='p-3' id='about'>

        <div className='mt-10'>
          <div className='bg-gradient-to-r from-soft-pink to-soft-cyan text-black py-3'>
            <Marquee autoFill>
              <h2 className='font-cc text-2xl md:text-5xl my-3 w-fit'>APTOS VICTORS ·&nbsp;</h2>
            </Marquee>
          </div>
          <div className='relative h-[800px] w-full rounded-b-[50px] md:rounded-b-[100px] overflow-hidden'>
            <Image src={'/city.jpg'} layout='fill' objectFit='cover' />
            <div className='opacity-100 font-dmmono bg-[#0f0f0f80] z-10 backdrop-blur-xl absolute left-[50%] bottom-0 w-full md:w-fit -translate-x-1/2 rounded-t-[20px] md:p-5 p-2'>
              <p className='m-6'>Aptos Victors is an endless runner game that blends the thrill of augmented reality with the revolutionary world of web3. Step into the shoes of Victor, a courageous hero on a mission to defend the decentralized metaverse from the clutches of centralization and the oppressive forces of Web2. </p>
              <p className='m-6'>As you embark on this exhilarating journey, you will find yourself immersed in a vibrant, virtual representation of the Aptos ecosystem. Dodge treacherous obstacles, leap over perilous gaps, and outmaneuver relentless enemies, all while collecting valuable crypto power-ups and NFT boosts along the way. </p>
              <p className='m-6'>But that is not all – the true power of Aptos Victors lies in its innovative NFT collection, coming soon! These mighty Victors are not just unique digital assets; they are your key to unlocking a whole new realm of in-game perks, bonuses, and customization options. </p>
              <p className='m-6'>But the benefits don't stop there. As you progress through the game, your NFT Victor will level up alongside you, evolving and growing in strength, ensuring that your gaming experience remains fresh, challenging, and utterly captivating. </p>
              <p className='m-6'>Stay tuned for the highly anticipated launch of the Aptos Victors NFT collection and get ready to join the ranks of the decentralized heroes who will shape the future of gaming.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
