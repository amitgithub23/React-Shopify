
import React from 'react'

import './newkids.css'
import nkimg from './Media/newk.jpg'


const NewKids = () => {
  return (
    <>
    <div style={{ width:'85vw', margin:'auto'}}>


    <p className='nk-head'>Kids New Collection</p>
    <div className='nk-main'>
     
     <div className='nk-left'>
   <img 
  //  style={{homeimg}}
    src={nkimg} alt="" srcset="" />
     </div>
     <div className='nk-right'>
         <p className='nk-right-1'>
         See Kids How Much Look Beautiful in Collection
         </p>
         <p className='nk-right-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolore laudantium officia pariatur blanditiis similique?
        <br />
  
         </p>
         <div className='last-nk'>
          
    
           <p> Comming Soon </p> 
 
  
     
        
          </div>
     </div>
   
  

    </div>
    </div>
    </>
  )
}

export default NewKids
