import React from 'react'

const Buttons = ({onClick, children}) => {
  return (
  <>
  <button className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-600"
        onClick = {onClick} >
            {children}
  </button>
 
 
  </>
  )
}

export default Buttons
