import { Scroll, Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useState } from 'react';

export const Contact = () => {
    const { height } = useThree((state) => state.viewport);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setName('');
            setEmail('');
            setMessage('');
        }, 3000);
    };

    return (
        <>
            {/* 3D Background Element */}
            <Scroll>
                <group position={[0, -height * 5, 0]}>
                    <mesh position={[0, 0, -1]}>
                        <planeGeometry args={[10, 8]} />
                        <meshStandardMaterial color="#1e1b4b" transparent opacity={0.8} />
                    </mesh>
                </group>
            </Scroll>

            {/* HTML Content Overlay */}
            <Scroll html style={{ width: '100%', height: '100%' }}>
                <div className="absolute top-[500vh] left-0 w-full h-[100vh] flex items-center justify-center pointer-events-auto">
                    <div className="bg-black/80 p-10 rounded-2xl border border-purple-500/50 backdrop-blur-xl w-[90vw] md:w-[500px] text-white shadow-2xl">
                        {!submitted ? (
                            <>
                                <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Get In Touch</h2>
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                        <textarea
                                            rows={4}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                                            placeholder="Your message here..."
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all transform hover:scale-105"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-10">
                                <h3 className="text-3xl font-bold text-green-400 mb-4">Message Sent!</h3>
                                <p className="text-gray-300">Thank you for reaching out. I'll get back to you shortly.</p>
                            </div>
                        )}

                        <div className="flex justify-center gap-6 mt-8 border-t border-gray-700 pt-6">
                            <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors">GH</a>
                            <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors">LI</a>
                            <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors">TW</a>
                        </div>
                    </div>
                </div>
            </Scroll>
        </>
    );
};
