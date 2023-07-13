import React from 'react'
import { useState } from 'react';
function useDisclosure() {
    
    const [isOpen,setOpen] =useState(false);
  
    const Open=()=>{
      setOpen(true);
    }
    const Close=()=>{
      setOpen(false);
    }

    return {Open , isOpen ,Close};
}

export default useDisclosure