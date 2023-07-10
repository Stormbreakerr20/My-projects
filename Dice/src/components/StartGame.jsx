import React from "react";
import styled from "styled-components";

function StartGame({toggle}) {
  return (
    <>
      <Start>
        <div>
          <img src="/images/dices.png" alt="" />
        </div>
        <div className="content">
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Start>
    </>
  );
}

export default StartGame;

const Start = styled.div`
  display: flex;

  height: 100vh;
  align-items: center;
  justify-content: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: end;

    h1 {
      font-size: 80px;
      font-weight: 800;
    }
  }

  @media (max-width:1100px) {
    flex-direction: column;


    div img{
      object-fit: cover;
      height: auto;
      max-width: 100%;
    }
    .content{
      align-items: center;
      justify-content: center;

      h1{

        width: max-content;
        overflow-wrap: break-word;
        font-size: 15vw;
        
      }
    }
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 0.5rem;
  width: 50%;
  border-radius: 5px;
  border: 1px solid white;
  margin-top: 1rem;

  font-size: 18px;
  font-weight: 500;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;

    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
    cursor: pointer;
  }
`;
