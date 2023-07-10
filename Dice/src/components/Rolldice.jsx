import React from 'react'
import styled from "styled-components";
function Rolldice({Randomnumber,roll,setScorenow,setShowrules}) {
  return (
    <>
        <Rollarea>
          <div onClick={roll}>
            <img src= {`/images/dice_${Randomnumber}.png`} alt="" />
          </div>
            <p>Click on Dice to Roll</p>
            <Button onClick={()=>setScorenow(0)}>Reset Score</Button>
            <Button isOutline={true} onClick={()=>setShowrules(true)} >Show Rules</Button>
        </Rollarea>
    </>
  )
}

export default Rolldice

const Rollarea = styled.div`
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    gap: 1rem;

    p{
        font-size: larger;
        font-weight: 500;
    }
`

const Button = styled.button`
  width: 15%;
  background-color: ${(props) => (props.isOutline ? "black" : "white")};
  color: ${(props) => (!props.isOutline ? "black" : "white")};
  padding: 0.5rem;
  font-size: larger;
  font-weight: 500;
  border-radius: 5px;
  border: 2px solid ${(props) => (props.isselected ? "white" : "black")};

  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out ;

  &:hover {
    background-color: ${(props) => (!props.isOutline ? "black" : "white")};
    color: ${(props) => (props.isOutline ? "black" : "white")};
    border: 2px solid ${(props) => (props.isselected ? "white" : "black")};

    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
    cursor: pointer;
  }
  
`;

