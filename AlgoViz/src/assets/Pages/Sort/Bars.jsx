import React, { useState } from 'react'
import styled from 'styled-components'
import { InsertionSort ,BubbleSort} from './SortingAlgos'
function Bars() {
    const initial_color = 'blue'
    const [arr,setArr] = useState([[6,initial_color],[1,initial_color],[5,initial_color],[4,initial_color],[3,initial_color],[2,initial_color]])

  return (
    <Box>
        {arr.map((value , index) => <Sticks onClick={()=> InsertionSort(arr,setArr)} bg = {value[1]} w = {arr.length} h = {value[0]*80} key = {index}>{value[0]}</Sticks>)}   
    </Box>
  )
}
export default Bars

const Sticks = styled.div`
    background-color: ${(props) => props.bg};
    width: ${(props) => (100/props.w) + 'vw'};
    height: ${(props) => props.h + 'px'};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
`
const Box = styled.div`
    background-color: black;
    width: 100vw;
    height: 500px;
    display: flex;
`