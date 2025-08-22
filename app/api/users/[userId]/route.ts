import { NextRequest } from 'next/server'

export default async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params
  return Response.json({ userId })
}
