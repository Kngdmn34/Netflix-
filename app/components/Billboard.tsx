import React from 'react'
import Image from 'next/image'

const Billboard = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const response = await data.json()
    console.log(response[5])

    const imagePath = `https://image.tmdb.org/t/p/original`

    return (
        <>
            <div className='hidden lg:flex relative cursor-default  w-full h-screen overflow-hidden '>
                <Image className='' src={imagePath + response.results[15].backdrop_path} quality={100} priority fill={true} alt='background' />
                <div className='absolute bg-gradient-to-r from-neutral-900 from-35%     flex flex-col left-0 z-10 w-1/2 min-h-screen   justify-center items-center '>
                    <div className='text-white'>
                        <h1 className='text-6xl tracking-wide font-semibold' >{response.results[15].title.toUpperCase()}</h1>
                        <span className='flex drop-shadow-lg flex-row mx-6 space-x-10'>
                            <h2 className='font-semibold  text-green-600'>{Math.round(response.results[15].popularity / 1000 * 100)} % Match</h2>
                            <h2>{response.results[15].release_date.slice(0, 4)}</h2>
                            <h2 className='bg-gray-900 border border-gray-300 px-1'>4K Ultra HD</h2>
                            <h2 className='bg-gray-900 border border-gray-300 px-1'>{(response.results[15].vote_average.toFixed(1))} </h2>
                        </span>


                    </div>
                    <br />
                    <p className='indent-4 text-neutral-200 drop-shadow-lg text-xl mx-6 '>
                        {(response.results[15].overview).slice(0, 300)}
                    </p>


                </div>
            </div>
            <div className='relative w-full h-96 lg:hidden'>
                <Image className='filter brightness-75' src={imagePath + response.results[15].backdrop_path} quality={100} priority fill={true} alt='background' />
                <div className='absolute mx-6 flex flex-col justify-center items-center left-0 z-10 w-1/2 h-96 backdrop-blur-sm'>
                    <div className='text-white drop-shadow-md'>
                        <h1 className='text-xl tracking-wide font-semibold whitespace-nowrap' >{response.results[15].title.toUpperCase()}</h1>
                        <span className='flex drop-shadow-lg flex-row space-x-4 '>
                            <h2 className='font-semibold  text-green-600'>{Math.round(response.results[15].popularity / 1000 * 100)} % Match</h2>
                            <h2>{response.results[15].release_date.slice(0, 4)}</h2>

                            <h2 className='bg-gray-900 border border-gray-300 px-1'>{(response.results[15].vote_average.toFixed(1))} </h2>
                        </span>
                    </div>
                    <br />
                    <p className=' indent-4 text-white text-md '>
                        {(response.results[15].overview).slice(0, 100)}...
                    </p>

                </div>

            </div>
        </>
    )
}

export default Billboard