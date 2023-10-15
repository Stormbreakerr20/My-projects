import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { state } from '../../../store';
import { useSnapshot } from 'valtio';


function Bars({arr,setArr}) {
  const snap = useSnapshot(state);
  function generateRandomArray(n) {
    if (n <= 0) {
      return [];
    }

    const min = 10;
    const max = 150;

    const randomArray = [];
    for (let i = 0; i < n; i++) {
      const randomValue = Math.floor(Math.random() * 0.5*(max - min) ) + 10
      randomArray.push([randomValue, '#0085FF']);
    }

    return randomArray;
  }
  useEffect(() => {
    setArr((prev) => generateRandomArray(state.ArraySize));
  }, [state.ArraySize]);

  return (
    <Box>
      {arr.map((value, index) => (
        <Sticks
          bg={value[1]}
          w={arr.length}
          h={value[0] * (80/20)}
          key={index}
        >
          {arr.length<35?value[0]:''}
        </Sticks>
      ))}
    </Box>
  );
}

export default Bars;

const Sticks = styled.div`
  background-color: ${(props) => props.bg};
  width: ${(props) => (80 / props.w) + 'vw'};
  height: ${(props) => props.h + 'px'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid rgba(4,22,86,1);
  border-bottom: 2px solid rgba(4,22,86,1);
  border-right: 1px solid rgba(4,22,86,1);
  border-left: 1px solid rgba(4,22,86,1);
`
const Box = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: flex-end;

  & :first-child {
    border-bottom-left-radius: 20px;
    border-left: 2px solid rgba(4,22,86,1);
  }

  & :last-child {
    border-bottom-right-radius: 20px;
    border-right: 2px solid rgba(4,22,86,1);
  }
`
