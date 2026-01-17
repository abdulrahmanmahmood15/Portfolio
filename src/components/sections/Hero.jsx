import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Scroll } from '@react-three/drei';
import { World } from '../canvas/World';

export const Hero = () => {
    const ref = useRef();
    const scroll = useScroll();

    useFrame(() => {
        // Parallax or rotation effect based on scroll
        // scroll.offset is 0..1
        if (ref.current) {
            // Move the world away/down as we scroll
            // ref.current.position.y = -scroll.offset * 10;
            // We can handle complex animations in ScrollManager or here.
            // For now, let's just let it be stationary or slowly rotating in the World component.
        }
    });

    return (
        <Scroll>
            <group ref={ref}>
                <World />
            </group>
        </Scroll>
    );
};
