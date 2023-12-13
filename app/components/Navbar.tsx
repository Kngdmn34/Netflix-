import React from 'react';
import Image from 'next/image';
import Logo from '../../public/images/netflix.png';
import Link from 'next/link'
import LogoUser from '../../public/images/favicond.png'
import SearchBar from '../UIcomponents/SearchBar';

const Navbar = () => {
    return (
        <nav className='fixed  shadow-lg shadow-red-700 top-0 z-20  bg-transparent  items-center  border-red-800 text-neutral-300 py-2 w-full align-bottom backdrop-blur-md '>
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

                <div className='hidden  md:absolute top-1.5 right-3 md:flex md:justify-end md:items-center px-11 pt-1 '>
                    <span className='flex flex-row space-x-5 '>

                        <SearchBar />



                        <Image src={LogoUser} height={20} width={20} alt='' />

                    </span>

                </div>

            </div>
        </nav>
    )
}

export default Navbar