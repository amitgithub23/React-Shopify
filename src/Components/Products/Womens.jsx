import React from 'react'
import Card from './Card'
import blackg from '../Media/womens/Black, Round-Neck Gown Dress Dresses perfect for Casual occasion..jpg'
import gown from '../Media/womens/Gown.jpg'
import  fp from '../Media/womens/Floral Printed Flared Kurta.jpg'
import dd1 from '../Media/womens/Magenta Toned Dupatta.jpg'
import tp from '../Media/womens/Toned Printed Dupatta.jpg'
import sp from '../Media/womens/nike womens sports wear.webp'

const Womens = () => {
    const datam = [{
        imglink: blackg,
        pname: 'Black Neck Dress',
        rating: 4.7,
        des:'Round-Neck Gown Dress Dresses perfect for Casual occasion',
        oprice: 1000,
        nprice : 900

   },

    {
        imglink: gown ,
        pname: 'Gown ',
        rating: 4.4,
        des:'Stylish gown for women',
        oprice: 1000,
        nprice : 580
  },
  
    {
        imglink: fp,
        pname: ' Flared Kurta',
        rating: 4.1,
        des:'Flared Kurta for womens',
        oprice: 1600,
        nprice : 1300

    },
    {
        imglink: dd1 ,
        pname: 'Magenta Dupatta',
        rating: 3.7,
        des:'Stylish Magenta Dupatta for womens',
        oprice: 2000,
        nprice : 1520

 },
 {
  imglink: tp ,
  pname: 'Printed Dupatta',
  rating: 4.7,
  des:'Vey stylish printed dupatta',
  oprice: 1500,
  nprice : 1100

},

{
  imglink:sp,
  pname: ' sports wear',
  rating: 4.4,
  des:'Sports wear for women',
  oprice: 1000,
  nprice : 580
},


  

]
  return (
    <div style={{
      width:'85vw',
      margin:'auto',
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'space-around',
      marginLeft:'40px',
      marginRight:'40px'
     
      
    }}>
      {datam.map((dat,i)=>{
        return(
          <div key={i}>

            <Card  data={dat} />
          </div>
        )
      })
      }
   
    </div>
  )
}

export default Womens
