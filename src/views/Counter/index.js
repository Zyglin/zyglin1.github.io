// eslint-disable-next-line no-unused-vars
import React from 'react'

const counter = props => {
  return (
    <div className="counter">
      <h1>{props.Count}</h1>
      <button className="btn" onClick={props.Increment}>
        Increment
      </button>
      <button className="btn" onClick={props.Decrement}>
        Decrement
      </button>
      <button className="btn" onClick={props.Reset}>
        Reset
      </button>
    </div>
  )
}

export default counter
