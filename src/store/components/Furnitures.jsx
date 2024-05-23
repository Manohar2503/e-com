import React from 'react'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'
const Furnitures = () => {
    const firstFiveImages = furnitureData.slice(0,5)
  return (
    <>
    <div className="proTitle">
        <h2>Furnitures</h2>
      </div>
   <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <Link to={`/furniture/${item.id}`}>
                    <div className='imgBox'>
                        
                        <img className='proImage' src={item.image} alt="" />
                  
                    </div></Link>
                )
            })
        }
    </div>
   
   </>
  )
}

export default Furnitures