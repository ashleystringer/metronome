import "./css/CustomBarSequence.css";
import React from 'react';
import CreateBarSequence from './CreateBarSequence';
import CardCollection from "./CardCollection";

export default function CustomBarSequence() {
  return (
    <div className="custom-bar-sequence-containter">
      <CardCollection/>
      <CreateBarSequence/>
    </div>
  )
}
