import React from 'react'
import './footer.css'
import {BiPhoneCall} from 'react-icons/bi';
import {HiOutlineMail} from 'react-icons/hi';
import {SiInstagram} from 'react-icons/si';
import {CiFacebook} from 'react-icons/ci';
import {AiFillTwitterCircle} from 'react-icons/ai';


const Footer = () => {
  return (
    <div name='contact' className='foot-outer' style={{marginBottom:'25px'}}>

    <div className='footer-main'>
    <table>
        <thead>
            <tr>

            <th>shopify</th>
            <th>Information</th>
            <th>Helpful Links</th>
            <th>Our Services</th>
            <th>Contact Us</th>
            </tr>
        </thead>
        <br />
        <tbody>
           <tr>
            <td rowSpan={3}>A full branding website for visitors</td>
            <td>About Us</td>
            <td>Services</td>
            <td>Orders</td>
            <td rowSpan={2}><span><BiPhoneCall style={{ scale:'1.4'}}/> +91 7753977532</span></td>
          
           </tr>
           <br />
           <tr>
            <td>Location</td>
            <td>Help and Support</td>
            <td>Quality</td>
           
           </tr>
           <br />
           <tr>
            <td rowSpan={3}>Terms of service privacy policy</td>
            <td>Blogs</td>
            <td>Privacy Policy</td>
            <td>Delivery</td>
            <td ><span><HiOutlineMail style={{ scale:'1.4'}} /> login.amit1994@gmail.com </span> </td>
           </tr>
           <br />
           <tr>
            
                <td>Others</td>
                <td>Terms and Condition</td>
                <td>Brands</td>
                <td style={{display:'flex',  justifyContent:'space-around'}}>
                    <button style={{ width:'30px', color:' rgb(41, 120, 120)'}}><SiInstagram style={{fontSize:'19px'}} /> </button> 
                    <button style={{ width:'30px', color:' rgb(41, 120, 120)'}}>  <CiFacebook style={{fontSize:'24px'}}/> </button> 
                    <button style={{ width:'30px', color:' rgb(41, 120, 120)'}}>  <AiFillTwitterCircle   style={{fontSize:'24px'}}/></button> 
                     </td>
        
           </tr>
           <br />
        </tbody>
    </table>
    </div>
    <p className='foot-last'> Thank You for Visiting the Site</p>
    </div>
  )
}

export default Footer
