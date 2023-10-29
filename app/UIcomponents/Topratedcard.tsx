import Image from 'next/image'
import Link from 'next/link'


interface MovieProps {
    id: number
    title: string
    original_language: string
    poster_path: string,
    backdrop_path: string


}

const Topratedcard: React.FC<MovieProps> = ({ id, title, original_language, poster_path, backdrop_path }) => {



    const imagePath = `https://image.tmdb.org/t/p/original`
    return (
        <div className='rounded-md cursor-pointer '>
            <Link href={`/${id}`}>
                <div className='lg:hover:scale-110  transition-transform'>
                    <Image className='relative filter brightness-75  rounded-md' src={imagePath + poster_path} alt={title} height={250} width={250} />
                    <br />
                    <div className='static  '>
                        <h1 className=' drop-shadow-xl   font-semibold top-2.5 z-10 text-neutral-200'>{title}</h1>
                    </div>

                </div>
            </Link>

        </div>
    )
}

export default Topratedcard