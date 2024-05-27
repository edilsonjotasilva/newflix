import Slider from 'react-slick'
import './Carousel.css'
function Carousel({children}){

    const settings ={
        dots:false,
        infinity: true,
        speed:300,
        centerMode:false,
        variableWidth:true,
        adpativeHeight: true,
        // slidesToShow: 5,
        slidesToScroll: 1
    }
    return(
        <div>
        <Slider {...settings}>
            { children }
        </Slider>
        </div>
    )
}
export default Carousel