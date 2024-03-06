import React, { ref } from 'react';
const { Howl, Howler } = require('howler');

export default function useAudio({ soundFile }) {
  const sound = ref(new Howl({ src: ['sound.mp3'] }));

  function play(){
    sound.current.play();
  }

  function pause(){
    sound.current.pause();
  }

  function stop(){
    sound.current.stop();
  }

  function adjustVolume(volume){
    sound.current.volume(volume);
  }

  return {
    play,
    pause,
    stop,
    adjustVolume
  }
}
