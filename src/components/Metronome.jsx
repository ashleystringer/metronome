import React, { useState, useEffect } from "react";
import * as Tone from "tone";
import DisplayTime from "./DisplayTime";
import StartMetronome from "./StartMetronome";
import BPM from "./BPM";
import TimeSignature from "./TimeSignature";

export default function Metronome() {
  
  const [selectedBeat, setSelectedBeat] = useState(45);
  const [isMetrOn, setIsMetrOn] = useState(false);
  const [synth, setSynth] = useState(null);
  const [noteValue, setNoteValue] = useState(4);
  const [noteNumber, setNoteNumber] = useState(4);
  const [time, setTime] = useState(4);
  const [secondaryBeat, setSecondaryBeat] = useState(3);

  useEffect(() => {
    setSynth(new Tone.MembraneSynth().toDestination());
  }, []);


  useEffect(() => {

    const bpm = 60000 / parseInt(selectedBeat);

    let note = 0;

    const noteValueStr = noteValue.toString() + "n"; 

    if(isMetrOn){

      const interval = setInterval(() => {

        //console.log(bpm);

        console.log(`note % time: ${note % noteNumber}  note % secondaryBeat: ${note % secondaryBeat}`);

        if(note != 0 && note % secondaryBeat == 0){
          //console.log("Secondary Beat");
        }


        if(note == 0){ //note % time == 0
          //console.log("note == 1");
          synth.triggerAttackRelease("C3", noteValueStr);

          note++;
        }
        else if(note != 0 && note < noteNumber - 1){
          //console.log("note != 1 && note < time");
          

          if(note % secondaryBeat == 0){ //signatureType == "compound"
            console.log("Secondary Beat");
            synth.triggerAttackRelease("C2", noteValueStr);
          }else{
            synth.triggerAttackRelease("C2", noteValueStr);
          }

          note++;
        }
        else if(note == noteNumber - 1){
          //console.log("note == time");
          synth.triggerAttackRelease("C2", noteValueStr);

          note = 0;
        }

      }, 
      bpm);

      return () => clearInterval(interval);
    }

  }, [isMetrOn, selectedBeat, noteNumber]);


  useEffect(() => {
    console.log(`noteValue: ${noteValue}, noteNumber: ${noteNumber}`);
  }, [noteValue, noteNumber]);

  return (
    <div className="metronome">
      <DisplayTime noteValue={noteValue} noteNumber={noteNumber}/>
      <BPM selectedBeat={selectedBeat} setSelectedBeat={setSelectedBeat}/>
      <StartMetronome isMetrOn={isMetrOn} setIsMetrOn={setIsMetrOn}/>
      <TimeSignature setNoteValue={setNoteValue} setNoteNumber={setNoteNumber}/>
    </div>
  );
}
