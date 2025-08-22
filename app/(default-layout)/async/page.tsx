import Abc from './Abc'
import Xyz from './Xyz'
import { delay } from '@/utils'
import { Suspense } from 'react'
// 비동기컴포넌트를 출력하는 컴포넌트 suspense
// suspense에 감싸지면 다른 컴포넌트와상호작용을 하지 않음
import Loader from '@/components/Loader'

export default async function Async() {
  await delay(1000)

  return (
    <>
      <h1>Async 페이지 컴포넌트</h1>
      <Suspense
        fallback={
          <Loader
            color="red"
            position="relative"
          />
        }>
        <Abc />
      </Suspense>
      <Suspense
        fallback={
          <Loader
            color="blue"
            position="relative"
          />
        }>
        <Xyz />
      </Suspense>
    </>
  )
}
