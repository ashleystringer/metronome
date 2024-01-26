import React, { useState, createContext, useContext, useEffect, useRef } from 'react';
import { useMetronome } from "../contexts/MetronomeProvider";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const BarGroupContext = createContext();

export function useBarGroup(){
    return useContext(BarGroupContext);
}

export const BarGroupProvider = ({ children }) => {

    const [barGroups, setBarGroups] = useLocalStorage("barGroups");


    useEffect(() => {
        console.log("barGroups");
        console.log(barGroups);
    }, [barGroups]);

    const addBarGroup = (barGroup) => {
        console.log("addBarGroup");
        console.log(barGroup);
        
        setBarGroups(prevBarGroups => {
            if(prevBarGroups) return [...prevBarGroups, barGroup];
            return barGroup;
        });
    };    

    const updateBarGroup = (barGroup) => {
        setBarGroups(prevBarGroups => {
            const updatedBarGroups = prevBarGroups.map(prevBarGroup => {
                if(prevBarGroup.id === barGroup.id) return barGroup;
                return prevBarGroup;
            });
            return updatedBarGroups;
        });
    };

    const deleteBarGroup = (barGroup) => {
        setBarGroups(prevBarGroups => {
            const updatedBarGroups = prevBarGroups.filter(prevBarGroup => prevBarGroup.id !== barGroup.id);
            return updatedBarGroups;
        });
    };

    const value = {  
        barGroups,
        addBarGroup,
        updateBarGroup,
        deleteBarGroup
    };

    return (
        <BarGroupContext.Provider value={value}>
            {children}
        </BarGroupContext.Provider>
    );
}