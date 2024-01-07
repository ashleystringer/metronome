import React from 'react';
import { useMetronome } from "../../contexts/MetronomeProvider";
import CustomBarSequence from './CustomBarSequence';


export default function BarSequenceWrapper() {
    
    const { mode, setMode } = useMetronome();

    const handleButtonClick = () => {
        setMode("Custom");
    }

  return (
    <>
    { (mode === "Custom") ? (<CustomBarSequence/>) : (<button onClick={handleButtonClick}>Create Bar Sequence Group</button>)}
    </>
  )
}
