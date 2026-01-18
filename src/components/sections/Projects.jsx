import { Scroll, Image, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useState, useRef } from 'react';
import * as THREE from 'three';
import { useStore } from '../../store/useStore';

// Placeholder project data
const projects = [
    {
        title: "E-Commerce AI",
        description: "Next.js platform with AI-driven recommendations.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1032&q=80",
        url: "#"
    },
    {
        title: "SaaS Dashboard",
        description: "Real-time analytics dashboard with React & D3.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        url: "#"
    },
    {
        title: "Social Network",
        description: "Graph-based social platform utilizing Apollo/GraphQL.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
        url: "#"
    }
];

const ProjectCard = ({ project, position }) => {
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    const setCursorVariant = useStore((state) => state.setCursorVariant);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.scale.lerp(
                new THREE.Vector3(hovered ? 1.15 : 1, hovered ? 1.15 : 1, 1),
                0.1
            );
        }
    });

    return (
        <group position={position}>
            <Image
                ref={ref}
                url={project.image}
                transparent
                side={THREE.DoubleSide}
                onPointerOver={() => {
                    setHovered(true);
                    setCursorVariant('text'); // Or a 'project' variant
                }}
                onPointerOut={() => {
                    setHovered(false);
                    setCursorVariant('default');
                }}
                onClick={() => window.open(project.url, '_blank')}
            >
                <planeGeometry args={[3, 2]} />
            </Image>

            <Text
                position={[0, -1.2, 0]}
                fontSize={0.2}
                color="white"
                anchorX="center"
                anchorY="top"
                maxWidth={2.5}
                textAlign="center"
            >
                {project.title.toUpperCase()}
            </Text>
            <Text
                position={[0, -1.5, 0]}
                fontSize={0.12}
                color="#a3a3a3"
                anchorX="center"
                anchorY="top"
                maxWidth={2.8}
                textAlign="center"
            >
                {project.description}
            </Text>
        </group>
    )
}

export const Projects = () => {
    const { height } = useThree((state) => state.viewport);

    return (
        <Scroll>
            {/* Page 4: y = -height * 4 */}
            <group position={[0, -height * 4, 0]}>
                <Text position={[0, 2, 0]} fontSize={1} color="white" anchorX="center" anchorY="middle">
                    PROJECTS
                </Text>

                {projects.map((project, i) => (
                    <ProjectCard
                        key={i}
                        project={project}
                        position={[
                            (i - 1) * 4, // Spacing
                            0,
                            0
                        ]}
                    />
                ))}
            </group>
        </Scroll>
    );
};
