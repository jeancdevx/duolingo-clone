import { NextResponse } from 'next/server'

import db from '@/db/drizzle'
import { courses } from '@/db/schema'
import { isAdmin } from '@/lib/admin'

export async function GET() {
  try {
    if (!isAdmin()) return new NextResponse('Unauthorized', { status: 401 })

    const data = await db.query.courses.findMany()

    return NextResponse.json(data)
  } catch (error) {
    console.log('[ERROR] [GET]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    if (!isAdmin()) return new NextResponse('Unauthorized', { status: 401 })

    const body: { title: string; imageSrc: string; id?: number } =
      await req.json()

    const data = await db.insert(courses).values(body).returning()

    return NextResponse.json(data[0])
  } catch (error) {
    console.log('[ERROR] [POST]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}