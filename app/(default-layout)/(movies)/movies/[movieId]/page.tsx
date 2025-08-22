import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

interface Movie {
  Title: string
  Plot: string
  Poster: string
  imdbID: string
}

export default async function MovieDetails({
  params,
  searchParams
}: {
  params: Promise<{ movieId: string }>
  searchParams: Promise<{ plot: string }>
}) {
  const { movieId } = await params
  const { plot } = await searchParams

  await new Promise(resolve => setTimeout(resolve, 1000))
  const { data: movie } = await axios<Movie>(
    `https://omdbapi.com?apikey=7035c60c&i=${movieId}&plot=${plot}`
  )

  // throw new Error('Error 발생')

  return (
    <>
      <h1 className="text-[50px] font-bold">{movie.Title}</h1>
      <Link href={`/posters/${movie.imdbID}`}>
        <Image
          src={movie.Poster.replace('SX300', 'SX500')}
          alt={movie.Title}
          width={500}
          height={500 * 1.5}
        />
      </Link>
      <p>{movie.Plot}</p>
    </>
  )
}
