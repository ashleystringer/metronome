import { useState } from 'react';
import { MetronomeProvider } from "./contexts/MetronomeProvider";
import { BarSequenceProvider } from "./contexts/BarSequenceProvider";
import Metronome from "./components/Metronome/Metronome";
import CreateBarSequence from './components/CustomBarSequence/CreateBarSequence';

import "./App.css";

function App() {

  return (
    <MetronomeProvider>
      <BarSequenceProvider>
          <Metronome/>
          <CreateBarSequence/>
      </BarSequenceProvider>
    </MetronomeProvider>
  )
}

export default App
