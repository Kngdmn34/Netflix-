import React from 'react'
import MovieCard from '../UIcomponents/MovieCard'



const Movies = async () => {

    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const response = await data.json()
    console.log(response)


    return (
        <div className='grid gap-3  grid-cols-fluid  text-white'>
            {response.results.map((movie: any) => {
                return (
                    <MovieCard id={movie.id} backdrop_path={movie.backdrop_path} poster_path={movie.poster_path} title={movie.title} key={movie.id} original_language={movie.original_language} />
                )
            })}

        </div>
    )
}

export default Movies