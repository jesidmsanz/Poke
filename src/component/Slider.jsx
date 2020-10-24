import React from 'react'
import { Carousel } from 'react-responsive-carousel';

class Slider extends React.Component{
    
    render(){
        return(
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src=""
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src=""
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src=""
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    </Carousel>
            </div>
        )
    }
}

export default Slider;