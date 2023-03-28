import React from 'react'
type ButtonStyleProps={
btnStyle:React.CSSProperties;
}

function ButtonStyle({btnStyle}:ButtonStyleProps) {
  return (
    <div>
      <h1 style={btnStyle}>shariful islma </h1>
    </div>
  )
}

export default ButtonStyle
