import "./css/CustomBarSequence.css";
import React from 'react';
import BarSequenceCreator from './BarSequenceCreator';
import CardCollection from "./CardCollection";

export default function BarSequenceCustomizer() {
  return (
    <div className="custom-bar-sequence-container">
      <CardCollection/>
    </div>
  )
}
