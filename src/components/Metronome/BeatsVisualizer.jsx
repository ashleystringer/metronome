import React, { useState, useEffect } from 'react'

export default function BeatsVisualizer({ noteNumber, selectedNote }) {

    const [beats, setBeats] = useState(new Array(4).fill(0));
    
    useEffect(() => {
        if(noteNumber){
            setBeats(new Array(noteNumber).fill(0));
        }
    }, [noteNumber]);

    return (
        <div className="beat-group">
            {beats.map((beat, index) => (
                <span 
                    data-testid="beat"
                    className={selectedNote == (index + 1) ? "visualized-beat selected" : "visualized-beat"} 
                    key={index}
                    ></span>
            ))}
        </div>
    )
}
