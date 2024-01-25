import "./UpdateCardModal.css";
import React from 'react';
import { useBarSequence } from "../../contexts/BarSequenceProvider";

export default function UpdateCardModal({ isModalOpen, closeModal, selectedSequence }) {

    const { tempo, barNoteValue, barNoteNumber } = selectedSequence;
    const { setIsUpdateModeOn } = useBarSequence();


    function handleClick(){
        setIsUpdateModeOn(prev => {
            return false;
        });
        closeModal();
    }

    return (
        <div className={`modal ${isModalOpen ? "open" : ""}`}>
            <div className="modal-content">
                <div className="modal-header">
                    <button className="close-button" onClick={handleClick}>X</button>
                </div>
                <div className="modal-body">
                    <div>Tempo: {tempo}</div>
                    <div>Note value: {barNoteValue}</div>
                    <div>Note number: {barNoteNumber}</div>
                </div>   
                <div className="modal-footer"></div>
            </div>
        </div>
    );
}
