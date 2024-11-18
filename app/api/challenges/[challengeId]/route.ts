import { NextResponse } from 'next/server'

import { eq } from 'drizzle-orm'

import db from '@/db/drizzle'
import { challenges } from '@/db/schema'
import { isAdmin } from '@/lib/admin'

export async function GET(
  req: Request,
  { params: { challengeId } }: { params: { challengeId: number } }
) {
  try {
    if (!isAdmin()) return new NextResponse('Unauthorized', { status: 401 })

    const data = await db.query.challenges.findFirst({
      where: eq(challenges.id, challengeId)
    })

    return NextResponse.json(data)
  } catch (error) {
    console.log('[ERROR] [GET]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function PUT(
  req: Request,
  { params: { challengeId } }: { params: { challengeId: number } }
) {
  try {
    if (!isAdmin()) return new NextResponse('Unauthorized', { status: 401 })

    const body: { title?: string; imageSrc?: string; id?: number } =
      await req.json()

    const data = await db
      .update(challenges)
      .set(body)
      .where(eq(challenges.id, challengeId))
      .returning()

    return NextResponse.json(data[0] || null)
  } catch (error) {
    console.log('[ERROR] [PUT]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params: { challengeId } }: { params: { challengeId: number } }
) {
  try {
    if (!isAdmin()) return new NextResponse('Unauthorized', { status: 401 })

    const data = await db
      .delete(challenges)
      .where(eq(challenges.id, challengeId))
      .returning()

    return NextResponse.json(data[0])
  } catch (error) {
    console.log('[ERROR] [DELETE]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
