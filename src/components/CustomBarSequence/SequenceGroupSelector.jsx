import React from 'react'
import { useBarGroup } from "../../contexts/BarGroupProvider";
import { useBarSequence } from "../../contexts/BarSequenceProvider";


export default function SequenceGroupSelector() {

  const { barGroups } = useBarGroup();
  const { selectBarPattern } = useBarSequence();
  /*
    <select>
      {barGroups && barGroups.map(barPattern => {
        return <option key={barPattern.id} value={barPattern.id}>{barPattern.id}</option>
      })}
    </select>
  */

  return (
    <select>

    </select>
  )
}
