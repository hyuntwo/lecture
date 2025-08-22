import { signIn } from '@/serverActions'

export default function SignIn() {
  return (
    <>
      <h1>Sign in page!</h1>
      <form action={signIn}>
        <input
          type="text"
          name="id"
          placeholder="username"
        />
        <input
          type="password"
          name="pw"
          placeholder="password"
        />
        <button type="submit">로그인</button>
      </form>
    </>
    // form의 action사용하면 서버에서 처리할 수 있다. csr 안해도댐
  )
}
