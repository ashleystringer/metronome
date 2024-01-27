import React from 'react';
import { useMetronome } from "../../context/MetronomeProvider";
import { useBarSequence } from "../../context/BarSequenceProvider";

export default function CreateBarSequence() {

  const { selectedTempo, noteValue, noteNumber, mode } = useMetronome();
  const { addToCustomBarPattern } = useBarSequence();

  return (
    <>
      <button onClick={ addToCustomBarPattern }>Add Bar Sequence</button>   
    </>
  );
}
