import React, { useState } from "react";

export default function StartMetronome({ isMetrOn, setIsMetrOn }) {

  function toggle() {
    setIsMetrOn(prev => {
      return !prev;
    });
  }

  return (
    <>
      <button className="play-btn" onClick={toggle}>{isMetrOn ? "Pause" : "Start"}</button>
    </>
  );
}
