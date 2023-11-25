import React, { useState } from 'react'
import Buttons from './Buttons';
import styled from 'styled-components';
import Tree from './Tree';
function Heaps() {
    const [heapdata,setHeapdata] = useState([[0,null]])
  return (
    <>
    <div className="flex flex-col mx-auto w-[80vw] h-[75vh] max-sm:h-[80vh] mt-5 gap-5">
      <div className="flex w-[100%] max-xl:justify-center">
      <Buttons heapdata = {heapdata} setHeapdata={setHeapdata}/>
      </div>
      <Blured className="bg-black w-[100%] h-[100%] overflow-scroll rounded-lg items-center justify-center">
        <Tree heapdata = {heapdata} setHeapdata={setHeapdata}/>
      </Blured>
    </div>
  </>
  )
}

export default Heaps

const Blured = styled.div`
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(100px);
  box-shadow: 0px 0px 30px 20px rgba(255, 168, 0, 0.18);
  overflow: hidden;
`;