// 서체: 4가지 종류있음. (글꼴 계열)
//1. serif - 바탕체  계열
//2. sans-serif - 고딕체
//3. monospace - 고정너비체
//4. cursive - 필기체
import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

const title = 'Next.js 실습 프로젝트'
const description = '삼성전자 React 심화 과정의 Next.js 프로젝트입니다.'
const image = 'https://picsum.photos/200/300'

export const metadata: Metadata = {
  title: 'Next.js 실습 프로젝트', // <title />
  description: '삼성전자 React 심화 과정의 Next.js 프로젝트입니다.', // <meta name="description" content=""/>
  openGraph: {
    title,
    description,
    images: [image]
  }, // 검색엔진이 사용할만한 포맷을 제안한 것이 open graph protocol. 페이스북에서 만듦
  twitter: {
    title,
    description,
    images: [image]
  }
}

const notoSans = Noto_Sans({
  weight: ['400', '700'], // 100~900까지 있음
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${notoSans.className} antialiased`}>{children}</body>
    </html>
  )
}
