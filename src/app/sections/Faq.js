import React from 'react'
import FaqItem from '../components/FaqItem'

const faqs = [
  {
    "ques": "What is Aptos Victors?",
    "ans": "Aptos Victors is an innovative endless runner game that combines the excitement of augmented reality with the Aptos blockchain. Players take on the role of Victor, a brave hero tasked with defending the decentralized metaverse from the forces of centralization."
  },
  {
    "ques": "How does the game work?",
    "ans": "As you run through the vibrant, virtual world of Aptos Victors, you'll encounter obstacles, enemies, and challenges that you must overcome by jumping, dodging, and collecting power-ups. The game features an immersive augmented reality experience, allowing you to interact with virtual elements in your real-world surroundings."
  },
  {
    "ques": "What are the key features of Aptos Victors?",
    "ans":"• Augmented Reality (AR) integration for an immersive gaming experience\n• Web3 and blockchain integration with the Aptos ecosystem\n• Collectible and composable NFT characters, skins, abilities, and accessories\n• Continuous character progression and upgrade\n• Dynamic, player-driven economy for trading and valuing NFT\n"

  },
  {
    "ques": "What is the Composable Digital Assets standard?",
    "ans": "Aptos Victors leverages the Composable Digital Assets standard, which enables the creation of hierarchical and composable NFTs. Players can collect various types of NFTs, such as characters, skins, abilities, and accessories, and merge or combine them to create unique and powerful assets."
  },
  {
    "ques": "How can I get started with Aptos Victors?",
    "ans": "Stay tuned for the upcoming NFT collection reveal and the opportunity to mint your own Aptos Victor NFT. Early supporters will have the chance to participate in wallet whitelisting for free NFT mints. Join our social media channels and Discord community to stay up-to-date with the latest news and announcements."
  },
  {
    "ques": "Will there be a beta testing phase?",
    "ans": "Yes, Aptos Victors will have a closed beta testing phase where selected players will have the opportunity to try out the game and provide valuable feedback. Details on how to apply for the beta testing will be announced in the future."
  },
  {
    "ques": "How can I get involved in the community?",
    "ans": "We encourage fans and players to actively participate in our community by joining our telegram server, following our social media channels, and engaging with other community members. Share your fan art, cosplay, and user-generated content to showcase your passion for Aptos Victors."
  },
  {
    "ques": "Will there be future updates and expansions?",
    "ans": "Absolutely! Aptos Victors is a continuously evolving project, and we have exciting plans for future updates, expansions, and a [Redacted] high-impact feature that will be revealed at a later date. Stay tuned for more information on how the game will grow and expand over time."
  }
]


const Faq = () => {
  return (
    <>
      <div id='faq' className='m-3  flex flex-wrap items-center justify-center bg-gradient-to-r from-soft-pink to-soft-cyan rounded-[50px] md:rounded-[100px] overflow-hidden p-[2px]'>
        <div className='flex flex-wrap items-center bg-black w-full justify-center rounded-[50px] md:rounded-[100px] overflow-hidden p-[5px] md:p-[50px]'>
          <div className='w-full px-2 md:px-10 p-10'>
            <h4 className='font-cc text-2xl md:text-4xl my-10 text-soft-cyan'>GOT QUESTIONS?</h4>
            <div className='transition'>
              {faqs.map((faq, ind) => {
                return <FaqItem key={ind} ques={faq.ques} ans={faq.ans} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq