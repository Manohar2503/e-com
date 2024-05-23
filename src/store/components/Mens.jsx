import React from 'react'
import { menData } from '../data/men'
import { Link } from 'react-router-dom'
const Mens = () => {
    const firstFiveImages = menData.slice(0,5)
  return (
    <>
    <div className="proTitle">
        <h2>Mens ware</h2>
      </div>
   <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <Link to={`/mens/${item.id}`}>
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

export default Mens