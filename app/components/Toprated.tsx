import React, { useEffect } from 'react'
import MovieCard from '../UIcomponents/MovieCard'
import Topratedcard from '../UIcomponents/Topratedcard'
import getAllMovies from '../actions/getAllMovies'

const Toprated = async () => {



    const data = await getAllMovies(1)



    return (
        <div className='w-full'>

            return (
            <div className='w-[96%] mx-auto gap-2 md:grid-cols-4  grid grid-cols-3 lg:grid-cols-5 '>
                {data.map((item) => (
                    <Topratedcard key={item.id} item={item} />
                ))}
            </div>
            )
        </div>
    )
}

export default Toprated