import { useState } from 'react';
import { MetronomeProvider } from "./contexts/MetronomeProvider";
import { BarSequenceProvider } from "./contexts/BarSequenceProvider";
import Metronome from "./components/Metronome/Metronome";
import CustomBarSequence from './components/CustomBarSequence/CustomBarSequence';

import "./App.css";

function App() {

  return (
    <MetronomeProvider>
      <BarSequenceProvider>
          <Metronome/>
          <CustomBarSequence/>
      </BarSequenceProvider>
    </MetronomeProvider>
  )
}

export default App
