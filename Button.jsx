import React from 'react'

const Button = (props) => {
  return (
    <button className='primary px-8 py-2 rounded-xl text-white text-lg'>{props.text}</button>

  )
}

export default Button