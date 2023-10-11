import React from 'react'
import './reviews.css'

import { images } from './ReviewsData';

import { AiOutlineDoubleRight ,AiOutlineDoubleLeft} from 'react-icons/ai';

const Reviews = () => {
  const [current, setCurrent] = React.useState(2);

  React.useEffect(()=>{

    setInterval((current)=>{

      setCurrent((current)=>current===images.length-1? 0:current+1
      )
    },2000)

  },[])

  return (
   <>
      <p className='rev-heading'>Customer Reviews</p>
   <div className='carousel-main'>

    <div className='carousel-img' 
    // style={{backgroundImage:`url(${images[current].img})`}}
    >  
   

  <div className='rev-left' onClick={()=>setCurrent(current===0?images.length-1:current-1)}>  <AiOutlineDoubleLeft/></div>
  {/* <button className='rev-left'>  <AiOutlineDoubleLeft/></button> */}
 <div className='carousel-img' style={{display:'grid', placeItems:'center'}} >

  <img className='rev-centre' style={{width:'100%', height:'40%', display:'grid', placeItems:'center'}} src={images[current].img} alt="" srcset="" />
 </div>
  <div className='rev-right' onClick={()=>setCurrent(current===images.length-1? 0:current+1)}><AiOutlineDoubleRight/></div>
  </div >



   </div>
   </>
  );
}

export default Reviews
