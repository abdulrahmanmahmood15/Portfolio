import { Canvas } from '@react-three/fiber';
import { ScrollControls, Stars, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { ScrollManager } from './ScrollManager';
import { CameraRig } from './CameraRig';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Contact } from '../sections/Contact';
import { ShootingStars } from './ShootingStars';
import { Services } from '../sections/Services';

export const Scene = () => {
    const NUM_PAGES = 7; // Hero, About, Skills, Services, Projects, Contact

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

                    {/* 
            We can place 3D content here that needs to be affected by scroll.
            Or we can use useScroll() inside the components themselves.
          */}
                    <Hero />
                    <About />
                    <Skills />
                    <Services />
                    <Projects />
                    <Contact />

                    {/* Other sections will go here */}

                </ScrollControls>
            </Suspense>
        </Canvas>
    );
};
