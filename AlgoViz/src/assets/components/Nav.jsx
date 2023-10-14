import React from "react";
import Logo from "/Logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex justify-between pt-1 items-center mx-[50px] ">
      <Text className="flex flex-grow items-center justify-center gap-8">
        <Link to="/sorting">
          <span>SORTING</span>
        </Link>
        <Link to="/">
          <span>GRAPHS</span>
        </Link>
        <div>
          <img src={Logo} alt="" className="pt-2 w-[100px] h-[100px]" />
        </div>
        <span>HEAPS</span>
        <span>LINKED-LIST</span>
      </Text>
      
    </div>
  );
}

export default Nav;
const Text = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,300&display=swap");

  color: #ffa800;

  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
