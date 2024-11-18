import { auth } from '@clerk/nextjs/server'

export const isAdmin = () => {
  const { userId } = auth()

  if (!userId) return false

  return userId === process.env.CLERK_ADMIN_USER_ID
}
