import React from 'react'
import { womanData } from '../data/woman'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const WomenPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {womanData.map((item)=>
        {
            return(
                <div>
                    <Link to ={`/womens/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt=""/>
                    </div></Link>
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

export default WomenPage