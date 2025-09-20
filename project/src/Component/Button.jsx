import React from 'react'

function Button({val}) {
  return (
    <>
    <button type="button" className='px-4 py-1 rounded-full border-1 border-black hover:bg-black hover:text-white transition-all'>{val}</button>
    </>
      )
}

export default Button