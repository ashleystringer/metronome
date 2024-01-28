export function simpleTime(noteNumber) {
  const timeSignature = new Array();
  for (let beat = 0; beat < noteNumber; beat++) {
    if (beat == 0) {
      timeSignature.push(1);
    } else {
      timeSignature.push(2);
    }
  }
  return timeSignature;
}

export function compoundTime(noteNumber) {
  const timeSignature = new Array();
  for (let beat = 0; beat < noteNumber; beat++) {
    if (beat == 0) {
      timeSignature.push(1);
    } else if (beat % 3 == 0) {
      timeSignature.push(2);
    } else {
      timeSignature.push(3);
    }
  }
  return timeSignature;
}
