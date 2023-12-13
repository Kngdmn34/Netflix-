'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'





const Topratedcard = ({ item }: { item: Movie }) => {

    const router = useRouter()

    const imagePath = `https://image.tmdb.org/t/p/original`

    return (
        <div className='w-full'>


            <div onClick={() => router.push(`/${item.id}`)} key={item.id} className='lg:hover:scale-105  hover:z-10  transition-transform'>
                <span className='relative'>
                    <Image className='relative filter brightness-75  rounded-md' src={imagePath + item.poster_path} alt='' height={200} width={200} />
                    <h1 className='absolute mx-2 backdrop-blur-3xl drop-shadow-md text-neutral-100 font-semibold bottom-6 left-0 text-tiny  items-center flex justify-center border-2  border-yellow-400 h-9 w-9 rounded-full'>
                        {Math.round(item.vote_average).toFixed(1)}%</h1>
                </span>
                <br />
                <div className=' items-center w-full flex flex-row space-x-3  '>
                    <h1 className=' drop-shadow-xl text-sm   font-semibold top-0 z-10 text-neutral-200'>{item.title}</h1>

                </div>

            </div>



        </div>
    )
}

export default Topratedcard