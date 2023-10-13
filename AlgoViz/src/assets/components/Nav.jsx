import React from "react";
import Logo from "/Logo.svg";
import styled from "styled-components";
function Nav() {
  return (
    <div className="flex justify-between pt-1 items-center ">
      <div>
        <img src={Logo} alt="" className="pt-2"/>
      </div>
      <Text className="flex flex-grow items-center justify-center gap-8">
        <span>SORTING</span>
        <span>GRAPHS</span>
        <span>HEAPS</span>
        <span>LINKED-LIST</span>
      </Text>
    </div>
  );
}

export default Nav;
const Text = styled.div`
  color: #ffa800;

  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
