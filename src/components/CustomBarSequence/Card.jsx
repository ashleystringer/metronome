import React, { useEffect } from 'react';
import "./css/Card.css";
import { useBarSequence } from "../../context/BarSequenceProvider";

export default function Card({ BarSequenceData, openUpdateModal, setSelectedSequence }) {

  const { id, tempo, barNoteValue, barNoteNumber } = BarSequenceData;
  const { deleteBarPattern, setIsUpdateModeOn, sequenceIDRef } = useBarSequence();

  const handleUpdateClick = () => {
    console.log(BarSequenceData);
    setSelectedSequence(BarSequenceData);
    openUpdateModal();
    setIsUpdateModeOn(prev => {
      return true;
    });
    sequenceIDRef.current = id;
    console.log(sequenceIDRef.current);
  }

  useEffect(() => {
    console.log('tempo, barNoteValue, or barNoteNumber has changed.');
  }, [tempo, barNoteValue, barNoteNumber]);

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
