import React from 'react';
import { useBarSequence } from "../../context/BarSequenceProvider";

export default function BarSequenceCreator() {
  const { addToCustomBarPattern } = useBarSequence();

  return (
    <>
      <button className='add-card-btn' onClick={ addToCustomBarPattern }>+</button>
    </>
  );
}
