import React from 'react'
import BenefitItem from '../components/BenefitItem'

const Benefits = () => {
  return (
    <>
    <div className='m-3 min-h-[800px] border-2 flex flex-wrap items-center justify-center border-[#c1ffb3] rounded-[50px] md:rounded-[100px] overflow-hidden p-[20px]'>
    <BenefitItem title={1919} attribute={'Characters'}/>
    <BenefitItem title={'100+'} attribute={'Attributes'}/>
    <BenefitItem title={'20+'} attribute={'Traits'}/>
    <BenefitItem title={'$99'} attribute={'Mint Price'}/>
    </div>
    </>
  )
}

export default Benefits