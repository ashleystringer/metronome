import React, { useState } from "react";
import { useMetronome } from "../context/MetronomeProvider";

export default function BPM() {

  const { selectedBeat, setSelectedBeat } = useMetronome();

  function onChange(e){
      setSelectedBeat(e.target.valueAsNumber);
  }

  function decreaseBeat(){
    setSelectedBeat(prev => {
      if(prev > 30){
        return prev - 1;
      }
      return prev;
    });
  }

  function increaseBeat(){
    setSelectedBeat(prev => {
      if(prev < 244){
        return prev + 1;
      }
      return prev;
    });
  }

  return (
    <div className="beat-range">
      <button onClick={decreaseBeat}>-</button>
      <input 
        type="range" 
        min="30" 
        max="244" 
        step="1" 
        value={selectedBeat}
        onChange={onChange}
      />
      <button onClick={increaseBeat}>+</button>
      <br/>
      <div className="bpm">{selectedBeat} BPM</div>
    </div>
  );
}
