import React, { useRef } from 'react'

export default function BeatCollection() {
  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current){
      scrollContainerRef.current.scrollLeft -= 100;
    }
  }

  const handleScrollRight = () => {
    if (scrollContainerRef.current){
      scrollContainerRef.current.scrollLeft += 100;
    }
  }
    /*
    - select a beat
    - select an amount of time per beat
    - select a color per time signature
    */


  return (
    <div>
        <div>Beat Collection</div>
        <button onClick={handleScrollLeft}>Scroll Left</button>
        <div ref={scrollContainerRef} style={{ overflowX: "auto", whiteSpace: "nowrap" }}></div>
        <button onClick={handleScrollRight}>Scroll Right</button>
    </div>
  )
}
