import React, { useState } from "react";
import { useMetronome } from "../../context/MetronomeProvider";
import { useBarSequence } from "../../context/BarSequenceProvider";


export default function BPMRange() {

  const { selectedTempo, setSelectedTempo } = useMetronome();
  const { isUpdateModeOn, sequenceID, setCustomBarPattern } = useBarSequence();

  function onChange(e){
      if(isUpdateModeOn){
        updatePrevTempo();
        setSelectedTempo(e.target.valueAsNumber);
      }else{
        setSelectedTempo(e.target.valueAsNumber);
      }
  }

  function updatePrevTempo(){
    setCustomBarPattern(prev => {
      const updatedBarPatterns = prev.map(barPattern => {
          if(barPattern.id === sequenceID) return {...barPattern, tempo: selectedTempo};
          return barPattern;
      });
      return updatedBarPatterns;
    });
  }

  function decreaseTempo(){
      if(isUpdateModeOn){
        updatePrevTempo();
      }else{
        setSelectedTempo(prev => {
          if(prev > 30){
            return prev - 1;
          }
          return prev;
        });
      }
  }

  function increaseTempo(){  
      if(isUpdateModeOn){
        updatePrevTempo();
      }else{
        setSelectedTempo(prev => {
          if(prev < 244){
            return prev + 1;
          }
          return prev;
        });     
      }
  }

  return (
    <div className="beat-range">
      <button onClick={decreaseTempo} className="bpm-slider-btn">-</button>
      <input 
        type="range" 
        min="30" 
        max="244" 
        step="1" 
        value={selectedTempo}
        onChange={onChange}
      />
      <button onClick={increaseTempo} className="bpm-slider-btn">+</button>
      <br/>
      <div className="bpm" >{selectedTempo} BPM</div>
    </div>
  );
}
