import React from 'react'
import { useBarGroup } from "../../context/BarGroupProvider";
import { useBarSequence } from "../../context/BarSequenceProvider";


export default function BarGroupSelector() {

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
