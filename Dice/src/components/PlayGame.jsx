import React, { useState } from 'react'
import Score from './Score'
import styled from "styled-components";
import SelectNumber from './SelectNumber';
import Rolldice from './Rolldice';
import Rules from './Rules';

function PlayGame() {
  const [Selectednumber, setSelectednumber] = useState();
  const [Randomnumber, setRandomnumber] = useState(1);
  const [Error, setError] = useState("");
  const [Scorenow, setScorenow] = useState(0);
  const [Showrules, setShowrules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roll= ()=>{
    if(Selectednumber===undefined){
      setError("Please Select a Number Before Rolling");
      return;
    }
    let number = generateRandomNumber(1,7);

    setRandomnumber((prev)=>number);

    console.log(Selectednumber);
    console.log(Randomnumber);

    if(number === Selectednumber){
      setScorenow((prev)=>prev+Selectednumber);
    }else{
      setScorenow((prev)=>prev-2);
    }

    setSelectednumber(undefined)
  }

  

  return (
    <>
        <Head>
            <Score Scorenow ={Scorenow}/>
            <SelectNumber setSelectednumber={setSelectednumber} Selectednumber={Selectednumber} Error={Error} setError={setError}  />
        </Head>
        {Showrules?<Rules setShowrules={setShowrules}/>: <Rolldice setShowrules={setShowrules} setScorenow={setScorenow} Randomnumber={Randomnumber} roll={roll} />}
    </>
  )
}

export default PlayGame

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    
    margin: 0 2rem;
    margin-top: 2rem;

`
