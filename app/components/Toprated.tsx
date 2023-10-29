import React from 'react'
import MovieCard from '../UIcomponents/MovieCard'
import Topratedcard from '../UIcomponents/Topratedcard'

const Toprated = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`)
    const response = await data.json()
    console.log(response)

    return (
        <div className='flex flex-col justify-center items-center lg:mx-11 lg:grid lg:gap-16 lg:grid-cols-fluid'>
            {response.results.map((movie: any) => {
                return (
                    <Topratedcard id={movie.id} backdrop_path={movie.backdrop_path} poster_path={movie.poster_path} title={movie.title} key={movie.id} original_language={movie.original_language} />
                )
            })}
        </div>
    )
}

export default Toprated