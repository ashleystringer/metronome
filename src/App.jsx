import { MetronomeProvider } from "./contexts/MetronomeProvider";
import { BarGroupProvider } from "./contexts/BarGroupProvider";
import { BarSequenceProvider } from "./contexts/BarSequenceProvider";
import ModeSelector from './components/Metronome/ModeSelector';
import Metronome from "./components/Metronome/Metronome";
import BarSequenceWrapper from './components/CustomBarSequence/BarSequenceWrapper';

import "./App.css";

function App() {
  return (
    <MetronomeProvider>
      <BarGroupProvider>
        <BarSequenceProvider>
            <ModeSelector/>
            <Metronome/>
            <BarSequenceWrapper/>
        </BarSequenceProvider>
      </BarGroupProvider>
    </MetronomeProvider>
  )
}

export default App
