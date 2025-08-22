import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex gap-2.5">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/signin">SignIn</Link>
      <Link href="/movies">Movies</Link>
      <Link href="/movies/tt4520988?plot=full">Sample Movie</Link>
      <Link href="/async">Async 예제</Link>
      <Link href="/paralles">Paralles 예제</Link>
    </header>
  )
}
