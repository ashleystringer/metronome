import React, { useState, useEffect } from 'react'

export default function TimeSignature({ 
        setNoteValue,
        noteValue, 
        setNoteNumber,
        noteNumber
    }) {

    useEffect(() => {
        console.log(`noteValue: ${noteValue}`);
    }, [noteValue]);

    function handleNoteValue(data){
        
        setNoteValue(prev => {
            return data;
        });
        
    }

    function handleNoteNum(data){
        console.log(data);
        
        setNoteNumber(prev => {
            return data;
        });
        
    }

    const selectedNoteValue = (selectedNote) => {
        if(noteValue === selectedNote) return "btn selected";
        return "btn";
    }

    const selectedNoteNumber = (selectedNote) => {
        if(noteNumber === selectedNote) return "btn selected";
        return "btn";
    }

    return (
        <div className="time-signature">
            Note Value
            <div className="note-value container">
                <button className={ noteValue === 4 ? "btn selected" : "btn"} onClick={() => handleNoteValue(4)}>4</button>
                <button className={ noteValue === 8 ? "btn selected" : "btn"} onClick={() => {handleNoteValue(8)}}>8</button>
            </div>
            Number of Notes
            <div className="container">
                <button className={ noteNumber === 2 ? "btn selected" : "btn"} onClick={() => handleNoteNum(2)}>2</button>
                <button className={ noteNumber === 3 ? "btn selected" : "btn"} onClick={() => handleNoteNum(3)}>3</button>
                <button className={ noteNumber === 4 ? "btn selected" : "btn"} onClick={() => handleNoteNum(4)}>4</button>
                <button className={ noteNumber === 5 ? "btn selected" : "btn"} onClick={() => handleNoteNum(5)}>5</button>
                <button className={ noteNumber === 6 ? "btn selected" : "btn"} onClick={() => handleNoteNum(6)}>6</button>
                <button className={ noteNumber === 7 ? "btn selected" : "btn"} onClick={() => handleNoteNum(7)}>7</button>
                <button className={ noteNumber === 8 ? "btn selected" : "btn"} onClick={() => handleNoteNum(8)}>8</button>
                <button className={ noteNumber === 9 ? "btn selected" : "btn"} onClick={() => handleNoteNum(9)}>9</button>
                <button className={ noteNumber === 12 ? "btn selected" : "btn"} onClick={() => handleNoteNum(12)}>12</button>
            </div>
        </div>
    )
}
