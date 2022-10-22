import React from 'react';
import data from "./data"
import Video from "./Video";
import './Videos.css'


function Videos() {


   
  return (
 <>
  <div class="videos">
     {data.map((item)=>{
    return( <Video Id={item.Id} {...item}/>)
   })}
  </div>
 </>
  )
}

export default Videos