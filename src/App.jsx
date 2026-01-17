import { Scene } from './components/canvas/Scene';
import { useStore } from './store/useStore';
import { Interface } from './components/ui/Interface';
import { Cursor } from './components/ui/Cursor';
import { Loader } from './components/ui/Loader';
import { useState } from 'react';

function App() {
  const section = useStore((state) => state.section);
  const started = useStore((state) => state.experienceStarted);

  return (
    <div className="w-full h-full relative bg-[#050505]">
      <Loader />

      {/* 3D Scene Layer */}
      <Scene />

      {/* HTML Overlay Layer */}
      {started && <Interface />}
      <Cursor />
      <main className="absolute top-0 left-0 w-full h-full pointer-events-none">
      </main>
    </div>
  );
}

export default App;
