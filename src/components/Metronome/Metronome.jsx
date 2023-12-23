import React, { useState, useEffect } from "react";
import { useMetronome } from "../../contexts/MetronomeProvider";
import * as Tone from "tone";
import DisplayTime from "./DisplayTime";
import StartMetronome from "./StartMetronome";
import BPM from "./BPM";
import TimeSignature from "./TimeSignature";
import { simpleTime, compoundTime } from "../../time-signatures";

export default function Metronome() {

  const [isMetrOn, setIsMetrOn] = useState(false);
  const [synth, setSynth] = useState(null);

  const {
    selectedTempo,
    setSelectedNote,
    noteValue,
    noteNumber,
    notePattern,
    setNotePattern,
    mode
  } = useMetronome();

  console.log(`mode: ${mode}`);


  useEffect(() => {
    setSynth(new Tone.MembraneSynth().toDestination());
  }, []);


  const modes = {
    normal: {
      tick: () => {
        console.log(notePattern);

        const bpm = 60000 / parseInt(selectedTempo);
    
        let note = 0;
    
        const noteValueStr = noteValue.toString() + "n"; 
    
          const interval = setInterval(() => {
            
            if(note == notePattern.length){
              console.log(`notePattern.length: ${notePattern.length}`);
              console.log("note = 0");
              note = 0;
              setSelectedNote(1);
            }
    
            if(notePattern[note] == 1){
              console.log("note == 1");
              synth.triggerAttackRelease("C3", noteValueStr);
            }else if(notePattern[note] == 2){
              console.log("note == 2");
              synth.triggerAttackRelease("C2", noteValueStr);
            }else{
              console.log("note == 3");
              synth.triggerAttackRelease("C4", noteValueStr);
            }
    
            note++;
            setSelectedNote(note);
          }, 
          bpm);
    
          return interval;
      }
    },
    customSequence: {
      tick: () => {
        /*

        */
      }
    }
  }

  useEffect(() => {

    /*
    - Find a way to run through all of the variables every time a certain number of bars in completed.
    */

    if(isMetrOn){
      const interval = modes.normal.tick();
      return () => clearInterval(interval);
    }

  }, [isMetrOn, selectedTempo, noteNumber, notePattern]);


  useEffect(() => {
    console.log(`noteValue: ${noteValue}, noteNumber: ${noteNumber}`);
    if(noteValue == 4){
      setNotePattern(simpleTime(noteNumber));
    }else if(noteValue == 8){
      setNotePattern(compoundTime(noteNumber));
    }
  }, [noteValue, noteNumber]);

  return (
    <div className="metronome">
      <DisplayTime/>
      <BPM/>
      <StartMetronome isMetrOn={isMetrOn} setIsMetrOn={setIsMetrOn}/>
      <TimeSignature/>
    </div>
  );
}
