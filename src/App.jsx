import { useState } from 'react';
import { MetronomeProvider } from "./contexts/MetronomeProvider";
import { BarSequenceProvider } from "./contexts/BarSequenceProvider";
import Metronome from "./components/Metronome/Metronome";
import CustomBarSequence from './components/CustomBarSequence/CustomBarSequence';

import "./App.css";

function App() {

  const [isCustomBarSequenceHidden, setIsCustomBarSequenceHidden] = useState(true);

  function toggleButton(){
    setIsCustomBarSequenceHidden(prev => !prev);
  }

  return (
    <MetronomeProvider>
      <BarSequenceProvider>
          <Metronome/>
          { (isCustomBarSequenceHidden) ? (<button onClick={toggleButton}>Customize Bar Sequence</button>) : (<CustomBarSequence/>)}
      </BarSequenceProvider>
    </MetronomeProvider>
  )
}

export default App
