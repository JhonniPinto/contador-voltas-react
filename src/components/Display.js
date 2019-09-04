import React from 'react'

const Display = props => (
    <p className={props.className}>
      <span>{props.primary}</span> <br />
      {props.secondary}
    </p>
)

export default Display