'use client';
import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
const FaqItem = ({ques,ans}) => {
    const [vis, setVis] = useState(false)
  return (
    <>
        <div className='flex'>
            <div className='flex p-3'>
            <div>
            <GoPlus onClick={()=>{setVis(!vis)}} className={`text-[#c1ffb3] text-[30px] font-bold transition ${vis?'rotate-45':''}`}/>
            </div>
            <div className='flex flex-col  ml-6 transition'>
                <h5 className='font-dmmono text-sm transition'>{ques}</h5>
                <p className={`${vis?'':'hidden'} transition font-dmmono text-xs mt-5 text-gray-300`}>
                    {ans}
                </p>
            </div>
            </div>
        </div>
    </>
  )
}

export default FaqItem