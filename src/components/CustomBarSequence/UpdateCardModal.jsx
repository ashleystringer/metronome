import "./UpdateCardModal.css";
import React from 'react';
import { useBarSequence } from "../../contexts/BarSequenceProvider";

export default function UpdateCardModal({ isModalOpen, closeModal, selectedSequence }) {

    /*const { tempo, barNoteValue, barNoteNumber } = selectedSequence;
    const { updateBarPattern } = useBarSequence();*/

    console.log(selectedSequence);

    return (
        <div className={`modal ${isModalOpen ? "open" : ""}`}>
            <div className="modal-content">
                <div className="modal-header">
                    <button className="close-button" onClick={closeModal}>X</button>
                </div>
                <div className="modal-body">
                This is a test.
                </div>   
                <div className="modal-footer"></div>
            </div>
        </div>
    );
}
