import React, { useState, useRef } from 'react';
import "./css/CardCollection.css";
import { useBarSequence } from "../../context/BarSequenceProvider";
import Card from "./Card";
import UpdateCardModal from './UpdateCardModal';

export default function CardCollection() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedSequence, setSelectedSequence] = useState({});
const { customBarPattern } = useBarSequence();

  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 100; // adjust scroll amount as needed
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 100; // adjust scroll amount as needed
    }
  };

  return (
    <div className="card-collection">
      <button onClick={handleScrollLeft} className="scroll-btn">Scroll Left</button>
      <div ref={scrollContainerRef} className="scroll-container">
        { (customBarPattern.length !== 0) ? (customBarPattern.map((BarPattern, index) => {
            return (<Card 
              key={index} 
              BarSequenceData={BarPattern} 
              openUpdateModal={() => setIsModalOpen(true)} 
              setSelectedSequence={setSelectedSequence}
              />)
          })) : "No bar sequences available"
        }
      </div>
      <button className='add-card-btn'>+</button>
      <button onClick={handleScrollRight} className="scroll-btn">Scroll Right</button>
      <UpdateCardModal 
        isModalOpen={isModalOpen} 
        closeModal={() => setIsModalOpen(false)}
        selectedSequence={selectedSequence}
        />
    </div>
  );
}