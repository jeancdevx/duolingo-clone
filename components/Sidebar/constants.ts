interface SidebarItem {
  label: string
  iconSrc: string
  href: string
}

export const sidebarItems: SidebarItem[] = [
  {
    label: 'Learn',
    iconSrc: '/learn.svg',
    href: '/learn'
  },
  {
    label: 'Leaderboard',
    iconSrc: '/leaderboard.svg',
    href: '/leaderboard'
  },
  {
    label: 'Quests',
    iconSrc: '/quests.svg',
    href: '/quests'
  },
  {
    label: 'Shop',
    iconSrc: '/shop.svg',
    href: '/shop'
  }
]
