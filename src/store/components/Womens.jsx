import React from 'react'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom'
const Womens = () => {
    const firstFiveImages = womanData.slice(0,5)
  return (
    <>
    <div className="proTitle">
        <h2>Womens ware</h2>
      </div>
   <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                   <Link to={`/womens/${item.id}`}>
                    <div className='imgBox'>
                        
                        <img className='proImage' src={item.image} alt="" />
                  
                    </div>
                   </Link>
                )
            })
        }
    </div>
   
   </>
  )
}

export default Womens