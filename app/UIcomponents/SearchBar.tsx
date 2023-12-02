'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
//icons
import { IoSearch } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import SearchMovie from '../actions/SearchMovie';

const SearchBar = () => {

    const [query, setQuery] = useState('')
    const router = useRouter()
    const [open, setIsOpen] = useState(false)
    const [movies, setMovies] = useState<Movie[]>([])

    const handleEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.defaultPrevented
        setQuery(event.target.value)
    }

    const InputToggle = () => {
        setIsOpen((prevOpen) => !prevOpen);
        if (!open) {
            setQuery('');
        }
    };


    useEffect(() => {
        const fetchMovies = async () => {
            if (query.trim() === '') {
                setMovies([])
                return;
            }
            try {
                const results = await SearchMovie(query)
                setMovies(results);
            }
            catch (error) {
                console.log('Error')
            }
        }
        fetchMovies()
    }, [query])

    return (
        <div className='relative flex   items-center'>
            <input
                onChange={handleEvent}
                value={query}
                className={`text-sm relative ${open ? `flex z-20 translate-x-0  ease-in-out delay-300 duration-400` : ` opacity-0 translate-x-5`} px-1 rounded-md bg-white/20 backdrop-blur-3xl border-2 `}
            />
            {query.length !== 0 &&
                <div className={`${open ? `w-full   fixed ` : `hidden`}`}>
                    <span className='absolute  z-20 rounded-xl shadow-xl  bg-neutral-950/80 p-2   mx-auto -left-5 top-8'>

                        <ul>
                            {movies.slice(0, 10).map((movie) => (
                                <li onClick={() => router.push(`/${movie.id}`)} className='p-1 border-b cursor-pointer' key={movie.id}>
                                    {movie.title.slice(0, 30)}
                                </li>
                            ))}
                        </ul>



                    </span>
                </div>

            }
            <button className='absolute z-30 right-2'>
                {open ? <TiDeleteOutline onClick={InputToggle} /> : <IoSearch onClick={InputToggle} />}
            </button>


        </div>
    )
}

export default SearchBar