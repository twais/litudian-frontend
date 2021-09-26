import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class SliderComponent extends Component {

    constructor(props) {

        super(props);
    
        this.state = {


             
        }

    }
    
    render() {

        const settings = {

            dots: true,

            infinite: true,

            speed: 500,

            slidesToShow: 1,

            slidesToScroll: 1,

            arrows: false,

            appendDots: dots => (

                <div

                    style={{

                        position: "absolute",

                        bottom: '10px',

                        borderRadius: "10px",

                        padding: "10px"

                    }}

                >

                  <ul style={{ margin: "0px" }}> {dots} </ul>

                </div>

            )

        };

        return (

            <div>

                <Slider {...settings}>
                    
                    <div className="h-72">

                        <div className="bg-litudian-orange rounded-md flex flex-1 flex-row justify-center items-center w-full p-10 h-full">

                            <h3 className="text-black text-4xl font-bold">Promo !</h3>

                        </div>
                        
                    </div>

                    <div className="h-72">

                        <div className="bg-litudian-orange rounded-md flex flex-1 flex-row justify-center items-center w-full p-10 h-full">

                            <h3 className="text-black text-4xl font-bold">Promo !</h3>

                        </div>
                        
                    </div>

                    <div className="h-72">

                        <div className="bg-litudian-orange rounded-md flex flex-1 flex-row justify-center items-center w-full p-10 h-full">

                            <h3 className="text-black text-4xl font-bold">Promo !</h3>

                        </div>
                        
                    </div>
                    
                </Slider>
                
            </div>

        )

    }

};

export default SliderComponent;
