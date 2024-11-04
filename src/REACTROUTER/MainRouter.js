import React,{BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './NavBar'
//page -> 

import Home from './Home'
import Page from './Page'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import { Users } from './Users'
import { UserData } from './UserData'
import { Admin } from './Admin.js'
import { Products } from './Prodact.js'

// const LazyAbout = React.lazy(() => import('./About')) 


export default function MainRouter() {
  return (
    <div>
  
        <BrowserRouter>
        <NavBar />
    
        <Routes>

        <Route path="/Home" element={<Home/>} />
        <Route path="/Page" element={<Page/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path='/About' element={<About/>} />
              
         <Route path="**" element={<Error/>} />

        <Route path='/Users' element={<Users />} />
        <Route path=':userId' element={<UserData/>} /> 
        <Route path='admin' element={<Admin/>} />
        <Route path='/prodact' element={<Products/>} />
       

        </Routes>

        </BrowserRouter>
        
    </div>
  )
}
