'use client'

import React, { useEffect, useState } from 'react'
import { BiLoader } from "react-icons/bi";
import { useInView } from 'react-intersection-observer';
import getAllMovies from '../actions/getAllMovies';
import { Move } from 'lucide-react';
import Image from 'next/image';
import Topratedcard from '../UIcomponents/Topratedcard';
import fetchAllMovies from '../actions/getAllMovies';

const LoadMore = () => {

    const { ref, inView } = useInView()
    const [data, setData] = useState<Movie[]>([])

    useEffect(() => {
        if (inView) {
            const res = fetchAllMovies(2)
            setData({ ...data, ...res })
            console.log(res)

        }
    }, [inView, data])


    return (
        <>
            <section className='w-full'>

                return (
                {data.map((item) => (
                    <Topratedcard key={item.id} item={item} />
                ))}
                )
            </section>

            <section>
                <div ref={ref}>
                    <BiLoader size='40' />
                </div>
            </section>
        </>
    )
}

export default LoadMore