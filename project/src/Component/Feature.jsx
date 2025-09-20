import { useState } from "react";
import ButtonThree from "./ButtonThree";
import { motion, useAnimation } from "motion/react";

function Feature({ data, index }) {
  let headingvalue = data.heading;
  let splitval = headingvalue.split("");
  let headingvalue2 = data.heading2;
  let splitval2 = headingvalue2.split("");
  const cards = [useAnimation(), useAnimation()];

  function HandelAnimate(index) {
    cards[index].start({ y: "0" });
  }
  function HandelAnimateEnd(index) {
    cards[index].start({ y: "100%" });
  }


  return (
    <>
      <div>
        <div
          key={index}
          className="flex items-center justify-center gap-4 p-4 "
        >
          <motion.div
            onHoverStart={()=> HandelAnimate(0)}
            onHoverEnd={()=> HandelAnimateEnd(0)}
            className="h-fit  w-1/2 "
          >
            <div className="flex items-center gap-2 ">
              <span className="inline-block h-2 w-2 rounded-full bg-black "></span>
              <h6 className="font-[font3] bold-100">{data.heading}</h6>
            </div>
            <motion.div  
            
            className="h-88 w-full  relative mt-4">
              <div className="h-full w-full rounded-2xl overflow-hidden">
                <div className="w-full absolute top-1/2  left-1/2  overflow-hidden -translate-y-1/2 z-10">
                  <h1 className="text-center whitespace-nowrap font-[font1] text-6xl text-[#CDEA68]">
                    {splitval.map((item, index) => (
                      <motion.span
                        key={index}
                        initial={{ y: "100%" }}
                        animate={cards[0]}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="inline-block"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </h1>
                </div>

                <img
                  className="h-full w-full object-cover"
                  src={data.img}
                  alt=""
                />
              </div>
            </motion.div>
            <div className="flex gap-2">
              <ButtonThree value={data.button[0]}></ButtonThree>
              {data.button[1] !== undefined && (
                <ButtonThree value={data.button[1]} />
              )}
            </div>
          </motion.div>

          <motion.div
            onMouseEnter={() => HandelAnimate(1)}
            onHoverEnd={() => HandelAnimateEnd(1)}
            className=" h-fit w-1/2 "
          >
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-black"></span>{" "}
              <h6 className="font-[font3] bold-100">{data.heading2}</h6>
            </div>
            <div className="h-88 w-full mt-4 relative">
              <div className="h-full w-full  rounded-2xl overflow-hidden">
                <div className="w-full absolute top-1/2  right-1/2 overflow-hidden  -translate-y-1/2 z-10">
                  <h1 className="text-center whitespace-nowrap font-[font1] text-6xl text-[#CDEA68]">
                    {splitval2.map((item, index) => (
                      <motion.span
                        key={index}
                        initial={{ y: "100%" }}
                        animate={cards[1]}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="inline-block"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </h1>
                </div>
                <img
                  className="h-full w-full object-cover"
                  src={data.img2}
                  alt=""
                />
              </div>
            </div>
            <div className="flex gap-2">
              <ButtonThree value={data.button2[0]}></ButtonThree>
              {data.button2[1] !== undefined && (
                <ButtonThree value={data.button2[1]} />
              )}

              {data.button2[2] !== undefined && (
                <ButtonThree value={data.button2[2]} />
              )}
              {data.button2[3] !== undefined && (
                <ButtonThree value={data.button2[3]} />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Feature;
