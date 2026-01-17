import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '../../store/useStore';
import { easing } from 'maath';

export const CameraRig = () => {
    const isIntroDone = useStore((state) => state.isIntroDone);
    const setIsIntroDone = useStore((state) => state.setIsIntroDone);
    const experienceStarted = useStore((state) => state.experienceStarted);

    useFrame((state, delta) => {
        // Only run animation logic if experience has started
        if (!experienceStarted) {
            state.camera.position.set(0, 0, 20); // Hold initial position
            return;
        }

        // Initial Intro Animation
        // Move from z=20 to z=5
        if (!isIntroDone) {
            const done = easing.damp3(
                state.camera.position,
                [0, 0, 5],
                2.5, // Smooth time
                delta
            );
            // Approximate check for completion
            if (Math.abs(state.camera.position.z - 5) < 0.1) {
                setIsIntroDone(true);
            }
        } else {
            // Parallax Effect (Mouse based)
            // Only active if we are in Hero section (or generally if we want subtle movement)
            // state.pointer is normalized device coordinates (-1 to 1)

            easing.damp3(
                state.camera.position,
                [
                    state.pointer.x / 2, // Slight x movement
                    state.pointer.y / 2, // Slight y movement
                    5 // Base z position
                ],
                0.5,
                delta
            );

            state.camera.lookAt(0, 0, 0);
        }
    });

    return null;
}
