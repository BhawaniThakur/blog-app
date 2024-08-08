import React from 'react'

function Logo({width='100px'}) {
  return (
    <div>
      <img className ='rounded'src='/logo.png' style={{
        width:100 + 'px'
      }}alt='Blogy'></img>
    </div>
  )
}

export default Logo