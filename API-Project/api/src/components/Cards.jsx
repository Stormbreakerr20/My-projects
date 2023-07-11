import React from "react";
import styled from "styled-components";
import { BASE_URL } from "../App"; //import base of api

function Cards({ Data }) {
  return (
    <>
      <Cardarea>
        <Container>
          {Data?.map((value, index) => (
            <Card key={index}>
              <div className="imgsec">
                <img src={BASE_URL + value.image} alt="" />
              </div>
              <div className="info">
                <div className="txt">
                  <h3>{value.name}</h3>
                  <p>{value.text}</p>
                </div>
                <button>$ {value.price.toFixed(2)}</button>
              </div>
            </Card>
          ))}
        </Container>
      </Cardarea>
    </>
  );
}

export default Cards;

const Cardarea = styled.div`
  background: url("public/images/bg.png");
  height: calc(100vh - 180px);
  background-size: cover;
 
  
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin: 0 auto;
  row-gap: 2rem;
  column-gap: 1rem;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`;
const Card = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  /* above was from figma */
  display: flex;
  color: white;
  padding: 0.5rem;


  .txt {
    display: flex;
    flex-direction: column;
    gap:0.5rem;
    h3{
        margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p{
        font-size: 12px;
    }
    
  }
  .info{
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  button {
    background-color: #ff4343;
    font-size: 12px;
    color: white;
    border: transparent;
    padding: 0.3rem 1rem;
    border-radius: 5px;
    font-weight: bolder;

    margin-top: 15px;

    &:hover {
      background-color: darkred;
    }
  }
`;

