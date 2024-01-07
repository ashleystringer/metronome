import React from 'react';
import "./BarSequenceCard.css";
import { useBarSequence } from "../../contexts/BarSequenceProvider";

export default function BarSequenceCard({ BarSequenceData }) {

  const { id, tempo, barNoteValue, barNoteNumber } = BarSequenceData;
  const { deleteBarPattern, updateBarPattern } = useBarSequence();

  return (
    <div className="bar-sequence-card">
      <div>
        <button className='delete-btn' onClick={() => deleteBarPattern(id)}>Delete</button>
        <button className='update-btn'>Update</button>
      </div>
      <div>Tempo: {tempo}</div>
      <div>Note value: {barNoteValue}</div>
      <div>Note number: {barNoteNumber}</div>
    </div>
  );
}
