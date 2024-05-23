import React from 'react'
import { booksData } from '../data/books'
import { Link } from 'react-router-dom'
const Books = () => {
    const firstFiveImages = booksData.slice(0,8)
  return (
    <>
    <div className="proTitle">
        <h2>Books</h2>
      </div>
   <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                   <Link to={`/books/${item.id}`}> 
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

export default Books