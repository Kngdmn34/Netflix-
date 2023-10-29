import React from 'react'
import Image from 'next/image'

const Billboard = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const response = await data.json()
    console.log(response[5])

    const imagePath = `https://image.tmdb.org/t/p/original`

    return (
        <>
            <div className='hidden lg:flex relative cursor-default  w-full min-h-screen overflow-hidden '>
                <Image className='filter brightness-75' src={imagePath + response.results[13].backdrop_path} quality={100} priority fill={true} alt='background' />
                <div className='absolute mx-11 flex flex-col left-0 z-10 w-1/2 min-h-screen backdrop-brightness-50  justify-center items-center backdrop-blur-sm'>
                    <div className='text-white drop-shadow-md'>
                        <h1 className='text-6xl tracking-wide font-semibold' >{response.results[13].title.toUpperCase()}</h1>
                        <span className='flex drop-shadow-lg flex-row mx-6 space-x-10'>
                            <h2 className='font-semibold  text-green-600'>{Math.round(response.results[13].popularity / 1000 * 100)} % Match</h2>
                            <h2>{response.results[13].release_date.slice(0, 4)}</h2>
                            <h2 className='bg-gray-900 border border-gray-300 px-1'>4K Ultra HD</h2>
                            <h2 className='bg-gray-900 border border-gray-300 px-1'>{(response.results[13].vote_average.toFixed(1))} </h2>
                        </span>


                    </div>
                    <br />
                    <p className='text-white text-xl mx-6 '>
                        {response.results[13].overview}
                    </p>


                </div>
            </div>
            <div className='relative w-full h-96 lg:hidden'>
                <Image className='filter brightness-75' src={imagePath + response.results[13].backdrop_path} quality={100} priority fill={true} alt='background' />
                <div className='absolute mx-6 flex flex-col justify-center items-center left-0 z-10 w-1/2 h-96 backdrop-blur-sm'>
                    <div className='text-white drop-shadow-md'>
                        <h1 className='text-xl tracking-wide font-semibold whitespace-nowrap' >{response.results[13].title.toUpperCase()}</h1>
                        <span className='flex drop-shadow-lg flex-row space-x-4 '>
                            <h2 className='font-semibold  text-green-600'>{Math.round(response.results[13].popularity / 1000 * 100)} % Match</h2>
                            <h2>{response.results[13].release_date.slice(0, 4)}</h2>

                            <h2 className='bg-gray-900 border border-gray-300 px-1'>{(response.results[13].vote_average.toFixed(1))} </h2>
                        </span>
                    </div>
                    <br />
                    <p className='text-white text-md '>
                        {(response.results[13].overview).slice(0, 100)}...
                    </p>

                </div>

            </div>
        </>
    )
}

export default Billboard