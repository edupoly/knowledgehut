import React from 'react'

export default function Abc(props) {
    console.log(props)
  return (
    <div className='betterview'>
        Abc
        <h2>{props.children}</h2>
    </div>
  )
}
