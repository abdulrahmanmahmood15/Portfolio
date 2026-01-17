import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useStore } from '../store/useStore';

const AudioContext = createContext(null);

export const AudioProvider = ({ children }) => {
    const audioContextRef = useRef(null);
    const masterGainRef = useRef(null);
    const droneOsclRef = useRef(null);
    const droneGainRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);
    const experienceStarted = useStore((state) => state.experienceStarted);
    // Initialize Audio Context on user interaction (Start Experience)
    useEffect(() => {
        if (experienceStarted && !audioContextRef.current) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            const ctx = new AudioCtx();
            audioContextRef.current = ctx;

            // Master Gain
            const masterGain = ctx.createGain();
            masterGain.gain.value = 0.5; // Initial volume
            masterGain.connect(ctx.destination);
            masterGainRef.current = masterGain;

            // Start Drone
            startDrone(ctx, masterGain);
        }
    }, [experienceStarted]);

    const startDrone = (ctx, destination) => {
        // Generative Drone: 2 Oscillators with slight detune
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.value = 50; // Low bass

        osc2.type = 'triangle';
        osc2.frequency.value = 52; // Detuned slightly for "beating" texture

        gain.gain.value = 0; // Start silent, fade in

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(destination);

        osc1.start();
        osc2.start();

        // Fade in
        gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 5); // Target low volume

        droneOsclRef.current = { osc1, osc2 };
        droneGainRef.current = gain;
    };

    const playHover = () => {
        if (!audioContextRef.current || isMuted) return;
        const ctx = audioContextRef.current;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // High tech "blip"
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);

        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(masterGainRef.current);

        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    };

    const playClick = () => {
        if (!audioContextRef.current || isMuted) return;
        const ctx = audioContextRef.current;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Deeper "select" sound
        osc.type = 'square';
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.2);

        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

        osc.connect(gain);
        gain.connect(masterGainRef.current);

        osc.start();
        osc.stop(ctx.currentTime + 0.2);
    }

    const toggleMute = () => {
        if (masterGainRef.current) {
            const newVal = !isMuted;
            setIsMuted(newVal);
            // Smooth mute/unmute
            const time = audioContextRef.current.currentTime;
            masterGainRef.current.gain.cancelScheduledValues(time);
            masterGainRef.current.gain.linearRampToValueAtTime(newVal ? 0 : 0.5, time + 0.5);
        }
    };

    return (
        <AudioContext.Provider value={{ playHover, playClick, toggleMute, isMuted }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => useContext(AudioContext);
