import React from 'react'
import Slider from 'react-slick';

//component
import Poster from '../Poster/poster.component';

//config 
//import PremierCarousalSettings from '../../config/PosterCarousel.config';
import PremierImage from '../../config/TempPosters.config';


const Premier = (props) => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        ],
    };


    return (
        <>
            <div className="flex flex-col item-start text-white md:ml-2 ">
                <h3 className="text-2xl font-bold">
                    Premiers
                </h3>
                <p className="text-sm">
                    Brand new release every Friday
                </p>
            </div>
            <Slider {...settings}>
                {props.images.map((image) => (
                    <Poster {...image} isDark="true" />
                ))}

            </Slider>
        </>
    )
}

export default Premier;

