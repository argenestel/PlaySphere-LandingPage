import React from 'react'
import FeatureItem from '../components/FeatureItem'
const Features = () => {
  return (
   <>
   <div className='m-3 min-h-[800px] border-2 flex flex-wrap items-center justify-center border-[#c1ffb3] rounded-[50px] md:rounded-[100px] overflow-hidden p-[20px]'>
    <FeatureItem title={1919} attribute={'Characters'}/>
    <FeatureItem title={'100+'} attribute={'Attributes'}/>
    <FeatureItem title={'20+'} attribute={'Traits'}/>
    <FeatureItem title={'$99'} attribute={'Mint Price'}/>
    </div></>
  )
}

export default Features