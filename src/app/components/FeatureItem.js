import React from 'react'

const FeatureItem = ({ title, attribute }) => {
    return (
        <>
            <div className='h-[300px] w-[250px] border-cyan border-t-2 border-b-2 m-5 rounded-[50px] flex flex-col items-center justify-center'>
                <h2 className='text-5xl font-cc text-soft-cyan'>{title}</h2>
                <p className='font-dmmono'>{attribute}</p>
            </div >
        </>
    )
}

export default FeatureItem