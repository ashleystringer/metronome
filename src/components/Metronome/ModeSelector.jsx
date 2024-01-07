import React from 'react';
import { useMetronome } from "../../contexts/MetronomeProvider";
import SequenceGroupSelector from '../CustomBarSequence/SequenceGroupSelector';

export default function ModeSelector() {

    const { mode, setMode } = useMetronome();

    const handleModeChange = e => {
        setMode(e.target.value);
    }

  return (
    <>
        <select value={mode} onChange={handleModeChange}>
            <option value={"Default"}>
                Default
            </option>
            <option value={"Custom"}>
                Custom
            </option>
        </select>
        { (mode === "Custom") ? (<SequenceGroupSelector/>) : ""}
    </>
  )
}
