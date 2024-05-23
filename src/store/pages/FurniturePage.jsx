import React from 'react'
import { furnitureData } from '../data/furniture'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const FurniturePage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {furnitureData.map((item)=>
        {
            return(
                <div>
                   <Link to={`/furniture/${item.id}`}>
                   <div className="pageImg">
                        <img src={item.image} alt=""/>
                    </div><br/><br/>
                   </Link>
                    <div className="proModel">
                        {item.type},{item.brand}
                    </div>
                </div>
            )
        })}
        
    </div>
    </>
  )
}

export default FurniturePage