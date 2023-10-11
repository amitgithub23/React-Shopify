import React from 'react'
import Card from './Card'
import ki from '../Media/Kids/Cartoon Shirt.jpg'
import ki1 from '../Media/Kids/Disney Pants.webp'
import ki2 from '../Media/Kids/Frill Dress.jpg'
import ki3 from '../Media/Kids/Hulk Shirt.webp'
import ki4 from '../Media/Kids/Kurta Set.webp'
import ki5 from '../Media/Kids/Multicolor Tshirt.webp'
import ki6 from '../Media/Kids/Shirt With Jogger.webp'


const Kids = () => {
    const datam = [{
        imglink: ki,
        pname: 'Cartoon Shirt',
        rating: 4.7,
        des:'Cartoon shirt for small children',
        oprice: 100,
        nprice : 50

   },

    {
        imglink: ki1,
        pname: 'Disney Pants',
        rating: 4.4,
        des:'Disney Pants for children',
        oprice: 1000,
        nprice : 580
  },
  
    {
        imglink: ki2,
        pname: 'Frill Dress',
        rating: 4.1,
        des:'New Frill Dress for children',
        oprice: 160,
        nprice : 30

    },
    {
        imglink:ki3,
        pname: 'Hulk Shirt',
        rating: 3.7,
        des:'Latest Hulk Shirt in the market',
        oprice: 1060,
        nprice : 520

 },
 {
  imglink: ki4,
  pname: 'Kurta Set',
  rating: 4.7,
  des:'Kurta Set new collection',
  oprice: 100,
  nprice : 50

},



{
  imglink: ki6,
  pname: 'Multicolor Tshirt',
  rating: 4.1,
  des:'Multicolor Tshirt for children',
  oprice: 160,
  nprice : 30

},
{
  imglink: ki5,
  pname: 'Shirt With Jogger',
  rating: 3.7,
  des:'New Varity /Shirt With Jogger',
  oprice: 1060,
  nprice : 520

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

export default Kids
