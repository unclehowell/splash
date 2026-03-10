import { SpaceJourney } from './components/SpaceJourney';

export default function App() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full max-w-[450px] aspect-[9/19.5] bg-zinc-950 shadow-2xl overflow-hidden">
        <SpaceJourney />
      </div>
    </div>
  );
}
