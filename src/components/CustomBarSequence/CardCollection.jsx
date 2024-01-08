import React, { useRef } from 'react';
import "./CardCollection.css";
import { useBarSequence } from "../../contexts/BarSequenceProvider";
import BarSequenceCard from "./BarSequenceCard";

export default function CardCollection() {

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
            return (<BarSequenceCard key={index} BarSequenceData={BarPattern}/>)
          })) : "No bar sequences available"
        }
        <button className='add-card-btn'>+</button>
      </div>
      <button onClick={handleScrollRight} className="scroll-btn">Scroll Right</button>
    </div>
  );
}