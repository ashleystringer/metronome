import "./css/BarSequenceButton.css";
import React from 'react';
import { useMetronome } from "../../context/MetronomeProvider";
import CustomBarSequence from './CustomBarSequence';


export default function BarSequenceButton() {
    
    const { mode, setMode } = useMetronome();

    const handleButtonClick = () => {
        setMode("custom");
    }

  return (
    <div className='bar-sequence-group-btn'>
    { (mode === "custom") ? (<CustomBarSequence/>) : (<button onClick={handleButtonClick}>Create Bar Sequence Group</button>)}
    </div>
  )
}
