import React from 'react'
import ButtonThree from "./ButtonThree"
function ChildCard({value}) {
 const  {bgcolor ,buttonValue ,img ,copywrite ,button , copywriteVal} = value
    return (
    <div className='h-full w-full '>
            <div style={{backgroundColor :bgcolor ,height :"60vh" , width :"30vw" ,borderRadius :"10px" }}>
        <div className=' flex items-center justify-center py-26 '>
                  <img className='h-24 w-fit ' src={img} alt="" />
                  </div>

                  <div className='h-fit '>
     { copywrite && <h5 className='w-fit mt-4 border-1 border-[#CDEA68] text-[#CDEA68] rounded-full p-2'>{copywriteVal}</h5>}
           {button && <ButtonThree value={buttonValue}/>}

            </div>
        </div>
    </div>
  )
}

export default ChildCard