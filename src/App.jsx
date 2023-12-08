import { useState } from 'react';
import { MetronomeProvider } from "./context/MetronomeProvider";
import Metronome from "./components/Metronome";
import BeatCollection from "./components/BeatCollection";
import "./App.css";

function App() {

  return (
    <MetronomeProvider>
      <Metronome/>
      <BeatCollection/>
    </MetronomeProvider>
  )
}

export default App
