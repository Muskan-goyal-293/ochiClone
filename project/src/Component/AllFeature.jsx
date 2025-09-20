import React from 'react'
import Feature from './Feature'
import ButtonTwo from "./Button-two"

function AllFeature() {
let array=[{
heading:"Salience Labs",
img:"https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png",
button:["Brand identity","pitch deck"],
heading2:"Medallia Experience",
img2:"https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png",
button2:["conference","executive keynote","product lanunch"]
},
{
heading:"AH2 & Matt Horn",
img:"https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png",
button:["pitch deck"],
heading2:"vise",
img2:"https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png",
button2:["agency","compant presentation"]
},
{
heading:"Softstart",
img:"https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg",
button:["brended templayte","sales deck"],
heading2:"fyde",
img2:"https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png",
button2:["audit","copywrite","sales deck","slides design"]
},
{
heading:"All Things Go",
img:"https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png",
button:["brend identyity","pitck deck"],
heading2:"Cardboard Spaceship",
img2:"https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png",
button2:["brended templates","sales deck","social media templates"]
},{
heading:"Trawa",
img:"https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
button:["brend identyity","design research","investor deck"],
heading2:"Premium Blend",
img2:"https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png",
button2:["brended templates"]
},
]

  return (
<>
      <div className="w-full h-auto ">
        <div className="py-10 px-4 border-b-2 border-zinc-400 ">
          <h1 className="text-5xl font-[font2] ">Featured Project</h1>
        </div>
      </div>

{array.map((items, index)=><Feature data={items} key={index}/>)}
<div className='flex items-center justify-center py-8'>
<ButtonTwo value="VIEW ALL CASE STUDIES "/>
</div>
</>
  )
}

export default AllFeature