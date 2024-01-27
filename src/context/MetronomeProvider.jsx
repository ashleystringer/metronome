import React, { useState, createContext, useContext, useEffect } from 'react';
import { simpleTime, compoundTime } from "../time-signatures";


export const MetronomeContext = createContext();

export function useMetronome(){
    return useContext(MetronomeContext);
}

export const MetronomeProvider = ({ children }) => {

  const [selectedTempo, setSelectedTempo] = useState(45);
  const [selectedNote, setSelectedNote] = useState(1);
  const [noteValue, setNoteValue] = useState(4);
  const [noteNumber, setNoteNumber] = useState(4);
  const [notePattern, setNotePattern] = useState(simpleTime(4));
  const [mode, setMode] = useState("default");

  function createNotePattern(noteNumber, noteValue){
    console.log(`noteValue: ${noteValue}, noteNumber: ${noteNumber}`);
    if(noteValue == 4){
      return simpleTime(noteNumber);
    }else if(noteValue == 8){
      return compoundTime(noteNumber);
    }
  }

  const value = {
    selectedTempo,
    setSelectedTempo,
    selectedNote,
    setSelectedNote,
    noteValue,
    setNoteValue,
    noteNumber,
    setNoteNumber,
    notePattern,
    setNotePattern,
    mode,
    setMode,
    createNotePattern
  }

  return (
    <MetronomeContext.Provider value={value}>
      {children}
    </MetronomeContext.Provider>
  );
};

export default MetronomeProvider;