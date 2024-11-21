import Image from 'next/image'
import React from 'react'
import logomarca from '../../public/logomarca.webp'
import { CircleUserRound } from 'lucide-react'

const Header = () => {
  return (
    <div className='header'>
        <div className='w-full'>
            <Image 
                src={logomarca} 
                alt='logo' 
                width={80} 
                height={80} 
                className='logo' 
            />
        </div>

        <div className='title w-full text-center'>
            <h1>Agro Coop Solutions</h1>
        </div>

        <div className='w-full flex justify-end p-8'>
            <CircleUserRound size={32} />
        </div>
        
    </div>
  )
}

export default Header
