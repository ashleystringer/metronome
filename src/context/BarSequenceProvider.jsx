import React, { useState, createContext, useContext, useEffect, useRef } from 'react';
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useMetronome } from "../context/MetronomeProvider";

export const BarSequenceContext = createContext();

export function useBarSequence(){
    return useContext(BarSequenceContext);
}

export const BarSequenceProvider = ({ children }) => {

    const { noteNumber, noteValue, selectedTempo, createNotePattern } = useMetronome();
    const [barGroups, setBarGroups] = useLocalStorage("barGroups");
    const idCounter = useRef(0);
    const [customBarPattern, setCustomBarPattern] = useState([]);
    const [isUpdateModeOn, setIsUpdateModeOn] = useState(false);

    useEffect(() => {
        if(barGroups.length > 0) setCustomBarPattern(barGroups);
    }, []);

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

    const updateBarPattern = (barID, newBar) => {
        setCustomBarPattern(barPatterns => {
            const updatedBarPatterns = barPatterns.map(barPattern => {
                if(barPatern.id === barID) return newBar;
                return barPattern;
            });
            return updatedBarPatterns;
        });
        
        setBarGroups(barPatterns => {
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
        addToCustomBarPattern,
        updateBarPattern,
        deleteBarPattern,
        deleteAllBarPatterns,
        isUpdateModeOn,
        setIsUpdateModeOn
    };

    return (
        <BarSequenceContext.Provider value={value}>
            {children}
        </BarSequenceContext.Provider>
    );
}