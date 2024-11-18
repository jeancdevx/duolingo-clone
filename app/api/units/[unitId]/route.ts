import { NextResponse } from 'next/server'

import { eq } from 'drizzle-orm'

import db from '@/db/drizzle'
import { units } from '@/db/schema'
import { isAdmin } from '@/lib/admin'

export async function GET(
  req: Request,
  { params: { unitId } }: { params: { unitId: number } }
) {
  try {
    if (!isAdmin()) return new NextResponse('Unauthorized', { status: 401 })

    const data = await db.query.units.findFirst({
      where: eq(units.id, unitId)
    })

    return NextResponse.json(data)
  } catch (error) {
    console.log('[ERROR] [GET]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function PUT(
  req: Request,
  { params: { unitId } }: { params: { unitId: number } }
) {
  try {
    if (!isAdmin()) return new NextResponse('Unauthorized', { status: 401 })

    const body: { title?: string; imageSrc?: string; id?: number } =
      await req.json()

    const data = await db
      .update(units)
      .set(body)
      .where(eq(units.id, unitId))
      .returning()

    return NextResponse.json(data[0] || null)
  } catch (error) {
    console.log('[ERROR] [PUT]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params: { unitId } }: { params: { unitId: number } }
) {
  try {
    if (!isAdmin()) return new NextResponse('Unauthorized', { status: 401 })

    const data = await db.delete(units).where(eq(units.id, unitId)).returning()

    return NextResponse.json(data[0])
  } catch (error) {
    console.log('[ERROR] [DELETE]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
