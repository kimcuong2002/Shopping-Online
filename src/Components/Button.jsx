import React from 'react'

const Button = ({ name, icon, icon2, className }) => {
  return (
    <button className="`${className}` flex gap-[5px] justify-center items-center">
      <span>{icon}</span>
      <p>{name}</p>
      <span>{icon2}</span>
    </button>
  )
}

export default Button
