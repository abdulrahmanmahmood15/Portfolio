import { useProgress } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../../store/useStore';

export const Loader = () => {
    const { active, progress, errors, item, loaded, total } = useProgress();
    const started = useStore((state) => state.experienceStarted);
    const setStarted = useStore((state) => state.setExperienceStarted);

    return (
        <AnimatePresence>
            {!started && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full bg-[#050505] flex flex-col items-center justify-center z-[10000]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                >
                    <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-purple-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="mt-4 text-purple-400 font-mono text-sm">
                        INITIALIZING WORLD... {Math.round(progress)}%
                    </div>
                    {(progress === 100 || (total === 0 && !active)) && (
                        <motion.button
                            className="mt-8 px-6 py-2 border border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-colors cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            onClick={() => setStarted(true)}
                        >
                            ENTER EXPERIENCE
                        </motion.button>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
