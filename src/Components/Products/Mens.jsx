import React from 'react';
import Card from './Card';
import blackhoody from '../Media/men/black hoody.jpg';
import bluejeans from '../Media/men/BLUE JEANS.webp'
import bluetshirt from '../Media/men/BLUE TSHIRT.jpg'
import formalblack from '../Media/men/formal black.webp'
import redjeans from '../Media/men/red jeans.webp'
import simplekurta from '../Media/men/simple kurta.jpg'
import stylishkurta from '../Media/men/stylesh kurta.jpg'

const Mens = () => {
    const datam = [{
        imglink: blackhoody,
        pname: 'Black Hoody',
        rating: 4.7,
        des:'Black color best hoody for mens',
        oprice: 400,
        nprice : 350

   },

    {
        imglink: bluejeans,
        pname: 'Blue Jeans',
        rating: 4.4,
        des:'Blue jeans stylish for mens',
        oprice: 1000,
        nprice : 880
  },
  
    {
        imglink: bluetshirt,
        pname: 'Blue T-shirt',
        rating: 4.1,
        des:'Stylish blue t-shirt for mens',
        oprice: 1600,
        nprice : 1200

    },
    {
        imglink: formalblack,
        pname: 'Formal Black',
        rating: 3.7,
        des:'Formal black pants for mens',
        oprice: 600,
        nprice : 520

 },
 {
  imglink: redjeans,
  pname: 'Red Jeans',
  rating: 4.7,
  des:'Very stylish red jeans for mens',
  oprice: 790,
  nprice : 600

},

{
  imglink: simplekurta,
  pname: 'Simple Kurta',
  rating: 4.4,
  des:'Simple and light kurta for mens',
  oprice: 1000,
  nprice : 780
},

{
  imglink: stylishkurta,
  pname: 'Stylish Kurta',
  rating: 4.1,
  des:'Stylish kurta for mens',
  oprice: 800,
  nprice : 430

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
      // gap:'60px',
    
     
      
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

export default Mens
