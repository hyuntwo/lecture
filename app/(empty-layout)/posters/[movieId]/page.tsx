import Image from 'next/image'
import axios from 'axios'
// params는 promise instance
// await 키워드를 사용해야만 값을 얻을 수 있음

export default async function Poster({
  params
}: {
  params: { movieId: string }
}) {
  const { movieId } = await params
  const { data: movie } = await axios(
    `https://omdbapi.com?apikey=7035c60c&i=${movieId}`
  )
  return (
    <>
      <Image
        src={movie.Poster.replace('SX300', 'SX1500')}
        alt={movie.Title}
        width={1500}
        height={1500 * 1.5}
      />
    </>
  )
}
