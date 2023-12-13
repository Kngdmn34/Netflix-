'use client'

import React, { useEffect, useState } from 'react'
import { BiLoader } from "react-icons/bi";
import { useInView } from 'react-intersection-observer';
import getAllMovies from '../actions/getAllMovies';
import { Move } from 'lucide-react';
import Image from 'next/image';
import Topratedcard from '../UIcomponents/Topratedcard';
import fetchAllMovies from '../actions/getAllMovies';

let page = 1;

const LoadMore = () => {

    const { ref, inView } = useInView()
    const [data, setData] = useState<Movie[]>([])

    useEffect(() => {



        if (inView) {
            console.log('reached')
            fetchAllMovies(page).then((res) => {
                setData([...data, ...res.results])
                page++
            })
        }





    }, [inView, data])


    return (
        <>
            <section className='w-[96%] mx-auto  grid gap-3 grid-cols-3 md:grid-cols-5'>
                {data.map((item) => (
                    <Topratedcard key={item.id} item={item} />
                ))}

            </section>

            <section>
                <div ref={ref} className='w-full flex justify-center items-center'>
                    <BiLoader className='text-white animate-spin' size='60' />
                </div>
            </section>
        </>
    )
}

export default LoadMore