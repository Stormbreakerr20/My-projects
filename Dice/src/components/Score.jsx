import React from 'react'
import styled from "styled-components";

function Score({Scorenow}) {
  return (
    <>
        <Scorearea>
            <p>{Scorenow}</p>
            <h2>Total Score</h2>
        </Scorearea>
    </>
  )
}

export default Score

const Scorearea  = styled.div`
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    p{
        font-size: 100px;
        font-weight: 500;
    }
`

