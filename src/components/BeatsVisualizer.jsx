import React, { useState, useEffect } from 'react'

export default function BeatsVisualizer({ noteNumber, selectedNote }) {

    const [beats, setBeats] = useState(new Array(4).fill(0));
    
    useEffect(() => {
        //console.log(beats);
        //console.log(noteNumber);
        if(noteNumber){
            setBeats(new Array(noteNumber).fill(0));
        }
    }, [noteNumber]);

    useEffect(() => {
        //console.log(`selectedNote: ${selectedNote}`);
    }, [selectedNote]);

    return (
        <div className="beat-group">
            {beats.map((beat, index) => (
                <span className={ selectedNote == (index + 1) ? "visualized-beat selected" : "visualized-beat"} key={index}></span>
            ))}
        </div>
    )
}
