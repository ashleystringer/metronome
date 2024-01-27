import { MetronomeProvider } from "./context/MetronomeProvider";
import { BarGroupProvider } from "./context/BarGroupProvider";
import { BarSequenceProvider } from "./context/BarSequenceProvider";
import ModeSelector from './components/Metronome/ModeSelector';
import Metronome from "./components/Metronome/Metronome";
import BarSequenceButton from './components/CustomBarSequence/BarSequenceButton';

import "./App.css";

function App() {
  return (
    <MetronomeProvider>
      <BarGroupProvider>
        <BarSequenceProvider>
            <ModeSelector/>
            <Metronome/>
            <BarSequenceButton/>
        </BarSequenceProvider>
      </BarGroupProvider>
    </MetronomeProvider>
  )
}

export default App
