import React from 'react';
import axios, { AxiosResponse} from 'axios'

const getAllMovies = async (page:number) => {

    const res: AxiosResponse<{ results: Movie[] }> = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&page=${page}`)
    if (res.data && res.data.results) {
        console.log(res.data.results)
        return res.data.results
    }

return []
}

export default getAllMovies