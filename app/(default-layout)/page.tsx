'use client'
import axios from 'axios'

interface Movie {
  Title: string
  Year: string
  Poster: string
  imdbID: string
}

interface Movies {
  Search: Movie[]
}

export default function Home() {
  async function init() {
    const movies = await fetchMovies()
    console.log(movies)
  }

  async function fetchMovies() {
    const { data } = await axios<Movies>(
      'https://omdbapi.com?apikey=7035c60c&s=batman'
    )
    return data.Search
  }

  return (
    <>
      <h1 onClick={init}>Home Page!</h1>
    </>
  )
}
