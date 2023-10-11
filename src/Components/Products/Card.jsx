import './card.css'


import React from 'react'

export default function Card({data}) {

  return (
    <div style={{
      display:'flex',
      flexWrap:'wrap',
   width: '100%',
   scale:'1.1',
   marginBottom:'50px'
    }}>

    <div className='card-body'>
    <div className='card-img'>
<img src={data.imglink} alt="" srcset="" />
    </div>
    <div style={{margin:'3px 3px'}}>


    <div className='pro-name'>
      <p  >
         {data.pname}
      </p>
      <span>
       <p className='rating'>
       {data.rating}
       </p> </span>

    </div>
    <div className='pro-des'>
      <p>
     {data.des}
      </p>
    
    </div>
    <div className='pro-last'>
      <p style={{ textDecoration:'line-through' }}>
      ₹{data.oprice}
      </p>
      <p style={{ color:'green'}}>
      ₹{data.nprice}
      </p>
    </div>
    </div>
  </div>
    </div>
  )
}


