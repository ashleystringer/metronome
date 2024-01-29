import React, { useState, useEffect } from 'react';
import { useMetronome } from "../../context/MetronomeProvider";
import { useBarSequence } from "../../context/BarSequenceProvider";


export default function TimeSignatureSelector() {

    const { setNoteValue, noteValue, setNoteNumber, noteNumber } = useMetronome();
    const { setCustomBarPattern, customBarPattern, isUpdateModeOn, sequenceID } = useBarSequence();

    function handleNoteValue(data){
        if(isUpdateModeOn){
            console.log(sequenceID);
            setCustomBarPattern(prev => {
                const updatedBarPatterns = prev.map(barPattern => {
                    if(barPattern.id === sequenceID) return {...barPattern, barNoteValue: data};
                    return barPattern;
                });
                return updatedBarPatterns;
            });
            const updatedData = customBarPattern.find(pattern => pattern.id === sequenceID);
            console.log(updatedData);
        }else{
            setNoteValue(prev => {
                return data;
            });
        }
    }

    function handleNoteNum(data){
        if(isUpdateModeOn){
            console.log(sequenceID);
            setCustomBarPattern(prev => {
                const updatedBarPatterns = prev.map(barPattern => {
                    if(barPattern.id === sequenceID) return {...barPattern, barNoteNumber: data};
                    return barPattern;
                });
                return updatedBarPatterns;
            });

            const updatedData = customBarPattern.find(pattern => pattern.id === sequenceID);
            console.log(updatedData);
        }else{
            setNoteNumber(prev => {
                return data;
            });
        }        
    }

    const btn = (isUpdateModeOn) ? "btn update-mode" : "btn"

    return (
        <div className="time-signature">
            Note Value
            <div className="note-value container">
                <button className={ noteValue === 4 ?  `${btn} selected` : btn} onClick={() => handleNoteValue(4)}>4</button>
                <button className={ noteValue === 8 ? `${btn} selected` : btn} onClick={() => {handleNoteValue(8)}}>8</button>
            </div>
            Number of Notes
            <div className="container">
                <button className={ noteNumber === 2 ? `${btn} selected` : btn} onClick={() => handleNoteNum(2)}>2</button>
                <button className={ noteNumber === 3 ? `${btn} selected` : btn} onClick={() => handleNoteNum(3)}>3</button>
                <button className={ noteNumber === 4 ? `${btn} selected` : btn} onClick={() => handleNoteNum(4)}>4</button>
                <button className={ noteNumber === 5 ? `${btn} selected` : btn} onClick={() => handleNoteNum(5)}>5</button>
                <button className={ noteNumber === 6 ? `${btn} selected` : btn} onClick={() => handleNoteNum(6)}>6</button>
                <button className={ noteNumber === 7 ? `${btn} selected` : btn} onClick={() => handleNoteNum(7)}>7</button>
                <button className={ noteNumber === 8 ? `${btn} selected` : btn} onClick={() => handleNoteNum(8)}>8</button>
                <button className={ noteNumber === 9 ? `${btn} selected` : btn} onClick={() => handleNoteNum(9)}>9</button>
                <button className={ noteNumber === 12 ? `${btn} selected` : btn} onClick={() => handleNoteNum(12)}>12</button>
            </div>
        </div>
    )
}
