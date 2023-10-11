import React from 'react'
import Card from './Card'
import w from '../Media/weeding/Groom Necklace.jpg'
import w1 from '../Media/weeding/Hair band.webp'
import w2 from '../Media/weeding/Maxi Gown.jpg'
import w3 from '../Media/weeding/Mens Suit.jpg'
import w4 from '../Media/weeding/Turban.jpg'
import w5 from '../Media/weeding/Weeding Hairband.jpg'

const Weeding = () => {
    const datam = [{
        imglink: w,
        pname: 'Groom Necklace',
        rating: 4.7,
        des:' Stylish  Groom Necklace  ',
        oprice: 100,
        nprice : 50

   },

    {
        imglink:w1,
        pname: 'Hair band',
        rating: 4.4,
        des:'Hair band for girls',
        oprice: 1000,
        nprice : 580
  },
  
    {
        imglink: w2,
        pname: 'Maxi Gown',
        rating: 4.1,
        des:'Maxi Gown for girls',
        oprice: 160,
        nprice : 30

    },
    {
        imglink: w3,
        pname: 'Mens Suit',
        rating: 3.7,
        des:'Stylish Mens Suit for weeding',
        oprice: 1060,
        nprice : 520

 },
 {
  imglink: w4,
  pname: 'Turbun',
  rating: 4.7,
  des:'Mens Turbun for weeding ',
  oprice: 100,
  nprice : 50

},

{
  imglink: w5,
  pname: 'Weeding Hairband',
  rating: 4.4,
  des:'Weeding Hairband for girls weeding',
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

export default Weeding
