import React from 'react'
import Carousel from './Carousel'

const Home = () => {
  return (
    <>
 {/* <div className="title translate-y-64">
 <h1>Kusoo Dhawow Bogga Homeka...😘</h1>
 </div> */}
     

     <div className='image item-center '>
        <img src="./public/picture2.webp" className='w-full' alt="" />
     </div>

     <Carousel/>
    </>
  )
}

export default Home