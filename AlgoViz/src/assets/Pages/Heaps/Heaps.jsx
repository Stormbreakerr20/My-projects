import { useState } from "react";
import Buttons from "./Buttons";
import styled from "styled-components";
import Tree from "./Tree";
function Heaps() {
  const [heapdata, setHeapdata] = useState([[0, null]]);
  return (
    <>
      <div className="flex flex-col mx-auto w-[90vw] h-[75vh] max-sm:h-[80vh] mt-5 gap-5">
        <div className="flex w-[100%] max-xl:justify-center">
          <Buttons heapdata={heapdata} setHeapdata={setHeapdata} />
        </div>
        <Blured className="bg-black w-[100%] h-[100%] flex  flex-col gap-5  rounded-lg items-center justify-center">
          <div className=" flex justify-center gap-3 p-3">
            {heapdata.length > 1 &&  heapdata.slice(1,).map((value, index) => (
              <Box
                key={index}
              >
                {value[0]}
              </Box>
            ))}
          </div>
          <Tree heapdata={heapdata} setHeapdata={setHeapdata} />
        </Blured>
      </div>
    </>
  );
}

export default Heaps;

const Blured = styled.div`
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(100px);
  box-shadow: 0px 0px 30px 20px rgba(255, 168, 0, 0.18);
`;

const Box = styled.div`
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: larger;
    font-weight: 500;
    background-color: white;
    border-radius:10px;

    &:hover{
        background-color: #FFA800;
        color:black;
        cursor: pointer;
    }

    @media (max-width:675px) {
        width: 10vw;
        height: 10vw;
    }

`
