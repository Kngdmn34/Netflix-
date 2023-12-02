'use server'

import React from 'react'
import axios, { Axios, AxiosResponse } from 'axios';
import qs from 'querystring'



const SearchMovie=async (query: string): Promise<Movie[]> => {
try{
    const response:AxiosResponse<{results:Movie[]}> = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.API_KEY}`)
    if (response.data && response.data.results) {
        return response.data.results
    }
    return []
}
catch(error) {
    console.log('Error', error)
    throw error
}

}

export default SearchMovie