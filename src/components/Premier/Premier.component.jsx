import React from 'react'
import Slider from 'react-slick';

//component
import Poster from '../Poster/poster.component';

//config 
import PremierCarousalSettings from '../../config/PosterCarousel.config';
import PremierImage from '../../config/TempPosters.config';


const Premier = () => {

    return (
        <>
            <div className="flex flex-col item-start text-white md:ml-2 ">
                <h3 className="text-xl font-bold">
                    Premiers
                </h3>
                <p className="text-sm">
                    Brand new release every Friday
                </p>
            </div>
            <Slider {...PremierCarousalSettings}>
                {PremierImage.map((image) => (
                    <Poster {...image} isDark="true" />
                ))}

            </Slider>
        </>
    )
}

export default Premier;

