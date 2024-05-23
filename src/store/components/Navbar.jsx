import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
const Navbar = () => {
  const {cartItems }= useCart()
  return (
    <>
    <div className="navbar">
    <div className="nav-Secton">
    <div className="navSection">
    <Link to='/' className="custom-Link">
  <div className="title">
    <h2 >Shops-Smart</h2>
  </div>
</Link>
        <div className="search">
            <input type="text" placeholder="Search..."/>
        </div>
        <div className="user">
            <Link to='/signin' className='custom-Link'>
            <div className="user-Details">
                SignIn/SignUp
            </div>
            </Link>
        </div>
        
        <Link to='/cart'>
        <div className="cart">
                Cart<span>
            {cartItems.length}
          </span>
            </div>
        </Link>
    </div>
    <div className="subMenu">
            <ul>    
                <Link to='/computers' className='custom-Link'><li>Computers</li></Link>
                <Link to='/watches' className='custom-Link'><li>Watches</li></Link>
                <Link to='/Ac' className='custom-Link'><li>AC</li></Link>
                <Link to='/mobiles' className='custom-Link'><li>Mobiles</li></Link>
                <Link to='/books' className='custom-Link'><li>Books</li></Link>
                <Link to='/fridge' className='custom-Link'><li>Fridges</li></Link>
                <Link to='/furniture' className='custom-Link'><li>Furniture</li></Link>
                <Link to='/kitchen' className='custom-Link'><li>Kitchen</li></Link>
                <Link to='/mens' className='custom-Link'><li>MensWare</li></Link>
                <Link to='/womens' className='custom-Link'><li>WomensWare</li></Link>
                
            </ul>
        </div>
    </div>
    </div>
    
    </>
    
    
    
  )
}

export default Navbar