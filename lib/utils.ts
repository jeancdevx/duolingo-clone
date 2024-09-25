import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return new URL(path, process.env.NEXT_PUBLIC_APP_URL).toString()
}

export function formatPoints(points: number) {
  if (points < 1000) return points

  if (points < 1000000) {
    return `${Math.floor(points / 1000)}K`
  }

  return `${Math.floor(points / 1000000)}M`
}
