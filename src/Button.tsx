import React from 'react'


type ButtonProps={
    Children:React.ReactNode;
}


function Button({Children}:ButtonProps) {
  return (
    <div>
      <button> {Children} </button>
    </div>
  )
}

export default Button
