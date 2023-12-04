import { useState } from 'react';
import Metronome from "./components/Metronome";
import BeatCollection from "./components/BeatCollection";
import "./App.css";

function App() {

  return (
    <>
      <Metronome/>
      <BeatCollection/>
    </>
  )
}

export default App
