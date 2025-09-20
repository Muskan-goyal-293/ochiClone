import React from 'react'
import Eye from './Eye'
import Buttontwo from './Button-two'

function Ready() {
  return (
    <>
    <div className='w-full h-auto bg-[#CDEA68] p-4'>
        <div className='text-[15vw] font-[font1] leading-[12vw] flex items-center flex-col'>
        <h1>READY</h1>
        <h1>TO START</h1>
        <h1>THE PROJECT?</h1>
    <div className="h-48 w-[40%]  flex items-center gap-10 justify-center my-28 ">
    <Eye/>
    </div >
    </div>
    <div className='flex items-center justify-center flex-col gap-4'>   <Buttontwo value="START THE PROJECT"/>    
<h4>OR</h4>
<Buttontwo value="HELLO@OCHI.DESIGN"/></div>
 
    </div>
    </>
  )
}

export default Ready