

import React, { Suspense } from 'react'
import Image from 'next/image';
import { Play } from 'lucide-react';
import { Button } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import CanvasButton from '../UIcomponents/CanvasButton';

type Params = {
    params: {
        id: string
    }

}




const MovieDetail = async ({ params: { id } }: Params) => {



    const imagePath = `https://image.tmdb.org/t/p/original`
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`)
    const res = await response.json()
    console.log(res)

    return (
        <>
            <Suspense fallback={<h2>Loading</h2>}>
                <div className='hidden lg:flex relative cursor-default mt-6  min-h-screen overflow-hidden '>
                    <Image className='filter blur-sm brightness-75' src={imagePath + res.backdrop_path} loading='lazy' quality={100} fill={true} alt='background' />
                    <div className='absolute mx-11 flex  left-0 z-10 min-h-screen   justify-center items-center'>
                        <div className='text-white flex flex-row space-x-48  '>
                            <div className='relative cursor-pointer flex justify-center items-center'>
                                <Image className='relative flex justify-center items-center mx-32 hover:brightness-50 transition-opacity drop-shadow-2xl rounded-sm' loading='eager' src={imagePath + res.poster_path} alt='' height={400} width={400} />
                                <CanvasButton

                                />
                            </div>
                            <div>
                                <h1 className='p-2 font-bold drop-shadow-lg text-5xl'>{res.title}</h1>
                                <br />
                                <h2 className='font-semibold text-2xl italic '>{res.tagline}</h2>
                                <br />
                                <hr className='mt-6' />
                                <div className='mt-6 flex flex-row space-x-20'>
                                    <h3 className='px-1 w-8 bg-gray-900 border border-gray-200'>{res.vote_average !== null ? res.vote_average.toFixed(1) : 'undefined'}</h3>
                                    <h3 className='text-xl drop-shadow-sm'>{res.release_date.slice(0, 4)} </h3>
                                    <h3 className='text-xl drop-shadow-sm'>duration: {(res.runtime / 60).toFixed(0)} Hours and {(res.runtime / 60).toFixed(2).slice(2)} minutes</h3>
                                </div>
                                <br />
                                <p className='drop-shadow-xl text-white whitespace-normal text-xl'>
                                    {res.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Suspense>

            <div>
                <div className='flex  lg:hidden justify-center items-center'>
                    <Image className='filter blur-sm brightness-75' src={imagePath + res.backdrop_path} loading='lazy' quality={100} fill={true} alt='background' />
                    <div className='relative flex justify-center flex-col items-center mt-16'>
                        <Image className='relative flex justify-center items-center drop-shadow-md rounded-sm' loading='eager' src={imagePath + res.poster_path} alt='' height={200} width={200} />
                        <CanvasButton

                        />
                        <h1 className='p-2 text-white font-bold drop-shadow-md text-3xl'>{res.title}</h1>

                        <h3 className='text-lg text-white drop-shadow-sm'>{res.release_date.slice(0, 4)} </h3>
                        <h3 className='text-lg text-white drop-shadow-sm'>duration: {(res.runtime / 60).toFixed(0)} Hours and {(res.runtime / 60).toFixed(2).slice(2)} minutes</h3>
                        <br />
                        <p className=' mx-3 drop-shadow-xl text-white whitespace-normal text-lg'>
                            {(res.overview.slice(0, 200))}...
                        </p>

                    </div>


                </div>
            </div>
        </>
    )
}

export default MovieDetail