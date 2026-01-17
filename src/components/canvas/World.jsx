import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, GradientTexture } from '@react-three/drei';
import * as THREE from 'three';

export const World = () => {
    const ref = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (ref.current) {
            ref.current.rotation.y = t * 0.1;
        }
    });

    return (
        <group ref={ref}>
            {/* Main Digital Globe */}
            <Sphere args={[1.5, 64, 64]}>
                <MeshDistortMaterial
                    color="#4338ca"
                    attach="material"
                    distort={0.3} // Strength, 0 disables the effect (default=1)
                    speed={1.5} // Speed (default=1)
                    roughness={0.2}
                    metalness={0.8}
                >
                    <GradientTexture stops={[0, 1]} colors={['#4338ca', '#a855f7']} size={1024} />
                </MeshDistortMaterial>
            </Sphere>

            {/* Outer wireframe glow */}
            <Sphere args={[1.8, 32, 32]}>
                <meshStandardMaterial
                    color="#6366f1"
                    wireframe
                    transparent
                    opacity={0.1}
                />
            </Sphere>
        </group>
    );
};
