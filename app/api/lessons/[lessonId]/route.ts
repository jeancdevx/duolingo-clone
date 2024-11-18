import { NextResponse } from 'next/server'

import { eq } from 'drizzle-orm'

import db from '@/db/drizzle'
import { lessons } from '@/db/schema'
import { isAdmin } from '@/lib/admin'

export async function GET(
  req: Request,
  { params: { lessonId } }: { params: { lessonId: number } }
) {
  try {
    if (!isAdmin()) return new NextResponse('Unauthorized', { status: 401 })

    const data = await db.query.lessons.findFirst({
      where: eq(lessons.id, lessonId)
    })

    return NextResponse.json(data)
  } catch (error) {
    console.log('[ERROR] [GET]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function PUT(
  req: Request,
  { params: { lessonId } }: { params: { lessonId: number } }
) {
  try {
    if (!isAdmin()) return new NextResponse('Unauthorized', { status: 401 })

    const body: { title?: string; imageSrc?: string; id?: number } =
      await req.json()

    const data = await db
      .update(lessons)
      .set(body)
      .where(eq(lessons.id, lessonId))
      .returning()

    return NextResponse.json(data[0] || null)
  } catch (error) {
    console.log('[ERROR] [PUT]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params: { lessonId } }: { params: { lessonId: number } }
) {
  try {
    if (!isAdmin()) return new NextResponse('Unauthorized', { status: 401 })

    const data = await db
      .delete(lessons)
      .where(eq(lessons.id, lessonId))
      .returning()

    return NextResponse.json(data[0])
  } catch (error) {
    console.log('[ERROR] [DELETE]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
