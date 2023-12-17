import React from 'react';
import "./BarSequenceCard.css";

export default function BarSequenceCard({ BarSequenceData }) {

  const { selectedTempo, noteValue, noteNumber } = BarSequenceData;

  return (
    <div className="bar-sequence-card">
      <div>Tempo: {selectedTempo}</div>
      <div>Note value: {noteValue}</div>
      <div>Note number: {noteNumber}</div>
    </div>
  );
}
