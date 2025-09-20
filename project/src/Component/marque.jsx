import { motion } from 'motion/react'

function Marque() {
  

  return (
    <div data-scroll data-scroll-speed=".1" data-scroll-section className="w-full py-20 px-4 bg-[#004D43] rounded-[10px] text-white h-[60vh]">
<div className="flex whitespace-nowrap border-t border-b border-green-200 overflow-hidden relative h-[36vh]">
  {["WE ARE OCHI", "WE ARE OCHI"].map((item, index) => (
    <motion.div
      key={index}
      initial={{ x: "0%" }}
      animate={{ x: "-100%" }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      className="flex-shrink-0"
    >
      <h1 className="text-[25vw] font-[font1] pr-10 leading-[14vw]">
        {item}
      </h1>
    </motion.div>
  ))}
</div>


{/* <div  className='flex  whitespace-nowrap  border-t-1 border-b-1 border-green-200 overflow-hidden'  >
    {["WE ARE OCHI" ,"WE ARE OCHI"].map((item,index)=>
    <motion.div initial={{x :"0%"}}animate={{x:"-100%"}} transition={{duration : 5 ,repeat :Infinity ,ease : "linear"}} ><h1 className='text-[25vw] font-[font1] pr-10
    leading-[16vw] mb-8  ' key={index}>{item}</h1></motion.div>)}
</div> */}
    </div>
  )
}

 export default Marque
