import React, { useEffect } from 'react';
import { useMetronome } from "../../contexts/MetronomeProvider";
import BeatsVisualizer from "./BeatsVisualizer";

export default function DisplayTime() {

    const { noteValue, noteNumber, selectedNote } = useMetronome();

    const timeSignature = (
        <div> {noteNumber} / {noteValue} </div>
    );

    return (
        <>
            <div className="display-time">
                {(noteValue !== 0 && noteNumber !== 0 ) ? timeSignature : "-"}
            </div>
            <BeatsVisualizer noteNumber={noteNumber} selectedNote={selectedNote}/>
        </>
    )
}
