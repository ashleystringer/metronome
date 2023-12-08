import React, { useRef } from 'react'

export default function BeatCollection() {

  /*
  - selectedBeat
  */

  /*
  - allow BeatCollection to set the "mode" of the metronome
  - This allows the creation of the collection
  - The collection as it stands can be visualized as a horizontally scrollable list
  - Colors can be assigned to each time signature/set of bars
  */

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
