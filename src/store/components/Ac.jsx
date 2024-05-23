import React from 'react'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'
const Ac = () => {
    const firstFiveImages = acData.slice(0,5)

  return (
    <>
    <div className="proTitle">
        <h2>Ac</h2>
      </div>
   <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <Link to={`/Ac/${item.id}`}>
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

export default Ac