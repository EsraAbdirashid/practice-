import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Logo from './Components/Logo'
const App = () => {
  return (
    <>
    <div className="header p-4 bg-gray-700 text-white flex gap-6 ">
      <div className="logo ">
      <ul>
      <li className='text-2xl font-extrabold underline'><Link to ='/Logo'>MYLOGO</Link></li>
        </ul> 
         </div>
      <div className="menu">
        <nav>
          <ul className='flex gap-[64px] translate-x-[570px] font-extrabold'>
            <li className=' hover:bg-white hover:text-black  hover:underline'>
              <Link to ='/Home'>Home</Link>
            </li>
            <li className=' hover:bg-white hover:text-black  hover:underline'>
              <Link to ='/About'>About</Link>
            </li>
            <li className=' hover:bg-white hover:text-black  hover:underline'>
              <Link to ='/Contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <Routes>
    <Route path='/Logo' element ={<Logo/>}/>
    <Route path='/Home' element ={<Home/>}/>
    <Route path='/About' element ={<About/>}/>
    <Route path='/Contact' element ={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App