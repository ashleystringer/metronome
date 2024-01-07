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
    setSelectedTempo,
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
        
        const noteValueStr = noteValue.toString() + "n"; 
    
          const interval = setInterval(() => {
            
            if(noteRef.current == notePattern.length){
              noteRef.current = 0;
              setSelectedNote(1);
            }
    
            if(notePattern[noteRef.current] == 1){
              synth.triggerAttackRelease("C3", noteValueStr);
            }else if(notePattern[noteRef.current] == 2){
              synth.triggerAttackRelease("C2", noteValueStr);
            }else{
              synth.triggerAttackRelease("C4", noteValueStr);
            }
    
            noteRef.current++;
            setSelectedNote(noteRef.current);
          }, 
          bpm);
    
          return interval;
      }
    },
    custom: {
      tick: () => {
        if (customBarPattern.length == 0) return; 

        let { barNotePattern, numberOfBars, barNoteNumber, barNoteValue, tempo } = customBarPattern[customPatternIndexRef.current];

        setNoteValue(barNoteValue);
        setNoteNumber(barNoteNumber);
        setSelectedTempo(tempo);


        let bpm = 60000 / parseInt(tempo);
    
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
                if(customPatternIndexRef.current < customBarPattern.length){
                  ({ barNoteNumber, barNoteValue, tempo } = customBarPattern[customPatternIndexRef.current]);
                  setNoteValue(barNoteValue);
                  setNoteNumber(barNoteNumber);
                  setSelectedTempo(tempo);
                  bpm = 600 / parseInt(tempo);
                }
              }

              if(customPatternIndexRef.current == customBarPattern.length){
                //This is happening after the audio is triggered.
                setIsMetrOn(false);
                customPatternIndexRef.current = 0;
                return;
              }else{
                ({ barNotePattern, numberOfBars } = customBarPattern[customPatternIndexRef.current]);
              }

              if(barNotePattern[noteRef.current] == 1){
                synth.triggerAttackRelease("C3", noteValueStr);
              }else if(barNotePattern[noteRef.current] == 2){
                synth.triggerAttackRelease("C2", noteValueStr);
              }else{
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
    noteRef.current = 0;
    console.log("mode changed");
  }, [mode]);

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
