import { Scroll, Text, Float, Box, MeshDistortMaterial } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useState, useRef } from 'react';
import * as THREE from 'three';
import { useStore } from '../../store/useStore';
import { useAudio } from '../../context/AudioContext';

const ServiceCard = ({ title, description, position, color, icon }) => {
    const [hovered, setHovered] = useState(false);
    const ref = useRef();
    const { playHover } = useAudio();
    const setCursorVariant = useStore((state) => state.setCursorVariant);

    useFrame((state, delta) => {
        if (ref.current) {
            // Sway animation
            ref.current.rotation.y = THREE.MathUtils.lerp(
                ref.current.rotation.y,
                hovered ? 0.2 : 0,
                delta * 2
            );
            ref.current.scale.lerp(
                new THREE.Vector3(hovered ? 1.1 : 1, hovered ? 1.1 : 1, 1),
                delta * 5
            );
        }
    });

    return (
        <group position={position}>
            <Float floatIntensity={1} rotationIntensity={0.5}>
                <mesh
                    ref={ref}
                    onPointerOver={() => {
                        setHovered(true);
                        setCursorVariant('text');
                        playHover();
                    }}
                    onPointerOut={() => {
                        setHovered(false);
                        setCursorVariant('default');
                    }}
                >
                    <boxGeometry args={[3.5, 4.5, 0.2]} />
                    <meshStandardMaterial color="#1f1f1f" transparent opacity={0.9} />
                    {/* Border glow effect using a slightly larger mesh or just edge color? keeping it simple for now */}
                </mesh>

                {/* Decorative distorted orb */}
                <group position={[0, -1, 0.5]}>
                    <mesh>
                        <sphereGeometry args={[0.8, 32, 32]} />
                        <MeshDistortMaterial color={color} speed={2} distort={0.4} />
                    </mesh>
                </group>

                {/* Text Content */}
                <group position={[0, 0, 0.2]}>
                    <Text
                        position={[0, 1.2, 0]}
                        fontSize={0.3}
                        color={color}
                        anchorX="center"
                        anchorY="middle"
                        fontWeight="bold"
                    >
                        {title.toUpperCase()}
                    </Text>
                    <Text
                        position={[0, 0.2, 0]}
                        fontSize={0.15}
                        color="#e5e5e5"
                        anchorX="center"
                        anchorY="middle"
                        textAlign="center"
                        maxWidth={2.8}
                    >
                        {description}
                    </Text>
                </group>
            </Float>
        </group>
    );
};

export const Services = () => {
    const { height } = useThree((state) => state.viewport);

    return (
        <Scroll>
            {/* Position: Page 3 = -height * 3 */}
            <group position={[0, -height * 3, 0]}>
                <Text position={[0, 4, 0]} fontSize={1.2} color="white" anchorX="center" anchorY="middle">
                    SERVICES
                </Text>

                <ServiceCard
                    title="Web Architecture"
                    description="Scalable, high-performance frontend & backend systems using React, Node, and Cloud infrastructure."
                    position={[-4, -0.5, 0]}
                    color="#60a5fa"
                />

                <ServiceCard
                    title="3D Experiences"
                    description="Immersive WebGL journeys with Three.js and R3F that captivate and engage users."
                    position={[0, -0.5, 0]}
                    color="#c084fc"
                />

                <ServiceCard
                    title="UI/UX Engineering"
                    description="Pixel-perfect, accessible interfaces with smooth animations and intuitive interactions."
                    position={[4, -0.5, 0]}
                    color="#f472b6"
                />
            </group>
        </Scroll>
    );
};
