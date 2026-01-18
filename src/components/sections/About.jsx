import { Scroll } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const SectionTitle = ({ children, ...props }) => (
    <h2 className="text-4xl font-bold mb-8 text-white" {...props}>
        {children}
    </h2>
);

const Card = ({ title, date, role, description, align = 'left' }) => {
    return (
        <div className={`p-6 bg-gray-900/80 backdrop-blur-md rounded-xl border border-purple-500/30 w-full md:w-[400px] hover:border-purple-500 transition-colors duration-300 ${align === 'right' ? 'ml-auto' : ''}`}>
            <span className="text-purple-400 text-sm font-mono">{date}</span>
            <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
            <p className="text-gray-400 text-sm mb-4">{role}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
    )
}

export const About = () => {
    const { height } = useThree((state) => state.viewport);

    return (
        <>
            {/* 3D Background Element (optional, like Contact) */}
            <Scroll>
                <group position={[0, -height * 1, 0]}>
                    <mesh position={[0, 0, -1]}>
                        <planeGeometry args={[10, 8]} />
                        <meshStandardMaterial color="#1e1b4b" transparent opacity={0.3} />
                    </mesh>
                </group>
            </Scroll>

            {/* HTML Content Overlay */}
            <Scroll html style={{ width: '100%', height: '100%' }}>
                <div className="absolute top-[100vh] left-0 w-full h-[100vh] flex items-center justify-center pointer-events-auto">
                    <div className="w-[90vw] md:w-[800px] space-y-8 bg-black/80 p-10 rounded-2xl border border-purple-500/50 backdrop-blur-xl text-white shadow-2xl">
                        <SectionTitle>About Me</SectionTitle>

                        <div className="space-y-6">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                I'm a passionate MERN Stack Developer with a love for creating immersive web experiences
                                and cutting-edge applications. My journey in web development has been driven by curiosity
                                and a commitment to crafting solutions that blend functionality with aesthetic excellence.
                            </p>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                With expertise in React, Node.js, MongoDB, and modern web technologies, I specialize in
                                building scalable applications and interactive 3D web experiences. I'm always exploring
                                new technologies and pushing the boundaries of what's possible on the web.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                            <Card
                                title="Full Stack Development"
                                date="2020 - Present"
                                role="MERN Stack Developer"
                                description="Building end-to-end web applications with React, Node.js, Express, and MongoDB. Creating scalable, maintainable codebases with modern best practices."
                            />
                            <Card
                                title="3D Web Experiences"
                                date="2022 - Present"
                                role="Three.js Developer"
                                description="Designing and implementing immersive 3D web experiences using React Three Fiber and Drei. Combining creativity with technical expertise."
                                align="right"
                            />
                        </div>
                    </div>
                </div>
            </Scroll>
        </>
    );
};
