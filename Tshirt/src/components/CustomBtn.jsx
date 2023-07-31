import React from 'react'
import { useSnapshot } from 'valtio'
import { state } from '../store'
import { getContrastingColor } from '../config/helpers' // by chat gpr to get inner text color

const CustomBtn = ({content,HandleClick,styles}) => {
  const snap = useSnapshot(state)
  return (

    <>
        <button onClick={HandleClick} className={styles} style={{backgroundColor:snap.color,color:getContrastingColor(snap.color)}}>{content}</button>
    </>
  )
}

export default CustomBtn