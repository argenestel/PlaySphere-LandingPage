import React from 'react'
import FeatureItem from '../components/FeatureItem'

const features = [{
  "title": "3",
  "attribute": "Characters"
},
{
  "title": "Infinite",
  "attribute": "Attributes"
},
{
  "title": "10+",
  "attribute": "Attributes"
},
{
  "title": "TBD",
  "attribute": "Mint price"
}]


const Features = () => {
  return (
    <>
      <div id='features' className='m-3 md:h-[800px] h-fit flex flex-wrap items-center justify-center bg-gradient-to-r from-soft-pink to-soft-cyan  rounded-[50px] md:rounded-[100px] overflow-hidden p-[2px]'>
        <div className='w-full h-full flex flex-wrap items-center justify-center bg-black rounded-[50px] md:rounded-[100px] overflow-hidden'>
          {features.map((feature,ind)=>{
            return <FeatureItem key={ind} title={feature.title} attribute={feature.attribute} />
          })}
        </div>
      </div></>
  )
}

export default Features