import { create } from 'zustand';

export const useStore = create((set) => ({
    section: 0,
    setSection: (section) => set({ section }),

    // Navigation
    targetSection: null,
    setTargetSection: (section) => set({ targetSection: section }),

    // Progress of the entire journey (0 to 1)
    scrollProgress: 0,
    setScrollProgress: (progress) => set({ scrollProgress: progress }),

    // Animation states
    // Animation states
    experienceStarted: false,
    setExperienceStarted: (status) => set({ experienceStarted: status }),
    isIntroDone: false,
    setIsIntroDone: (status) => set({ isIntroDone: status }),

    // Cursor State
    cursorVariant: 'default',
    setCursorVariant: (variant) => set({ cursorVariant: variant }),
}));
