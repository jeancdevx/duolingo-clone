import { getTopUsers } from '@/db/queries'
import { formatPoints } from '@/lib/utils'

import { Avatar, AvatarImage } from '@/components/ui/Avatar'

const LeaderboardList = async () => {
  const leaderboardData = getTopUsers()

  const [leaderboard] = await Promise.all([leaderboardData])

  return (
    <>
      {leaderboard.map((userProgress, index) => (
        <div
          key={userProgress.userId}
          className='flex w-full items-center rounded-xl p-2 px-4 hover:bg-gray-200/50'
        >
          <p className='mr-4 font-bold text-lime-700'>{index + 1}.</p>
          <Avatar className='ml-3 mr-6 size-12 border bg-green-500'>
            <AvatarImage
              className='object-cover'
              src={userProgress.userImageSrc}
              alt={userProgress.userName}
            />
          </Avatar>
          <p className='max-w-[400px] flex-1 text-center text-sm font-bold text-neutral-800'>
            {userProgress.userName}
          </p>
          <p className='ml-auto min-w-[48px] text-right text-xs font-bold text-muted-foreground'>
            {formatPoints(userProgress.points)} XP
          </p>
        </div>
      ))}
    </>
  )
}

export default LeaderboardList
