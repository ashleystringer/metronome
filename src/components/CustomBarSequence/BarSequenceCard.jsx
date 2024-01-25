import React from 'react';
import "./BarSequenceCard.css";
import { useBarSequence } from "../../contexts/BarSequenceProvider";

export default function BarSequenceCard({ BarSequenceData, openUpdateModal, setSelectedSequence }) {

  const { id, tempo, barNoteValue, barNoteNumber } = BarSequenceData;
  const { deleteBarPattern, updateBarPattern, setIsUpdateModeOn } = useBarSequence();

  const handleUpdateClick = () => {
    setSelectedSequence(BarSequenceData);
    openUpdateModal();
    setIsUpdateModeOn(prev => {
      return true;
    });
  }

  return (
    <div className="bar-sequence-card">
      <div>
        <button className='delete-btn' onClick={() => deleteBarPattern(id)}>Delete</button>
        <button className='update-btn' onClick={handleUpdateClick}>Update</button>
      </div>
      <div>Tempo: {tempo}</div>
      <div>Note value: {barNoteValue}</div>
      <div>Note number: {barNoteNumber}</div>
    </div>
  );
}
