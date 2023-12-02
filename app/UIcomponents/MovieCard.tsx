'use client'

import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface MovieProps {
    data: Movie[]
}

const MovieCard: React.FC<MovieProps> = ({ data }) => {

    const router = useRouter()
    const [width, setWidth] = useState(0)
    const carousel = useRef(null)

    const imagePath = `https://image.tmdb.org/t/p/original`

    useEffect(() => {
        if (carousel.current) {
            const currentCarousel = carousel.current as HTMLDivElement;
            setWidth(currentCarousel.scrollWidth - currentCarousel.offsetWidth)
        }
    }, [])

    return (
        <div className='mx-3'>
            <motion.div ref={carousel} className='carousel ' >
                <motion.div dragConstraints={{ right: 0, left: -width }} drag="x" className='inner-carousel  space-x-4'>
                    {data.slice(0, 15).map((item) => (
                        <>
                            <motion.div
                                key={item.id}
                                className=' item relative hover:scale-105 transition-transform'
                                onDoubleClick={() => router.push(`/${item.id}`)}
                                style={{
                                    backgroundImage: `url(${imagePath + item.backdrop_path})`
                                    , backgroundSize: 'cover'
                                    , backgroundPosition: 'center'
                                }}

                            >
                                <h1 key={item.id} className='absolute bg-gradient-to-t text-neutral-200 from-neutral-900 flex font-semibold w-full justify-center bottom-0'>{item.title}</h1>
                            </motion.div>

                        </>

                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default MovieCard