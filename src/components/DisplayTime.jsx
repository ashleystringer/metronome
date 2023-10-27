import React from 'react'

export default function DisplayTime({ noteValue, noteNumber }) {

    const timeSignature = (
        <div> {noteNumber} / {noteValue} </div>
    );

    return (
        <div className="display-time">
            {(noteValue !== 0 && noteNumber !== 0 ) ? timeSignature : "-"}
        </div>
    )
}
