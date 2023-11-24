import React from 'react'

const Alert = ({ show, text, closepopup, yes}) => {

  return (
    
    <div className='popupcontainer' show={show}>
      <div className='popupbody'>
        <h1>{text}</h1>
        <button onclick={closepopup}>No</button>
        <button onClick={yes}>Yes</button>
      </div>
    </div>
  )
}

export default Alert