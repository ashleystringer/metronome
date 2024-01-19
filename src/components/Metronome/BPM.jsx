import React, { useState } from "react";
import { useMetronome } from "../../contexts/MetronomeProvider";
import { useBarSequence } from "../../contexts/BarSequenceProvider";


export default function BPM() {

  const { selectedTempo, setSelectedTempo } = useMetronome();
  const { isUpdateModeOn } = useBarSequence();

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
      /*
        if(isUpdateModeOn){
          //updateBarPattern();
        }else{
          setSelectedTempo(prev => {
            if(prev > 30){
              return prev - 1;
            }
            return prev;
          });
        }
        */
  }

  function increaseTempo(){
    setSelectedTempo(prev => {
      if(prev < 244){
        return prev + 1;
      }
      return prev;
    });
        /*
        if(isUpdateModeOn){
          //updateBarPattern();
        }else{
          setSelectedTempo(prev => {
            if(prev < 244){
              return prev + 1;
            }
            return prev;
          });     
        }
        */
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
