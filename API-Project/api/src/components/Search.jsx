import React from 'react'
import styled from "styled-components";
function Search({Data,setFilterdata}) {
  const togglefoodonsearch=(e)=>{
    if (e.target.value === "") {
      setFilterdata(Data);
      return;
    }
    console.log(e.target.value)
    const filter = Data?.filter((value) => value.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilterdata(filter);
  }
  return (
    <>
        <Container>
            <div className="logo">
              <img src="/images/logo.svg" alt="" />
            </div>
            <div className="inp">
                <input onChange={togglefoodonsearch} type="search" placeholder='Search Food...' />
            </div>
        </Container>
    </>
  )
}

export default Search

const Container =styled.div`
  display: flex;
  
  justify-content: space-between;
  margin: 0 auto;
  width: 90vw;
  
  input{
    padding: 10px;
    border-radius:5px;
    border: 2px solid red;
    background: none;
    color: white;

  }
  input::placeholder{
    color: white;
    font-size: 15px;
  }
`



