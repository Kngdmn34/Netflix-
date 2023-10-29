import Image from 'next/image'
import Link from 'next/link'

interface MovieProps {
    id: number
    title: string
    original_language: string
    poster_path: string,
    backdrop_path: string


}

const MovieCard: React.FC<MovieProps> = ({ id, title, original_language, poster_path, backdrop_path }) => {

    const imagePath = `https://image.tmdb.org/t/p/original`
    return (
        <div className='rounded-md cursor-pointer hover:scale-105'>
            <Link href={`/${id}`}>
                <div className='flex justify-center hover:brightness-50 hover:text-neutral-100 hover:text-xl items-center '>
                    <Image className='relative filter brightness-75  rounded-md' src={imagePath + backdrop_path} alt={title} height={300} width={300} />
                    <div className='absolute '>
                        <h1 className=' drop-shadow-xl  font-semibold top-2.5 z-10 text-neutral-200'>{(title.slice(0, 30))}</h1>
                    </div>

                </div>
            </Link>

        </div>
    )
}

export default MovieCard