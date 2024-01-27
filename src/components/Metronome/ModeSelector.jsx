import "./css/ModeSelector.css";
import React from 'react';
import { useMetronome } from "../../context/MetronomeProvider";
//import { useLocalStorage } from "../hooks/useLocalStorage";
import BarGroupSelector from '../CustomBarSequence/BarGroupSelector';

export default function ModeSelector() {

    const { mode, setMode } = useMetronome();

    const handleModeChange = e => {
        setMode(e.target.value);
    }

  return (
    <div className="mode-selector-container">
        <select value={mode} onChange={handleModeChange}>
            <option value={"default"}>
                Default
            </option>
            <option value={"custom"}>
                Custom
            </option>
        </select>
        { (mode === "custom") ? (<BarGroupSelector/>) : ""}
    </div>
  )
}
