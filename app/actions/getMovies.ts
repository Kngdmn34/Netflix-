import React from 'react';
import axios, { AxiosResponse} from 'axios'

const getMovies = async () => {

    const res: AxiosResponse<{ results: Movie[] }> = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    if (res.data && res.data.results) {
        return res.data.results
    }

return []
}

export default getMovies