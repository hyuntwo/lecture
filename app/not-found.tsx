'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NotFound() {
  const router = useRouter()
  useEffect(() => {
    router.prefetch('/')
  }, [])

  function handleCick() {
    router.push('/')
  }
  return (
    <>
      <div>NotFound</div>
      <div
        onClick={handleCick}
        onMouseEnter={() => router.prefetch('/')}>
        홈으로
      </div>
      <Link href="/">Home</Link>
    </>
  )
}

// path: 'movies/:id'
// segment 다루기 위해 동적 경로
