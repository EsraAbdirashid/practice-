import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
const Carousel = () => {
        const settings ={
                dots :true,
                infinite:true,
                speed:500,
                slidesToShow :1,
                slidesToScroll:true,

        }
  return (
    <>
    <Slider {...settings}>
<div className="image1">
        <img src="../../public/oo.png" alt="" />
</div>
<div className="image2">
        <img src="../../public/hhh.png" alt="" />
</div>
<div className="image3">
        <img src="../../public/sss.png" alt="" />
</div>

    </Slider>
    </>
  )
}

export default Carousel