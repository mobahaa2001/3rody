import React from 'react'
import prev from '../../Data/prev.png'
const RightButton = (onClick, onDisable) => {
  return (
    <img
      src={prev}
      alt=""
      width="35px"
      onClick={onClick}
      onDisable={onDisable}
      height="35px"
      style={{ float: 'right', marginTop: '220px', cursor: 'pointer' }}
    />
  )
}

export default RightButton
