import './about.css'
import React from 'react'
import homeimg from './Media/about.jpg'
import { GrDeliver } from 'react-icons/gr';

const About = () => {
  return (
  <>
    <p name='aboutus' className='about-head'>About Our Services</p>
    <div className='about-main'>
     
     <div className='about-left'>
   <img style={{homeimg}} src={homeimg} alt="" srcset="" />
     </div>
     <div className='about-right'>
         <p className='about-right-1'>
         See Our Fabrics in Action
         </p>
         <p className='about-right-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolore laudantium officia pariatur blanditiis similique?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at ab in perspiciatis accusantium rem temporibus ratione quas soluta non labore tenetur itaque praesentium, eius voluptatum ut neque illo molestiae?
         </p>
         <div className='last-about'>
          <div className='last-about-left'>

          
         <GrDeliver style={{width:'100%', marginTop:'8px'
       
         ,fontSize:'x-large'}}/>  </div>
         <div className='last-about-right'>
         <span style={{width:'100%', marginTop:'5px'}}>Quick and fast delivary services</span>
         </div>
       
        
          </div>
     </div>
    </div>
    </>
  )
}

export default About
