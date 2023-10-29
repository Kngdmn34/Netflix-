import React from 'react';
import Image from 'next/image';
import Logo from '../../public/images/netflix.png';
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='fixed shadow-lg top-0 z-20 bg-gray-900 lg:bg-transparent  items-center border-b-4 lg:border-b-2 border-red-800 text-neutral-300 py-2 w-full align-bottom lg:backdrop-blur-2xl '>
            <div className='flex justify-center items-center lg:hidden'>
                <Link href={'/'}>
                    <Image src={Logo} height={100} width={100} alt='logo' priority />
                </Link>
            </div>
            <div className='flex flex-row justify-between align-bottom'>
                <div className='hidden lg:flex lg:px-11'>
                    <Link href={'/'}>
                        <Image src={Logo} height={100} width={100} alt='logo' priority />
                    </Link>
                </div>

                <div className='hidden lg:flex px-11 pt-1 '>
                    <ul className='flex flex-row space-x-5 '>
                        <Link href={'/'} className=' hover:text-neutral-200'>
                            Home
                        </Link>
                        <li className='cursor-pointer hover:text-neutral-200'>
                            Descover
                        </li>
                        <Link href={'/about'} className=' hover:text-neutral-200'>
                            About
                        </Link>
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Navbar