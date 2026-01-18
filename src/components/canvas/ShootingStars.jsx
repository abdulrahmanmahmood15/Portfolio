import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ShootingStar = ({ position, speed }) => {
    const ref = useRef();

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.position.x -= speed * delta * 10;
            ref.current.position.y -= speed * delta * 5;

            // Reset if out of view
            if (ref.current.position.x < -50 || ref.current.position.y < -50) {
                ref.current.position.x = 20 + Math.random() * 30;
                ref.current.position.y = 20 + Math.random() * 30;
            }
        }
    });

    return (
        <mesh ref={ref} position={position}>
            <boxGeometry args={[0.5, 0.05, 0.05]} />
            <meshBasicMaterial color="white" />
        </mesh>
    );
};

export const ShootingStars = () => {
    // Create clear specific shooting stars instead of generating them randomly on every render
    const stars = Array.from({ length: 5 }).map((_, i) => ({
        key: i,
        position: [
            10 + Math.random() * 30,
            10 + Math.random() * 30,
            -10 - Math.random() * 10
        ],
        speed: 1 + Math.random()
    }));

    return (
        <group>
            {stars.map((star) => (
                <ShootingStar key={star.key} position={star.position} speed={star.speed} />
            ))}
        </group>
    );
};
