import { useRef } from "react";
import ".././index.css";
import Buttontwo from "./Button-two";
function About() {
  return (
    <div  className="w-full h-auto bg-[#CDEA68] py-20">
      <p className="px-8 text-5xl font-[font3]">
        We craft category-defining presentations, brand identities, and digital
        experiences that{" "}
        <span className="line relative">drive funding, sales, </span> and {" "}
        <span className="line relative"> market leadership. </span>
      </p>
      <div className="mt-8 bg-[#99AD53] h-[1px] w-full" />
      <div className="flex p-4 h-auto ">
        <div className="w-[50%]">
          <p>What you can expect:</p>
        </div>
        <div className="w-[30%] ">
          {["We don't just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations that make people say: I want in!" ,"    Our clients make the world go round – from deep tech, aerospace and  robotics to music festivals and Michelin-starred restaurants." ,"Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber,Lexus, Salience Labs, Trawa and AllThingsGo."].map((item , index)=><p key={index} className="mb-4">{item}</p>)} 
        </div>
        <div className="flex flex-col w-[20%]  justify-end pl-36 ">
          <h2 className="mb-4 text-3xl">s:</h2>
          {["Instagram","Behance","Facebook","linkdin"].map((item,index)=><a href="#" key={index} className="line2  relative">{item}</a>
)}
        </div>
      </div>
            <div className="mt-16 bg-[#99AD53] h-[1px] w-full" />

<div className="flex flex-wrap gap-8 justify-between py-8 px-4">

  <div>
    <h1 className="text-5xl mb-12">How We Can Help:</h1>  
    <Buttontwo  value="READ MORE" />
  </div>
    <img 
      className=" object-cover rounded-3xl  h-96 w-1/2" 
      src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" 
      alt="" 
    />
</div>

    </div>
  );
}

export default About;
