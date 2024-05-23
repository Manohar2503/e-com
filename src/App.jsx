import React from 'react'
import LandingPage from './store/pages/LandingPage'
import Products from './store/components/Products'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import MobilePage from './store/pages/MobilePage'
import ComputerPage from './store/pages/ComputerPage'
import WatchPage from './store/pages/WatchPage'
import AcPage from './store/pages/AcPage'
import BooksPage from './store/pages/BooksPage'
import FridgePage from './store/pages/FridgePage'
import FurniturePage from './store/pages/FurniturePage'
import KitchenPage from './store/pages/KitchenPage'
import MensPage from './store/pages/MensPage'
import WomenPage from './store/pages/WomenPage'
import MobileSingle from './singles/MobileSingle'
import ComputerSingle from './singles/ComputerSingle'
import WatchesSingle from './singles/WatchesSingle'
import AcSingle from './singles/AcSingle'
import BookSingle from './singles/BookSingle'
import FridgeSingle from './singles/FridgeSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import KitchenSingle from './singles/KitchenSingle'
import MenSingle from './singles/MenSingle'
import WomenSingle from './singles/WomenSingle'
import SinginPage from './store/pages/SinginPage'
import SignUpPage from './store/pages/SignUpPage'
import UserCart from './store/UseCart'



const App = () => {
  return (
    <div className='homepage'>
        <Routes>
        
          <Route path='/' element ={<LandingPage/>}/>
          <Route path='/mens' element ={<MensPage/>}/>
          <Route path='/mobiles' element ={<MobilePage/>}/>
          <Route path='/computers' element ={<ComputerPage/>}/>
          <Route path='/watches' element ={<WatchPage/>}/>
          <Route path='/Ac' element ={<AcPage/>}/>
          <Route path='/books' element ={<BooksPage/>}/>
          <Route path='/fridge' element ={<FridgePage/>}/>
          <Route path='/furniture' element ={<FurniturePage/>}/>
          <Route path='/kitchen' element ={<KitchenPage/>}/>
          
          <Route path='/womens' element ={<WomenPage/>}/>
          <Route path='/signin' element ={<SinginPage/>}/>
          <Route path='/signup' element ={<SignUpPage/>}/>
          <Route path='/mobiles/:id' element ={<MobileSingle/>}/>
          <Route path='/computers/:id' element ={<ComputerSingle/>}/>
          <Route path='/watches/:id' element ={<WatchesSingle/>}/>
          <Route path='/Ac/:id' element ={<AcSingle/>}/>
          <Route path='/books/:id' element ={<BookSingle/>}/>
          <Route path='/fridge/:id' element ={<FridgeSingle/>}/>
          <Route path='/furniture/:id' element ={<FurnitureSingle/>}/>
          <Route path='/kitchen/:id' element ={<KitchenSingle/>}/>
          <Route path='/mens/:id' element ={<MenSingle/>}/>
          <Route path='/womens/:id' element ={<WomenSingle/>}/>
          <Route path='/cart' element={<UserCart/>}/>
          
        </Routes>
    </div>
  )
}

export default App