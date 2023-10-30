import React, { useEffect } from 'react'

export default function DisplayTime({ noteValue, noteNumber, selectedNote }) {

    useEffect(() => {
        console.log(`selectedNote: ${selectedNote}`);
    }, [selectedNote]);

    const timeSignature = (
        <div> {noteNumber} / {noteValue} </div>
    );

    /*
        - iterate the dots using the number of notes
        - give the dot that corresponds to the selected beat a different color
        - remove the class name once it is no longer selected

        //
    */

    return (
        <>
            <div className="display-time">
                {(noteValue !== 0 && noteNumber !== 0 ) ? timeSignature : "-"}
            </div>
        </>
    )
}
