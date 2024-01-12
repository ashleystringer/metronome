import React, { useState, createContext, useContext, useEffect, useRef } from 'react';
import { useMetronome } from "../contexts/MetronomeProvider";
//import { useLocalStorage } from "../hooks/useLocalStorage";

export const BarSequenceContext = createContext();

export function useBarSequence(){
    return useContext(BarSequenceContext);
}

export const BarSequenceProvider = ({ children }) => {

    const { noteNumber, noteValue, selectedTempo, createNotePattern } = useMetronome();
    const idCounter = useRef(0);
    const [customBarPattern, setCustomBarPattern] = useState([]);

    useEffect(() => {
        console.log("customBarPattern");
        console.log(customBarPattern);
    }, [customBarPattern]);

    const addToCustomBarPattern = () => {
        const barNotePattern = createNotePattern(noteNumber, noteValue);
        const newBarPattern = { id: idCounter.current, barNoteNumber: noteNumber, barNoteValue: noteValue, tempo: selectedTempo, barNotePattern, numberOfBars: 2 };
        setCustomBarPattern(prevBarPatterns => {
          if(prevBarPatterns) return [...prevBarPatterns, newBarPattern];
          return [newBarPattern];
        }); 
        idCounter.current++;
      };

    const updateBarPattern = (barID, newBar) => {
        //Need to alter the contet of the bar pattern
        setCustomBarPattern(barPatterns => {
            const updatedBarPatterns = barPatterns.map(barPattern => {
                if(barPatern.id === barID) return newBar;
                return barPattern;
            });
            return updatedBarPatterns;
        });
        
    }
    
    const deleteBarPattern = (barID) => {
        setCustomBarPattern(barPatterns => {
            const updatedBarPatterns = barPatterns.filter(bar => bar.id !== barID);
            return updatedBarPatterns;
        });

        if(customBarPattern.length === 1) idCounter.current = 0;
    }

    const deleteAllBarPatterns = () =>{
        setCustomBarPattern([]);

        idCounter.current = 0;
    }

    const value = {
        customBarPattern,
        addToCustomBarPattern,
        updateBarPattern,
        deleteBarPattern,
        deleteAllBarPatterns
    };

    return (
        <BarSequenceContext.Provider value={value}>
            {children}
        </BarSequenceContext.Provider>
    );
}