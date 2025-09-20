import {  useRef, useState } from "react";
import Eye from "./Eye";

function Play() {
let videoRef = useRef(null);
let imageRef = useRef(null) 
let videoplay = useRef(null)
let [toggel , setToggel]= useState(0)
function handleVideo(){
if(toggel === 0){   
    videoRef.current.style.opacity =1;
    imageRef.current.style.opacity =0;
    videoplay.current.play()
 setToggel(1)
}
else{
    videoRef.current.style.opacity =0;
    imageRef.current.style.opacity =1;
    videoplay.current.pause()
 setToggel(0)
}
}
    return (
    <div   className="h-full w-full relative ">
      <div ref={videoRef} className="h-full opacity-0 ">
        <video
        ref={videoplay}
          className="h-full w-screen"
                  muted
          loop
          src="https://ochi.design/wp-content/uploads/2022/05/Main-HQ-1.mp4"
        ></video>
      </div>
      <div onClick={handleVideo} ref={imageRef} className="h-full w-full absolute top-0 ">
        <img
          className="h-full w-full"
          src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg"
          alt=""
        />
        <div className="h-48 w-[40%]  absolute top-48  left-84 flex items-center gap-10 justify-center ">
     <Eye/>
        </div>
      </div>
    </div>
  );
}

export default Play;
