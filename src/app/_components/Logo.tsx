import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className='flex items-center gap-2'>
        <Image src={'/Microsoft_Loop_logo.svg' } width={30} height={30} alt={'logo'} />
        <h1 className='text-xl font-bold'>Loop</h1>
    </div>
  )
}

export default Logo