import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Stars, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { ScrollManager } from './ScrollManager';
import { CameraRig } from './CameraRig';
import { Hero } from '../sections/Hero';
import { AboutSection, AboutBackground } from '../sections/About';
import { Skills } from '../sections/Skills';
import { ProjectsSection, ProjectsBackground } from '../sections/Projects';
import { ContactSection, ContactBackground } from '../sections/Contact';
import { ShootingStars } from './ShootingStars';
import { ServicesSection, ServicesBackground } from '../sections/Services';

export const Scene = () => {
    const NUM_PAGES = 8; // Hero, About, Skills, Services, Projects, Contact

    return (
        <Canvas>
            <color attach="background" args={['#050505']} />

            {/* Cinematic Camera Setup - CameraRig will control position */}
            <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={75} />

            <CameraRig />

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <ShootingStars />

            <Suspense fallback={null}>
                <ScrollControls pages={NUM_PAGES} damping={0.2}>
                    <ScrollManager pages={NUM_PAGES} />

                    {/* 3D Content */}
                    <Hero />
                    <Scroll>
                        <AboutBackground />
                        <ServicesBackground />
                        <ProjectsBackground />
                        <ContactBackground />
                    </Scroll>
                    <Skills />

                    <Suspense fallback={null}>
                        {/* Any other 3D components */}
                    </Suspense>

                    {/* Unified HTML Overlay */}
                    <Scroll html style={{ width: '100%', height: '100%' }}>
                        <AboutSection />
                        <ServicesSection />
                        <ProjectsSection />
                        <ContactSection />
                    </Scroll>

                </ScrollControls>
            </Suspense>
        </Canvas>
    );
};
