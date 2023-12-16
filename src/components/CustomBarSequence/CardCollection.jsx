import React, { useRef } from 'react';
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
    <div>
      <button onClick={handleScrollLeft}>Scroll Left</button>
      <div ref={scrollContainerRef} style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        { (customBarPattern.length !== 0) ? (customBarPattern.map((BarPattern, index) => {
            return (<BarSequenceCard key={index} BarSequenceData={BarPattern}/>)
          })) : "No bar sequences available"
        }
      </div>
      <button onClick={handleScrollRight}>Scroll Right</button>
    </div>
  );
}