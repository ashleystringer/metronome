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
    const idCounter = useRef(0);
    const [isUpdateModeOn, setIsUpdateModeOn] = useState(false);
    const [sequenceID, setSequenceID] = useState(0);
    const [customBarPattern, setCustomBarPattern] = useState(() => {
        if(barGroups.length > 0) return barGroups;
        return [];
    });

    const addToCustomBarPattern = () => {
        const barNotePattern = createNotePattern(noteNumber, noteValue);
        const newBarPattern = { id: idCounter.current, barNoteNumber: noteNumber, barNoteValue: noteValue, tempo: selectedTempo, barNotePattern, numberOfBars: 2 };
        setCustomBarPattern(prevBarPatterns => {
          if(prevBarPatterns) return [...prevBarPatterns, newBarPattern];
          return [newBarPattern];
        }); 
        
        setBarGroups(prevBarPatterns => {
          if(prevBarPatterns) return [...prevBarPatterns, newBarPattern];
          return [newBarPattern];
        }); 
        idCounter.current++;
      };

    const isBarSequenceUpdated = () => {
        const customPattern = customBarPattern.find(pattern => pattern.id === sequenceID);
        const groupPattern = barGroups.find(group => group.id === sequenceID);

        if(!customPattern || !groupPattern) return false;

        return Object.keys(customPattern).every(key => customPattern[key] === groupPattern[key]);
    }

    const updateBarPattern = () => {
        // compare customBarPattern with barGroups by barID
        // if customBarPattern by ID is different from barGroups by ID
        // update barGroups by ID with customBarPattern by ID

        if(!isBarSequenceUpdated()) return;

        const updatedData = customBarPattern.find(pattern => pattern.id === sequenceID);
        
        setBarGroups(barPatterns => {
            const updatedBarPatterns = barPatterns.map(barPattern => {
                if(barPattern.id === sequenceID) return updatedData;
                return barPattern;
            });
            return updatedBarPatterns;
        });

        setSequenceID(0);
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

        if(customBarPattern.length === 1) idCounter.current = 0;
    }

    const deleteAllBarPatterns = () =>{
        setCustomBarPattern([]);
        setBarGroups([]);
        idCounter.current = 0;
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
        sequenceID,
        setSequenceID
    };

    return (
        <BarSequenceContext.Provider value={value}>
            {children}
        </BarSequenceContext.Provider>
    );
}