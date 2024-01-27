import React, { useState } from "react";

export default function MetronomeStartButton({ isMetrOn, setIsMetrOn }) {

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
