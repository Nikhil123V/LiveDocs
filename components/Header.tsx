import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Header = ({children,className}:HeaderProps) => {

  
  return (
    <div className={cn('header')} >
       <Link href='/' className="md:flex-1">
        <Image 
          src="/assets/icons/icon1.jpg"
          alt="Logo with name"
          width={120}
          height={32}
          className="hidden md:block mt-4 rounded-md "
        />
        <Image 
          src="/assets/images/logo.png"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden mt-3 rounded-xl"
        />
      </Link>
        {children}

    </div>
  )
}

export default Header