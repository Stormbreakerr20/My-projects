import React from 'react'
import { useState } from 'react';
import styled from "styled-components";

function SelectNumber({setSelectednumber,Selectednumber,Error,setError}) {

    const [arr,setarr] = useState([[6,"blue"],[5,"blue"],[4,"blue"],[3,"blue"]])

    const numberseleted =(value)=>{
        // setSelectednumber(value);
        // setError("");
    }
    const insertionSort = async () => {
        const sortedArr = [...arr];
        for (let i = 1; i < sortedArr.length; i++) {
          const currentElement = sortedArr[i][0];
          sortedArr[i][1] = "yellow"
          let j = i - 1;
          await disp(sortedArr)
          while (j >= 0 && sortedArr[j][0] > currentElement) {
            sortedArr[j][1] = "yellow"
            await disp(sortedArr)
            sortedArr[j + 1][0] = sortedArr[j][0];
            j--;
            // Set a delay for visualization
            await disp(sortedArr)
          }
          sortedArr[j+1][1] = "red"
          await disp(sortedArr)
          sortedArr[j + 1][0] = currentElement;
          sortedArr[i][1] = "blue";
          await disp(sortedArr)
          for(let k = 0; k<i; k++){
            sortedArr[k][1] = "green"
            await disp(sortedArr)
          }
        }
        sortedArr[sortedArr.length - 1][1] = "green"
        setarr([...sortedArr]);
      };
      const disp = async (sortedArr) => {
        setarr([...sortedArr]);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
  return (
    <>
        <Main> 
            <Numbers>
                {arr.map((value , index) => <Box bg = {value[1]} onClick={insertionSort} isselected = {Selectednumber === value[0]} key = {index}>{value[0]}</Box>)}   
            </Numbers>
            {Error === ""? (Selectednumber===undefined?<p>Select a Number</p>:<p>Number Selected</p>):<Errormessage>{Error}</Errormessage>}
        </Main>
    </>
  )
}

export default SelectNumber

const Numbers =styled.div`
    display: flex;
`
const Main =styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    width: max-content;
    

    p{
        margin: 1rem;
        font-size: 20px;
        font-weight: 700;
        @media (max-width:675px) {
            font-weight: 500;
            margin: 0;
        }
        @media (max-width:675px) {

            font-size: 17px;
        }
    }
    @media (max-width:675px) {
        align-items: center;
        margin-top: 2rem;
    }



`
const Box = styled.div`
    margin: 1rem;
    width: 75px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${(props) => (props.isselected ? "white" : "black")};
    font-size: larger;
    font-weight: 500;
    transition: background-color 0.3s ease-in-out,color 0.3s ease-in-out,border 0.3s ease-in-out;

    background-color: ${(props) => props.bg};
    color: ${(props) => (!props.isselected ? "black" : "white")};
    

    &:hover{
        background-color: black;
        border: 2px solid white;
        color: white;
        transition: background-color 0.3s ease-in-out,color 0.3s ease-in-out,border 0.3s ease-in-out;
        cursor: pointer;
    }

    @media (max-width:675px) {
        width: 10vw;
        height: 10vw;
        margin: 1rem 10px;
    }

`

const Errormessage =styled.p`
    color: red;
`

