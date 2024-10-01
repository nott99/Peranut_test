import React from 'react'
import Trips from './Trips'

export default function Trip() {
  return (
<div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    flexDirection: 'column' 
}}>
     
            <div style={{ 
                marginTop: 52, 
                fontSize: '5vw', 
                textAlign: 'center', 
                color: 'cyan' 
            }}>
                เที่ยวไหนดี
            </div>
            
       
        <Trips></Trips>
   
</div>

  )
}
