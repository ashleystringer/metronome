import React from 'react';
import { useMetronome } from "../../contexts/MetronomeProvider";
import { useBarSequence } from "../../contexts/BarSequenceProvider";
import CreateBarSequence from './CreateBarSequence';
import CardCollection from "./CardCollection";

export default function CustomBarSequence() {

  const { mode, setMode } = useMetronome();
  
  function toggleMode(){
    setMode(prev =>{
      if(prev == "default") return "custom";
      return "default";
    });
    console.log(`mode: ${mode}`);
  }

  return (
    <>
      <CardCollection/>
      <CreateBarSequence/>
      <br/>
      <button onClick={toggleMode}>{mode == "default" ? "Enter Custom Mode" : "Enter Default Mode"}</button>
    </>
  )
}
