import React from 'react';
import Image from 'next/image';
import Logo from '../../public/images/favicond.png'

const Aboutpage = () => {
    return (
        <>
            <div>
                <div className='hidden lg:grid cursor-default justify-center items-center w-full grid-cols-2 gap-4  min-h-screen'>
                    <div className='grid items-center justify-center '>
                        <h1 className='mx-4 text-2xl drop-shadow-md text-neutral-300'> Created By Anas Alaoui {'( KNG DMN 34 )'} </h1>
                        <br />
                        <h2 className='text-lg drop-shadow-md ml-16 text-neutral-300 '>
                            NEXT JS - FLOWBITE - FRAMER MOTION - CANVAS - API - TAILWIND - NEXTUI
                        </h2>

                    </div>
                    <div className=' grid items-center justify-center'>
                        <Image className='drop-shadow-lg animate-pulse' src={Logo} alt='kngdmnLogo' height={400} width={400} />
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-center items-center min-h-screen w-full lg:hidden '>
                    <div className='flex mt-20 flex-col text-neutral-200 items-center space-y-5'>
                        <Image className='animate-pulse' alt='' src={Logo} height={300} width={300} />
                        <h1 className='font-semibold drop-shadow-md' >Created By KNG DMN - Anas Alaoui</h1>
                        <h2 className='italic text-small drop-shadow-md'>Powred By Next JS 14</h2>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutpage