import React, { useState, createContext, useContext, useRef } from 'react';
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useMetronome } from "../context/MetronomeProvider";

export const BarSequenceContext = createContext();

export function useBarSequence(){
    return useContext(BarSequenceContext);
}

export const BarSequenceProvider = ({ children }) => {

    const { noteNumber, noteValue, selectedTempo, createNotePattern } = useMetronome();
    const [barGroups, setBarGroups] = useLocalStorage("barGroups", []);
    const [idCounter, setIdCounter] = useLocalStorage("idCounter", 0);
    const [isUpdateModeOn, setIsUpdateModeOn] = useState(false);
    const sequenceIDRef = useRef(0);
    const [customBarPattern, setCustomBarPattern] = useState(() => {
        if(barGroups.length > 0) return barGroups;
        return [];
    });

    const addToCustomBarPattern = () => {
        const barNotePattern = createNotePattern(noteNumber, noteValue);
        const newBarPattern = { id: idCounter, barNoteNumber: noteNumber, barNoteValue: noteValue, tempo: selectedTempo, barNotePattern, numberOfBars: 2 };
        setCustomBarPattern(prevBarPatterns => {
          if(prevBarPatterns) return [...prevBarPatterns, newBarPattern];
          return [newBarPattern];
        }); 
        
        setBarGroups(prevBarPatterns => {
          if(prevBarPatterns) return [...prevBarPatterns, newBarPattern];
          return [newBarPattern];
        }); 
        setIdCounter(prev => prev + 1);
      };

    const isBarSequenceUpdated = () => {
        const customPattern = customBarPattern.find(pattern => pattern.id === sequenceIDRef.current);
        const groupPattern = barGroups.find(group => group.id === sequenceIDRef.current);

        if(!customPattern || !groupPattern) return false;

        return !Object.keys(customPattern).every(key => customPattern[key] === groupPattern[key]);
    }

    const updateBarPattern = () => {
        console.log(isBarSequenceUpdated());

        if(!isBarSequenceUpdated()) return;

        const updatedData = customBarPattern.find(pattern => pattern.id === sequenceIDRef.current);
        const currentSequenceID = sequenceIDRef.current;
        
        setBarGroups(barPatterns => {
            const updatedBarPatterns = barPatterns.map(barPattern => {
                if(barPattern.id === currentSequenceID) return updatedData;
                return barPattern;
            });
            return updatedBarPatterns;
        });

        sequenceIDRef.current = 0;
    }

    const deleteBarPattern = (barID) => {
        setCustomBarPattern(barPatterns => {
            const updatedBarPatterns = barPatterns.filter(bar => bar.id !== barID);
            return updatedBarPatterns;
        });

        setBarGroups(barPatterns => {
            const updatedBarPatterns = barPatterns.filter(bar => bar.id !== barID);
            return updatedBarPatterns;
        });

        if(customBarPattern.length === 1) setIdCounter(0);
    }

    const deleteAllBarPatterns = () =>{
        setCustomBarPattern([]);
        setBarGroups([]);
        setIdCounter(0);
    }

    const value = {
        customBarPattern,
        setCustomBarPattern,
        addToCustomBarPattern,
        updateBarPattern,
        deleteBarPattern,
        deleteAllBarPatterns,
        isUpdateModeOn,
        setIsUpdateModeOn,
        sequenceIDRef
    };

    return (
        <BarSequenceContext.Provider value={value}>
            {children}
        </BarSequenceContext.Provider>
    );
}