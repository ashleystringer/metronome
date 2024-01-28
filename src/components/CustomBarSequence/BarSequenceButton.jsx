import "./css/BarSequenceButton.css";
import React from 'react';
import { useMetronome } from "../../context/MetronomeProvider";
import BarSequenceCustomizer from './BarSequenceCustomizer';


export default function BarSequenceButton() {
    
    const { mode, setMode } = useMetronome();

    const handleButtonClick = () => {
        setMode("custom");
    }

  return (
    <div className='bar-sequence-group-btn'>
    { (mode === "custom") ? (<BarSequenceCustomizer/>) : (<button onClick={handleButtonClick}>Create Bar Sequence Group</button>)}
    </div>
  )
}
