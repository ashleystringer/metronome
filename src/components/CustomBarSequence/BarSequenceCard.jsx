import React from 'react'

export default function BarSequenceCard({ BarSequenceData }) {

  const { selectedTempo, noteValue, noteNumber } = BarSequenceData;

  return (
    <>
      <div>Tempo: {selectedTempo}</div>
      <div>Note value: {noteValue}</div>
      <div>Note number: {noteNumber}</div>
    </>
  );
}
