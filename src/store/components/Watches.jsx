import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'
const Watches = () => {
    const firstFiveImages = watchData.slice(0,5)
  return (
   <>
    <div className="proTitle">
        <h2>Watches</h2>
      </div>
   <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <Link to={`/watches/${item.id}`}>
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

export default Watches