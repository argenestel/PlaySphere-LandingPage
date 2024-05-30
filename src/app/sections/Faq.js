import React from 'react'
import FaqItem from '../components/FaqItem'

const Faq = () => {
  return (
    <>
      <div className='m-3  border-2 flex flex-wrap items-center justify-center border-[#c1ffb3] rounded-[50px] md:rounded-[100px] overflow-hidden p-[20px] md:p-[50px]'>
        <div className='w-full p-10'>
          <h4 className='font-cc text-2xl md:text-4xl my-10 text-[#c1ffb3]'>GOT QUESTIONS?</h4>
          <div className='transition'>
            <FaqItem ques={'How do I purchase NFTs from this collection?'} ans={'To purchase NFTs from this collection, you need a cryptocurrency wallet compatible with the blockchain hosting the NFTs - Aptos. Visit supported NFT marketplace, connect your wallet, and bid or purchase the NFTs using cryptocurrency.'}/>
            <FaqItem ques={'How do I purchase NFTs from this collection?'} ans={'To purchase NFTs from this collection, you need a cryptocurrency wallet compatible with the blockchain hosting the NFTs - Aptos. Visit supported NFT marketplace, connect your wallet, and bid or purchase the NFTs using cryptocurrency.'}/>
            <FaqItem ques={'How do I purchase NFTs from this collection?'} ans={'To purchase NFTs from this collection, you need a cryptocurrency wallet compatible with the blockchain hosting the NFTs - Aptos. Visit supported NFT marketplace, connect your wallet, and bid or purchase the NFTs using cryptocurrency.'}/>
            <FaqItem ques={'How do I purchase NFTs from this collection?'} ans={'To purchase NFTs from this collection, you need a cryptocurrency wallet compatible with the blockchain hosting the NFTs - Aptos. Visit supported NFT marketplace, connect your wallet, and bid or purchase the NFTs using cryptocurrency.'}/>
            <FaqItem ques={'How do I purchase NFTs from this collection?'} ans={'To purchase NFTs from this collection, you need a cryptocurrency wallet compatible with the blockchain hosting the NFTs - Aptos. Visit supported NFT marketplace, connect your wallet, and bid or purchase the NFTs using cryptocurrency.'}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq