export default function Layout({
  children,
  poster
}: {
  children: React.ReactNode
  poster: React.ReactNode
}) {
  return (
    <>
      <h1>Movie Layout</h1>
      {children}
      {poster}
    </>
  )
}
