import { create } from 'zustand'

interface UseHeartsModalState {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const useHeartsModal = create<UseHeartsModalState>(set => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false })
}))
