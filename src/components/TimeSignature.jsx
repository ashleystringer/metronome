import React from 'react'

export default function TimeSignature({ setNoteValue, setNoteNumber }) {

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

    return (
        <div className="time-signature">
            Note Value
            <div className="note-value container">
                <button onClick={() => handleNoteValue(4)}>4</button>
                <button onClick={() => {handleNoteValue(8)}}>8</button>
            </div>
            Number of Notes
            <div className="container">
                <button onClick={() => handleNoteNum(2)}>2</button>
                <button onClick={() => handleNoteNum(3)}>3</button>
                <button onClick={() => handleNoteNum(4)}>4</button>
                <button onClick={() => handleNoteNum(5)}>5</button>
                <button onClick={() => handleNoteNum(6)}>6</button>
                <button onClick={() => handleNoteNum(7)}>7</button>
                <button onClick={() => handleNoteNum(8)}>8</button>
                <button onClick={() => handleNoteNum(9)}>9</button>
                <button onClick={() => handleNoteNum(12)}>12</button>
            </div>
        </div>
    )
}
