import React from 'react'
import styled from "styled-components";

function SelectNumber({setSelectednumber,Selectednumber,Error,setError}) {

    const arr = [1,2,3,4,5,6]

    const numberseleted =(value)=>{
        setSelectednumber(value);
        setError("");
    }

  return (
    <>
        <Main> 
            <Numbers>
                {arr.map((value , index) => <Box onClick={()=>numberseleted(value)} isselected = {Selectednumber === value} key = {index}>{value}</Box>)}   
            </Numbers>
            {Error === ""? (Selectednumber===undefined?<p>Select Number</p>:<p>Number Selected</p>):<Errormessage>{Error}</Errormessage>}
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

    background-color: ${(props) => (props.isselected ? "black" : "white")};
    color: ${(props) => (!props.isselected ? "black" : "white")};
    

    &:hover{
        background-color: black;
        border: 2px solid white;
        color: white;
        transition: background-color 0.3s ease-in-out,color 0.3s ease-in-out,border 0.3s ease-in-out;
        cursor: pointer;
    }

`

const Errormessage =styled.p`
    color: red;
`

