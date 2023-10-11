import './home.css'
import React from 'react'
import img from './Media/home.jpg'

const Home = () => {
  return (

    <div name='home' className='main-home'>
    <div className='main-2'>
        <div className='right'>
            <p className='heading'>Bringing the Latest Fashions to You</p>
            <span>
                Make a New Look in You With Good Dress
            </span>
             <p className='right-last'>
               Lorem ipsum dolor sit amet consectetur  repellat quidem similique porro ad quod quasi eveniet consequuntur magni qui reprehenderit consequatur fugiat labore id, quo earum modi, quia ullam? Perferendis nam a obcaecati minima?
             </p>
             <div className='button-last'>

<button> <span className='last-span'>Shop Now</span></button>
 </div>
        </div>
     <div className='left'>

   <img  src={img}  className='left-i' alt="" srcset="" />
     </div>
  
    </div>

    <div style={{marginTop:'60px'}}>
 <div className='last' style={{listStyleType:'none'}}>
  <p ><span className='home-foot'>200k+</span> Clients Visits per Month</p>
  <p > Trusted by<span className='home-foot'>Millions</span> World Wide</p>
  <p ><span className='home-foot'>600K+</span > Happy Clients World Wide</p>
  <p ><span className='home-foot'>200+</span>Syores World Wide</p>
 </div>
 </div>

      
    </div>
  )
}

export default Home
