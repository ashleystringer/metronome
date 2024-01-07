import { MetronomeProvider } from "./contexts/MetronomeProvider";
import { BarSequenceProvider } from "./contexts/BarSequenceProvider";
import ModeSelector from './components/Metronome/ModeSelector';
import Metronome from "./components/Metronome/Metronome";
import BarSequenceWrapper from './components/CustomBarSequence/BarSequenceWrapper';

import "./App.css";

function App() {
  return (
    <MetronomeProvider>
      <BarSequenceProvider>
          <ModeSelector/>
          <Metronome/>
          <BarSequenceWrapper/>
      </BarSequenceProvider>
    </MetronomeProvider>
  )
}

export default App
