import { useStore } from '../../store/useStore';

export const Interface = () => {
    const { section, setTargetSection } = useStore();

    // Labels for tooltips
    const labels = ["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"];

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between p-10 z-10">
            <header className="flex justify-between items-center text-white">
                <h1 className="text-2xl font-bold tracking-tighter">PORTFOLIO.DEV</h1>
            </header>

            {/* Indicators */}
            <div className="flex flex-col gap-4 relative z-50 pointer-events-auto">
                {[0, 1, 2, 3, 4].map((idx) => (
                    <div key={idx} className="group relative flex items-center gap-2 cursor-pointer" onClick={() => setTargetSection(idx)}>
                        {/* Label (visible on hover) */}
                        <span className={`text-xs font-mono tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${section === idx ? 'text-white' : ''}`}>
                            {labels[idx]}
                        </span>
                        {/* Dot */}
                        <div
                            className={`w-3 h-3 rounded-full transition-all duration-300 border border-white/50 group-hover:bg-white ${section === idx ? 'bg-white scale-125' : 'bg-transparent'}`}
                        />
                    </div>
                ))}
            </div>

            {/* Hero Overlay - Visible only when section is 0 */}
            <div className={`absolute top-1/2 left-10 transform -translate-y-1/2 transition-opacity duration-1000 ${section === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 mb-4">
                    ABDULRAHMAN <br /> MAHMOOD
                </h1>
                <p className="text-2xl text-gray-300 font-light tracking-widest">
                    MERN STACK DEVELOPER
                </p>
                <div className="mt-8">
                    <span className="inline-block px-4 py-2 border border-purple-500 rounded-full text-purple-400 text-sm tracking-wider hover:bg-purple-500 hover:text-white transition-all cursor-pointer">
                        START JOURNEY
                    </span>
                </div>
            </div>
        </div>
    )
}
