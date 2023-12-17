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
  
  
  const metronomeModes = {
    default: {
      tick: (noteValueStr, notePattern) => {
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
      }
    },
    customBarSequence: {
      tick: (noteValueStr, notePattern, barSequence) => {
        //example of bar sequence => [{noteValue, noteNumber, selectedTempo, numberOfBars}]
        //get notePattern using noteValue and noteNumber
        //play this same notePattern for numberOfBars
        //If number of played bars is equal to numberOfBars, proceed to next bar sequence
        //If there are no more bar sequences, stop metronome
        //ISSUE - How am I going to reset the selectedTempo with each change?

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

        /*
        if(barCount == numberOfBars){
          //next bar sequence
        }
        */
      }
    }
  }
  

  useEffect(() => {
    setSynth(new Tone.MembraneSynth().toDestination());
  }, []);


  useEffect(() => {

    console.log(notePattern);

    const bpm = 60000 / parseInt(selectedTempo);

    let note = 0;

    const noteValueStr = noteValue.toString() + "n"; 

    if(isMetrOn){

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
