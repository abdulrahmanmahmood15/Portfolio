import { Scroll, Text, Float } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useState, useRef } from 'react';
import * as THREE from 'three';
import { useStore } from '../../store/useStore';

const SkillItem = ({ text, position, color = "white" }) => {
    const [hovered, setHovered] = useState(false);
    const ref = useRef();

    useFrame((state) => {
        if (ref.current) {
            ref.current.scale.lerp(
                new THREE.Vector3(hovered ? 1.5 : 1, hovered ? 1.5 : 1, hovered ? 1.5 : 1),
                0.1
            );
            ref.current.lookAt(state.camera.position);
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <group position={position} ref={ref}>
                <Text
                    color={hovered ? "#a855f7" : color}
                    fontSize={0.6}
                    anchorX="center"
                    anchorY="middle"
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                // font prop removed for now to use default
                >
                    {text}
                </Text>
            </group>
        </Float>
    );
};

export const Skills = () => {
    const { height } = useThree((state) => state.viewport);

    const frontendSkills = [
        { name: "React", pos: [-2.5, 1, 0] },
        { name: "Three.js", pos: [-1.5, 2.5, -1] },
        { name: "Tailwind", pos: [-2, -1.5, 1] },
        { name: "Next.js", pos: [-3, 0, -2] },
        { name: "Redux", pos: [-1, -0.5, 0.5] }
    ];

    const backendSkills = [
        { name: "Node.js", pos: [2.5, 1, 0] },
        { name: "MongoDB", pos: [3, 0, -1] },
        { name: "Express", pos: [2, -2, 1] },
        { name: "GraphQL", pos: [1.5, 2, -1.5] },
        { name: "PostgreSQL", pos: [1, -0.5, 0.5] }
    ];

    return (
        <Scroll>
            {/* Place at Page 2.5: y = -height * 2.5 */}
            <group position={[0, -height * 2.5, 0]}>
                <Text position={[0, 4, 0]} fontSize={1.5} color="white" anchorX="center" anchorY="middle">
                    SKILLS
                </Text>

                <group position={[0, -0.5, 0]}>
                    {frontendSkills.map((s, i) => (
                        <SkillItem key={s.name} text={s.name} position={s.pos} color="#93c5fd" />
                    ))}

                    {backendSkills.map((s, i) => (
                        <SkillItem key={s.name} text={s.name} position={s.pos} color="#bef264" />
                    ))}
                </group>
            </group>
        </Scroll>
    );
};
