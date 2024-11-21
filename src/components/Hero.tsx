import Image from 'next/image'
import React from 'react'
import baner from '../../public/baner3.jpg'

const Hero = () => {
  return (
    <div className='baner'>
        <h1 className='slogan'>"Conectando o campo à inovação, fortalecendo cooperativas."</h1>
      <Image src={baner} alt='baner' width={1500} height={96} className='imagem' quality={100} />
    </div>
  )
}

export default Hero
