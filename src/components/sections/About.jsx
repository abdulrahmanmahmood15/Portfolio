import { Scroll } from '@react-three/drei';
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
    return (
        <Scroll html style={{ width: '100%', height: '100%' }}>
            <div className="absolute top-[100vh] left-0 w-full min-h-screen px-4 md:px-20 flex flex-col items-center justify-start pt-20 pointer-events-auto">
                <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>

                <div className="flex flex-col gap-20 w-full max-w-4xl relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-purple-900/50 transform -translate-x-1/2 rounded-full" />

                    {/* Timeline Items */}
                    <div className="flex w-full relative">
                        <div className="w-1/2 pr-10 text-right">
                            <Card
                                align="right"
                                title="Senior Developer"
                                role="Tech Corp"
                                date="2023 - Present"
                                description="Leading frontend teams and building scalable web applications using React and Node.js."
                            />
                        </div>
                        <div className="absolute left-1/2 top-6 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 shadow-[0_0_10px_#a855f7]" />
                    </div>

                    <div className="flex w-full relative">
                        <div className="absolute left-1/2 top-6 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 shadow-[0_0_10px_#a855f7]" />
                        <div className="w-1/2 pl-10 ml-auto">
                            <Card
                                align="left"
                                title="Full Stack Engineer"
                                role="StartUp Inc"
                                date="2021 - 2023"
                                description="Developed full-stack features for a high-growth SaaS platform using the MERN stack."
                            />
                        </div>
                    </div>

                    <div className="flex w-full relative">
                        <div className="w-1/2 pr-10 text-right">
                            <Card
                                align="right"
                                title="Frontend Developer"
                                role="Creative Agency"
                                date="2019 - 2021"
                                description="Built interactive websites and landing pages with a focus on animations and UX."
                            />
                        </div>
                        <div className="absolute left-1/2 top-6 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 shadow-[0_0_10px_#a855f7]" />
                    </div>
                </div>
            </div>
        </Scroll>
    );
};
