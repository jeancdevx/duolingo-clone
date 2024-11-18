import { NextResponse } from 'next/server'

import { eq } from 'drizzle-orm'

import db from '@/db/drizzle'
import { challengeOptions } from '@/db/schema'
import { isAdmin } from '@/lib/admin'

export async function GET(
  req: Request,
  { params: { challengeOptionId } }: { params: { challengeOptionId: number } }
) {
  try {
    if (!isAdmin()) return new NextResponse('Unauthorized', { status: 401 })

    const data = await db.query.challengeOptions.findFirst({
      where: eq(challengeOptions.id, challengeOptionId)
    })

    return NextResponse.json(data)
  } catch (error) {
    console.log('[ERROR] [GET]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function PUT(
  req: Request,
  { params: { challengeOptionId } }: { params: { challengeOptionId: number } }
) {
  try {
    if (!isAdmin()) return new NextResponse('Unauthorized', { status: 401 })

    const body: { title?: string; imageSrc?: string; id?: number } =
      await req.json()

    const data = await db
      .update(challengeOptions)
      .set(body)
      .where(eq(challengeOptions.id, challengeOptionId))
      .returning()

    return NextResponse.json(data[0] || null)
  } catch (error) {
    console.log('[ERROR] [PUT]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params: { challengeOptionId } }: { params: { challengeOptionId: number } }
) {
  try {
    if (!isAdmin()) return new NextResponse('Unauthorized', { status: 401 })

    const data = await db
      .delete(challengeOptions)
      .where(eq(challengeOptions.id, challengeOptionId))
      .returning()

    return NextResponse.json(data[0])
  } catch (error) {
    console.log('[ERROR] [DELETE]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
