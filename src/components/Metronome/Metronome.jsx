import React, { useState, useEffect, useRef } from "react";
import { useMetronome } from "../../contexts/MetronomeProvider";
import { useBarSequence } from "../../contexts/BarSequenceProvider";
import * as Tone from "tone";
import DisplayTime from "./DisplayTime";
import StartMetronome from "./StartMetronome";
import BPM from "./BPM";
import TimeSignature from "./TimeSignature";
import { simpleTime, compoundTime } from "../../time-signatures";

export default function Metronome() {

  const [isMetrOn, setIsMetrOn] = useState(false);
  const [synth, setSynth] = useState(null);


  const customPatternIndexRef = useRef(0);
  const barTrackerRef = useRef(0);
  const noteRef = useRef(0);


  const {
    selectedTempo,
    setSelectedNote,
    noteValue,
    setNoteValue,
    noteNumber,
    setNoteNumber,
    notePattern,
    setNotePattern,
    mode
  } = useMetronome();

  const {
    customBarPattern
  } = useBarSequence();


  useEffect(() => {
    setSynth(new Tone.MembraneSynth().toDestination());
  }, []);


  const playModes = {
    default: {
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
    custom: {
      tick: () => {
        let { barNotePattern, numberOfBars, barNoteNumber, barNoteValue } = customBarPattern[customPatternIndexRef.current];

        setNoteValue(barNoteValue);
        setNoteNumber(barNoteNumber);


        const bpm = 60000 / parseInt(selectedTempo);
    
        const noteValueStr = noteValue.toString() + "n"; 
    
          const interval = setInterval(() => {

            console.log(barNotePattern);
              
              if(noteRef.current == barNotePattern.length){
                noteRef.current = 0;
                setSelectedNote(1);
                barTrackerRef.current++;
              }
      
              if(barTrackerRef.current == numberOfBars && customPatternIndexRef.current < customBarPattern.length){
                barTrackerRef.current = 0;
                customPatternIndexRef.current++;
                console.log(`customPatternIndexRef.current - 1: ${customPatternIndexRef.current - 1}`);
                console.log(customBarPattern);
                if(customPatternIndexRef.current < customBarPattern.length){
                  ({ barNoteNumber, barNoteValue } = customBarPattern[customPatternIndexRef.current]); //MISMATCH
                  setNoteValue(barNoteValue);
                  console.log(`barNoteValue: ${barNoteValue}`);
                  setNoteNumber(barNoteNumber);
                  console.log(`barNoteNumber: ${barNoteNumber}`);
                }
              }

              if(customPatternIndexRef.current == customBarPattern.length){
                //This is happening after the audio is triggered.
                console.log("patternIndex == customBarPattern.length");
                setIsMetrOn(false);
                customPatternIndexRef.current = 0;
                return;
              }else{
                ({ barNotePattern, numberOfBars } = customBarPattern[customPatternIndexRef.current]); //MISMATCH
              }

                if(barNotePattern[noteRef.current] == 1){
                  console.log("note == 1");
                  synth.triggerAttackRelease("C3", noteValueStr);
                }else if(barNotePattern[noteRef.current] == 2){
                  console.log("note == 2");
                  synth.triggerAttackRelease("C2", noteValueStr);
                }else{
                  console.log("note == 3");
                  synth.triggerAttackRelease("C4", noteValueStr);
                }

                noteRef.current++;
                setSelectedNote(noteRef.current);
          }, 
          bpm);
    
          return interval;
      }
    }
  }

  useEffect(() => {

    if(isMetrOn){
      const interval = playModes[mode].tick();
      return () => clearInterval(interval);
    }

  }, [isMetrOn, selectedTempo, noteNumber, notePattern, mode]);


  useEffect(() => {
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
