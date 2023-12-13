'use server'

import React from 'react';
import axios, { AxiosResponse} from 'axios'

const getAllMovies = async (page:number) => {

    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&page=${page}`)
    const data = await response.json();

    console.log(data)

    return data

}

export default getAllMovies