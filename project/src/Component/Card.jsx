import React from 'react'
 import ChildCard from './ChildCard';
function Card() {

  
  let cardsInfo =[
    {bgcolor: "#004D43",
      img :"https://ochi.design/wp-content/uploads/2022/04/logo001.svg",
      copywriteVal :"c2019-2025",
      copywrite :true,
      button :false,
    },
    {bgcolor: "black",
      img :"https://ochi.design/wp-content/uploads/2022/04/logo002.svg",
      copywrite :false,
      button :true,
      buttonValue :"RATING 5.0ON CLUTUH"
    }
    ,{bgcolor: "black",
      img :"https://cdn.prod.website-files.com/5d816b07d269385f68dbcab0/5ea29a574423326d48ee3ee9_TFA-Hero-Badge-01-white.svg",
      
         copywrite :false,
      button :true,
      buttonValue :"BUSINESS BOOTCAMP ALUMNI"
    }
    ,
  ]
  
  return (
     <div className='flex items-center justify-center gap-4 px-4 '>
{cardsInfo.map((items,index)=> 
<ChildCard key={index} value={items}>  </ChildCard>)}
     </div>

  
  )

}

export default Card;