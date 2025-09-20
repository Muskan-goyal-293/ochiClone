import { motion } from "motion/react";
import Button from "./Button";

function Hero() {
  return (

<>
<div  data-scroll-section  data-scroll data-scroll-speed="-.3" >
      <div className="w-full flex items-center justify-between  pt-[12vh] pt-8">
        <div className=" p-4 ">
          {["We created", " Eye-opening", "presentations"].map((items, idx) => {
            return (
              <div key={idx} className="flex items-center w-fit gap-4 ">
                {idx == 1 && (
                  <motion.div
                    initial={{ width: "0" }}
                    animate={{ width: "20vh" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="h-16 w-28  rounded-[10px] overflow-hidden "
                  >
                    <motion.img
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />{" "}
                  </motion.div>
                )}
                <p className="text-9xl leading-[15vh] uppercase font-[font1]">
                  {items}
                </p>
              </div>
            );
          })}
        </div>
        <div className="bg-red-400 px-4 py-2 -rotate-90 origin-top text-white">
          <p>site of the day</p>
        </div>
      </div>
      <div className="w-full border-t-[1.5px] border-t-zinc-200 mt-32">
        <div className="flex items-center justify-between px-2 py-4">
          {[
            "Presentation and storytelling agency",
            "For innovation teams and global brands",
          ].map((item, idx) => {
            return <p key={idx}>{item}</p>;
          })}
          <div>
            <Button val="Start The Project" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Hero;
