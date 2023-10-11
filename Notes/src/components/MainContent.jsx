import React, { useState } from 'react'
import EmojiSection from './EmojiSection';
import NotesSection from './NotesSection';

function MainContent() {
    const Bg ={
        default:['bg-defaultbg','bg-defaultemoji'],
        happy:['bg-happybg','bg-happyemoji'],
        smile:['bg-smilebg','bg-smileemoji'],
        ok:['bg-okbg','bg-okemoji'],
        sad:['bg-sadbg','bg-sademoji'],
    }
    
    const [currentMode,setMode] = useState("default");

  return (
    <>
        <div className='flex justify-between h-[100%] '>
            <div className={` ${Bg[currentMode][1]} w-[20%]  rounded-l-xl`}><EmojiSection setMode={setMode} currentMode={currentMode} Bg={Bg}/></div>
            <div className={` ${Bg[currentMode][0]} flex-grow rounded-r-xl`}><NotesSection currentMode={currentMode}/></div>
        </div>
    </>
  )
}

export default MainContent