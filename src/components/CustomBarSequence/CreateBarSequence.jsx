import React from 'react';
import { useMetronome } from "../../contexts/MetronomeProvider";
import { useBarSequence } from "../../contexts/BarSequenceProvider";

export default function CreateBarSequence() {

  const { selectedTempo, noteValue, noteNumber, mode } = useMetronome();
  const { addToCustomBarPattern } = useBarSequence();
 
  /*
  
  */

  return (
    <>
      <div>CreateBarSequence</div>
      <button onClick={ addToCustomBarPattern }>Add Bar Sequence</button>   
    </>
  );
}
