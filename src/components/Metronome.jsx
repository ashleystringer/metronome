import React, { useState, useEffect } from "react";
import * as Tone from "tone";
import DisplayTime from "./DisplayTime";
import StartMetronome from "./StartMetronome";
import BPM from "./BPM";
import TimeSignature from "./TimeSignature";
import { simpleTime, compoundTime } from "../time-signatures";

export default function Metronome() {
  
  const [selectedBeat, setSelectedBeat] = useState(45);
  const [selectedNote, setSelectedNote] = useState(1);
  const [isMetrOn, setIsMetrOn] = useState(false);
  const [synth, setSynth] = useState(null);
  const [noteValue, setNoteValue] = useState(4);
  const [noteNumber, setNoteNumber] = useState(4);
  const [notePattern, setNotePattern] = useState(simpleTime(4));

  useEffect(() => {
    setSynth(new Tone.MembraneSynth().toDestination());
  }, []);

  const modes = {
    normal: {
      tick: (note, notePattern, noteValueStr, synth) => {
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
    prePlan: {
      tick: (note, notePattern, noteValueStr, synth) => {
        /*
        - an array
          - a time signature
          - a number of notes for the time signature
          - using the number of beats and the time signature, find out how many bars there are for the time signature
          - the audio stops once the bars for the final time time signature are concluded
        */
       /*
        //const timeSignature = bars[0];
        //const barNumber = bars[1];

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

        if(note == notePattern.length){
          barNumber++;
        }
       */
      }
    }
  }

  useEffect(() => {

    console.log(notePattern);

    const bpm = 60000 / parseInt(selectedBeat);

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

  }, [isMetrOn, selectedBeat, noteNumber, notePattern]);


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
      <DisplayTime noteValue={noteValue} noteNumber={noteNumber} selectedNote={selectedNote}/>
      <BPM selectedBeat={selectedBeat} setSelectedBeat={setSelectedBeat}/>
      <StartMetronome isMetrOn={isMetrOn} setIsMetrOn={setIsMetrOn}/>
      <TimeSignature 
        setNoteValue={setNoteValue} 
        noteValue={noteValue}
        setNoteNumber={setNoteNumber}
        noteNumber={noteNumber}
      />
    </div>
  );
}
