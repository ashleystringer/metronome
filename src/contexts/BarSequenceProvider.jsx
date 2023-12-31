import React, { useState, createContext, useContext, useEffect } from 'react';
import { useMetronome } from "../contexts/MetronomeProvider";

export const BarSequenceContext = createContext();

export function useBarSequence(){
    return useContext(BarSequenceContext);
}

export const BarSequenceProvider = ({ children }) => {

    const { noteNumber, noteValue, selectedTempo, createNotePattern } = useMetronome();
    const [customBarPattern, setCustomBarPattern] = useState([]);

    useEffect(() => {
        console.log("customBarPattern");
        console.log(customBarPattern);
    }, [customBarPattern]);

    const addToCustomBarPattern = () => {
        const barNotePattern = createNotePattern(noteNumber, noteValue);
        const newBarPattern = { barNoteNumber: noteNumber, barNoteValue: noteValue, selectedTempo, barNotePattern, numberOfBars: 2 };
        setCustomBarPattern(prevBarPatterns => {
          if(prevBarPatterns) return [...prevBarPatterns, newBarPattern];
          return [newBarPattern];
        }); 
      };

    const updateBarPattern = (bar) => {
        setCustomBarPattern(barPatterns => {
            const updatedBarPatterns = barPatterns.map(barPattern => {
                if(barPattern === bar) return bar;
            });
            return updatedBarPatterns;
        });
    }
    
    const removeBarPattern = (bar) => {
        setCustomBarPattern(barPatterns => {
            const updatedBarPatterns = barPatterns.filter(barPattern => bar !== barPattern);
            return updatedBarPatterns;
        });
    }

    const removeAllBarPatterns = () =>{
        setCustomBarPattern([]);
    }

    const value = {
        customBarPattern,
        addToCustomBarPattern,
        updateBarPattern,
        removeBarPattern,
        removeAllBarPatterns
    };

    return (
        <BarSequenceContext.Provider value={value}>
            {children}
        </BarSequenceContext.Provider>
    );
}