import { Scroll } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const SectionTitle = ({ children, ...props }) => (
    <h2 className="text-6xl font-bold mb-10 text-white" {...props}>
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

export const AboutBackground = () => {
    const { height } = useThree((state) => state.viewport);
    return (
        <group position={[0, -height * 1, 0]}>
            <mesh position={[0, 0, -1]}>
                <planeGeometry args={[10, 8]} />
                <meshStandardMaterial color="#1e1b4b" transparent opacity={0.3} />
            </mesh>
        </group>
    );
};

export const AboutSection = () => {
    return (
        <div className="absolute top-[100vh] left-0 w-full h-[100vh] flex items-center justify-center pointer-events-auto">
            <div className="w-full max-w-4xl relative">
                <SectionTitle className="text-center mb-16">About Me</SectionTitle>

                <div className="flex flex-col gap-20 w-full relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-purple-900/50 transform -translate-x-1/2 rounded-full" />

                    {/* Timeline Item 1 - Front-End Developer (PowerHouse) */}
                    <div className="flex w-full relative">
                        <div className="w-1/2 pr-10 text-right">
                            <Card
                                align="right"
                                title="Front-End Developer"
                                role="PowerHouse"
                                date="Sep 2023 - Jun 2024"
                                description="Software House"
                            />
                        </div>
                        <div className="absolute left-1/2 top-6 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 shadow-[0_0_10px_#a855f7]" />
                    </div>

                    {/* Timeline Item 2 - Front-End Developer (Triaxo) */}
                    <div className="flex w-full relative">
                        <div className="absolute left-1/2 top-6 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 shadow-[0_0_10px_#a855f7]" />
                        <div className="w-1/2 pl-10 ml-auto">
                            <Card
                                align="left"
                                title="Front-End Developer"
                                role="Triaxo Solutions"
                                date="Sep 2022 - Present"
                                description="Software House"
                            />
                        </div>
                    </div>

                    {/* Timeline Item 3 - MERN Stack Developer (Triaxo) */}
                    <div className="flex w-full relative">
                        <div className="w-1/2 pr-10 text-right">
                            <Card
                                align="right"
                                title="MERN Stack Developer"
                                role="Triaxo Solutions"
                                date="Sep 2023 - Present"
                                description="Software House"
                            />
                        </div>
                        <div className="absolute left-1/2 top-6 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 shadow-[0_0_10px_#a855f7]" />
                    </div>
                </div>
            </div>
        </div>
    );
};
