import Image from 'next/image'
import React from 'react'

const TeamItem = ({ image, name, position }) => {
    return (
        <>
            <div className='bg-black overflow-hidden rounded-[30px] relative w-[300px] h-[400px] m-[10px]'>
                <Image src={image} layout='fill' objectFit='cover' />
                <div className='absolute bottom-0 w-full bg-black p-5 flex flex-col items-center justify-center'>
                    <h4 className='text-soft-cyan text-xl font-cc'>{name}</h4>
                    <p className='font-dmmono text-sm text-gray-200'>{position}</p>
                </div>
            </div>
        </>
    )
}

export default TeamItem