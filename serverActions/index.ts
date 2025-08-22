'use server'
import { redirect } from 'next/navigation'

export async function hello() {
  console.log('Hello Server ACtions')
}

export async function signIn(formData: FormData) {
  const id = formData.get('id')
  const password = formData.get('pw')
  console.log(id, password)
  redirect('/')
}
