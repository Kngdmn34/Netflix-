import React from 'react'
import MovieCard from '../UIcomponents/MovieCard'
import { motion } from 'framer-motion'
import axios, { AxiosResponse } from 'axios'
import getMovies from '../actions/getMovies'



const Movies = async () => {

    const data = await getMovies()

    return (
        <div className='relative w-full'>

            return (
            <MovieCard data={data} />
            )


        </div>
    )
}

export default Movies