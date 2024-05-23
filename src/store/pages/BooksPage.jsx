import React from 'react'
import { booksData } from '../data/books'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const BooksPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pageSection">
        {booksData.map((item)=>
        {
            return(
                
                    <Link to={`/books/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt=""/>
                    </div><br/><br/>
                    </Link>
                    
                
            )
        })}
        
    </div>
    </>
  )
}

export default BooksPage