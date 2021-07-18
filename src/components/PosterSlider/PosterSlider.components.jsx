import React from 'react'
import Slider from 'react-slick';

//component
import Poster from '../Poster/poster.component';

//config 
import PremierCarousalSettings from '../../config/PosterCarousel.config';




const PosterSlider = (props) => {
    const sliderConfig = props.config ? props.config : PremierCarousalSettings;
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className={`flex flex-col item-start text-white md:ml-2 ${props.isDark ? "text-white" : "text-gray-700"} my-2`}>
                    <h3 className="text-2xl font-bold">
                        {props.title}
                    </h3>
                    <p className="text-sm">
                        {props.subTitle}
                    </p>
                </div>
                <Slider {...sliderConfig}>
                    {props.images.map((image) => (
                        <Poster {...image} isDark={props.isDark} />
                    ))}

                </Slider>

            </div>

        </>
    )

}


export default PosterSlider;