import React, { useState } from "react";
import { useMetronome } from "../../contexts/MetronomeProvider";

export default function BPM() {

  const { selectedTempo, setSelectedTempo } = useMetronome();

  function onChange(e){
      setSelectedTempo(e.target.valueAsNumber);
  }

  function decreaseTempo(){
    setSelectedTempo(prev => {
      if(prev > 30){
        return prev - 1;
      }
      return prev;
    });
  }

  function increaseTempo(){
    setSelectedTempo(prev => {
      if(prev < 244){
        return prev + 1;
      }
      return prev;
    });
  }

  return (
    <div className="beat-range">
      <button onClick={decreaseTempo}>-</button>
      <input 
        type="range" 
        min="30" 
        max="244" 
        step="1" 
        value={selectedTempo}
        onChange={onChange}
      />
      <button onClick={increaseTempo}>+</button>
      <br/>
      <div className="bpm">{selectedTempo} BPM</div>
    </div>
  );
}
