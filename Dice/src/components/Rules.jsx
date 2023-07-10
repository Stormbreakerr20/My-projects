import React from 'react'
import { styled } from 'styled-components'
import { ImCross } from 'react-icons/im';
function Rules({setShowrules}) {
  return (
    <>
        <Rulesarea>
        <ol>
            <h1>How to play the Dice Game</h1>
            <li>Select any number from above number boxes</li>
            <li>Click on dice image</li>
            <li>If selected number equals dice number, get same points as on Dice</li>
            <li>If you get wrong guess then  2 point will be dedcuted</li>
        </ol>
        <Cross><ImCross onClick={()=>setShowrules(false)}/></Cross>
        </Rulesarea>
    </>
  )
}

export default Rules

const Rulesarea =styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 5rem;
    align-items: center;
    h1{
        font-size: 50px;
        padding-left:0.7rem;
    }
    ol li{
        font-size: 20px;
        padding: 0.7rem;
    }
    padding-right: 5rem;
    position: relative;
    width: max-content;
    background: #FFEFBA;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #FFFFFF, #FFEFBA);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #FFFFFF, #FFEFBA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius:5px;

    @media (max-width:850px) {
        h1{
            font-size:30px;
        }
        ol li{
            font-size: 12px;
            padding: 0.3rem;
        }
        padding: 0;
    }
    @media (max-width:500px) {
        h1{
            font-size:20px;
        }
        ol li{
            font-size: 12px;
            padding: 0.3rem;
        }
        padding: 0;
        width: 80%;
    }




`
const Cross =styled.span`
    position: absolute;
    right: 0;
    top: calc(1rem);
    font-size:25px;
    cursor: pointer;
    @media (max-width:850px) {
        right: -10%;
        font-size: 15px;
        top: 0.5rem;
    }
    @media (max-width:500px) {
        right: -5%;
        font-size: 15px;
        top: 0.5rem;
    }

`