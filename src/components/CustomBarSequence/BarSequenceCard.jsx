import React from 'react';
import "./BarSequenceCard.css";

export default function BarSequenceCard({ BarSequenceData }) {

  const { selectedTempo, barNoteValue, barNoteNumber } = BarSequenceData;

  return (
    <div className="bar-sequence-card">
      <div>Tempo: {selectedTempo}</div>
      <div>Note value: {barNoteValue}</div>
      <div>Note number: {barNoteNumber}</div>
    </div>
  );
}
