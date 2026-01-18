import { Scroll } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export const ServicesBackground = () => {
    const { height } = useThree((state) => state.viewport);
    return (
        <group position={[0, -height * 3.5, 0]}>
            <mesh position={[0, 0, -1]}>
                <planeGeometry args={[10, 8]} />
                <meshStandardMaterial color="#1e1b4b" transparent opacity={0.3} />
            </mesh>
        </group>
    );
};

const ServiceCard = ({ title, subtitle, description, icon }) => (
    <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:transform hover:-translate-y-1 group">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-purple-400 font-mono text-sm mb-3">{subtitle}</p>
        <p className="text-gray-400 text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

export const ServicesSection = () => {
    return (
        <div className="absolute top-[350vh] left-0 w-full h-[100vh] flex items-center justify-center pointer-events-auto">
            <div className="w-full max-w-6xl px-4">
                <h2 className="text-5xl font-bold text-center text-white mb-16">My Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ServiceCard
                        title="Cross-Platform Apps"
                        subtitle="React Native"
                        icon="📱"
                        description="Building high-performance native mobile applications for iOS and Android using React Native. Seamless user experiences across all devices with a single codebase."
                    />

                    <ServiceCard
                        title="MERN Stack Apps"
                        subtitle="MongoDB • Express • React • Node"
                        icon="💻"
                        description="Full-cycle web application development. From scalable backend architectures to dynamic, responsive frontends. I build robust solutions tailored to your business needs."
                    />

                    <ServiceCard
                        title="3D Web Experiences"
                        subtitle="Three.js • React Three Fiber"
                        icon="🧊"
                        description="Creating immersive, interactive 3D elements for the web. Elevate your brand with stunning visuals, particle effects, and dynamic scenes that capture attention."
                    />
                </div>
            </div>
        </div>
    );
};
