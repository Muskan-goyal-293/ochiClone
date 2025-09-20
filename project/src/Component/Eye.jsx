import React, { useEffect, useState } from 'react'

function Eye() {

    let [rotate ,setRotate] = useState(0);
    useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
let x = e.clientX;
let y = e.clientY;

let centerX = x- window.innerWidth/2;
let centery = y - window.innerHeight/2;

let angle = Math.atan2(centery , centerX)  * (180/Math.PI);
setRotate(angle-180)
    })
})
  return (
    <>
         <div className="h-full w-48 bg-white rounded-full flex items-center  justify-center ">
            <div className="h-36 w-36 bg-black rounded-full flex items-center justify-center ">
              <div style={{transform :`rotate(${rotate}deg)`}} className="h-10 w-full ">
                <div className="h-10 w-10 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="h-full w-48 bg-white rounded-full flex items-center  justify-center ">
            <div className="h-36 w-36 bg-black rounded-full flex items-center justify-center ">
              <div style={{transform :` rotate(${rotate}deg)`}} className="h-10 w-full ">
                <div className="h-10 w-10 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
     </>
  )
}

export default Eye