import { useThree } from '@react-three/fiber';

// Project data with more details
const projects = [
    {
        title: "E-Commerce AI",
        description: "Next.js platform with AI-driven recommendations. Features full inventory management and personalized user experiences.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1032&q=80",
        url: "#",
        tags: ["Next.js", "AI", "Tailwind"]
    },
    {
        title: "SaaS Dashboard",
        description: "Real-time analytics dashboard with React & D3. Scalable architecture for monitoring complex data streams.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        url: "#",
        tags: ["React", "D3.js", "Node.js"]
    },
    {
        title: "Social Network",
        description: "Graph-based social platform utilizing Apollo/GraphQL. High-performance caching and real-time social interactions.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
        url: "#",
        tags: ["GraphQL", "Apollo", "MongoDB"]
    }
];

export const ProjectsBackground = () => {

    const { height } = useThree((state) => state.viewport);
    return (
        <group position={[0, -height * 4.5, 0]}>
            <mesh position={[0, 0, -1]}>
                <planeGeometry args={[12, 10]} />
                <meshStandardMaterial color="#1e1b4b" transparent opacity={0.2} />
            </mesh>
        </group>
    );
};

const ProjectCard = ({ project }) => (
    <div className="bg-gray-900/40 backdrop-blur-xl rounded-2xl border border-purple-500/20 overflow-hidden hover:border-purple-500/50 transition-all duration-500 group flex flex-col h-full shadow-lg hover:shadow-purple-500/10">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />

            {/* Tags */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-purple-600/80 backdrop-blur-md text-[10px] font-bold text-white rounded-md uppercase tracking-wider">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
            </p>

            <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 text-sm"
            >
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
        </div>
    </div>
);

export const ProjectsSection = () => {
    return (
        <div className="absolute top-[450vh] left-0 w-full min-h-[100vh] flex items-center justify-center pointer-events-auto py-20">
            <div className="w-full max-w-6xl px-4 flex flex-col items-center">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto" />
                    <p className="text-gray-400 mt-6 max-w-xl text-lg">
                        A selection of my recent works, ranging from enterprise dashboards to interactive social platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};
