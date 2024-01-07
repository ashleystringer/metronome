import React from 'react';
import { useBarSequence } from "../../contexts/BarSequenceProvider";

export default function UpdateCard({ BarSequenceData }) {

    const { selectedTempo, barNoteValue, barNoteNumber } = BarSequenceData;
    const { updateBarPattern } = useBarSequence();

    return (
        <>
            <div className="bar-sequence-card">
                <div>Tempo: {selectedTempo}</div>
                <div>Note value: {barNoteValue}</div>
                <div>Note number: {barNoteNumber}</div>
            </div>
            <button></button>
        </>
    );
}
