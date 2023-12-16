import React from 'react';
import { useMetronome } from "../../contexts/MetronomeProvider";
import { useBarSequence } from "../../contexts/BarSequenceProvider";
import CreateBarSequence from './CreateBarSequence';
import CardCollection from "./CardCollection";

export default function CustomBarSequence() {

  const { mode } = useMetronome();
  

  return (
    <>
      {( mode === "" ) ? <div>Default</div> : (
        <>
          <CardCollection/>
          <CreateBarSequence/>
        </>
      )} 
    </>
  )
}
