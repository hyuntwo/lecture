import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  return Response.json([
    { name: 'Neo', age: 22 },
    { name: 'Evan', age: 17 }
  ])
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  return Response.json({ ...body, createdAt: new Date().toISOString() })
}

// http://localhost:3000/api/users
