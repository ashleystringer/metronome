import React, { useContext, useState, useEffect, createContext } from 'react';
import { simpleTime, compoundTime } from "../time-signatures";


const MetronomeContext = createContext();

export function useMetronome(){
    return useContext(MetronomeContext);
} 

export function MetronomeProvider({children}) {

  //A variable for saving the colors of the bars
  const [selectedBeat, setSelectedBeat] = useState(45); //Selected BPM
  const [selectedNote, setSelectedNote] = useState(1);
  const [noteValue, setNoteValue] = useState(4);
  const [noteNumber, setNoteNumber] = useState(4);
  const [notePattern, setNotePattern] = useState(simpleTime(4));
  const [isPrePlanOn, setIsPrePlanOn] = useState(false);

  /*
  - create a collection of beats and bars
  */
  
  const value ={
    selectedBeat,
    setSelectedBeat,
    selectedNote,
    setSelectedNote,
    noteValue,
    setNoteValue,
    noteNumber,
    setNoteNumber,
    notePattern,
    setNotePattern,
    isPrePlanOn,
    setIsPrePlanOn
  };

  return (
    <MetronomeContext.Provider value={value}>
        {children}
    </MetronomeContext.Provider>
  )
}
