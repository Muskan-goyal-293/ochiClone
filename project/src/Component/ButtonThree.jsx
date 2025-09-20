import React from 'react'

function ButtonThree({value}) {
  return (
    <div  className=' w-fit h-10 group  rounded-4xl text-sm overflow-hidden   mt-4 mb-4'>
        <div  className='bg-white py-2 px-2 rounded-4xl  text-black uppercase  w-fit h-10 border-1 border-black '>
            <a href="">{value}</a>
        </div>
        <div   className='bg-black  justify-center uppercase  rounded-full  w-full h-32 flex items-center transition-all duration-500 group-hover:-translate-y-[65%] text-white '>
             <a href="">{value}</a>
        </div>
    </div>
  )
}

export default ButtonThree