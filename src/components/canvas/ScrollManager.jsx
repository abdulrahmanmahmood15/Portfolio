import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect } from 'react';
import { useStore } from '../../store/useStore';

export const ScrollManager = ({ pages }) => {
    const data = useScroll();
    const section = useStore((state) => state.section);
    const setSection = useStore((state) => state.setSection);
    const setScrollProgress = useStore((state) => state.setScrollProgress);
    const targetSection = useStore((state) => state.targetSection);
    const setTargetSection = useStore((state) => state.setTargetSection);

    useFrame(() => {
        // Current scroll progress (0 to 1)
        const progress = data.offset;
        setScrollProgress(progress);

        // Sync scroll to section state
        const curSection = Math.floor(data.offset * pages);
        if (curSection !== section && curSection < pages) {
            setSection(curSection);
        }

        // Handle programmatic scroll jump
        if (targetSection !== null) {
            const viewportHeight = data.el.clientHeight;
            const targetTop = targetSection * viewportHeight;

            data.el.scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });

            setTargetSection(null);
        }
    });

    return null;
};
