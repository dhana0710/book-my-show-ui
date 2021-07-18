import React from 'react'
import { FaCcVisa, FaCcApplePay } from "react-icons/fa"



//component
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/Cast.component';
import PosterSlider from "../components/PosterSlider/PosterSlider.components";


//config
import TempPoster from "../config/TempPosters.config";


const MoviePage = () => {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            },
        },
        ],
    };

    return (
        <>
            <MovieHero />
            <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
                <div className="flex flex-col items-start gap-3">
                    <h2 className="text-gray-800 font-bold text-lg md:text-2xl">About the movie</h2>
                    <p>Kong is on a journey to find his true home but gets in the way of an enraged Godzilla. The epic clash is only the beginning of the mystery that lies within the core of the Earth.</p>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8 flex flex-col gap-3">
                    <h2 className="text-gray-800 font-bold text-lg md:text-2xl">Applicable offers</h2>
                    <div className="flex flex-col gap-3 md:flex-row">
                        <div className="flex items-start gap-2 bg-yellow-100 p-3 boder border-2 border-dashed border-yellow-400 rounded-md">
                            <div className="w-8 h-8"><FaCcVisa className="w-full h-full" /></div>
                            <div className="flex flex-col items-start ">
                                <h3 className="text-gray-700 font-bold text-sm  md:text-lg">Visa Stream Offer</h3>
                                <p className="text-gray-600 text-sm md:text-base">Get 50% off up to INR 150 on all Visa cards* on BookMyShow Stream.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 bg-yellow-100 p-3 boder border-2 border-dashed border-yellow-400 rounded-md">
                            <div className="w-8 h-8"><FaCcApplePay className="w-full h-full" /></div>
                            <div className="flex flex-col items-start ">
                                <h3 className="text-gray-700  font-bold text-sm md:text-lg">Filmy Pass</h3>
                                <p className="text-gray-600 text-sm md:text-base">  Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                                    Pass @Rs.99</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div>
                    <h2 className="text-gray-800 font-bold text-lg md:text-2xl mb-4">Cast & Crew</h2>
                    <div className="flex flex-wrap gap-4">
                        <Cast
                            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/alexander-skarsgard-1057902-24-03-2017-13-51-10.jpg"
                            castName="Alexander Skarsgard"
                            role="Nathan Lind" />
                        <Cast
                            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/rebecca-hall-7076-11-09-2017-05-49-56.jpg"
                            castName="Rebecca Hall"
                            role="Ilena" />
                        <Cast
                            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/alexander-skarsgard-1057902-24-03-2017-13-51-10.jpg"
                            castName="Alexander Skarsgard"
                            role="Nathan Lind" />
                    </div>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div>
                    <PosterSlider
                        config={settings}
                        images={TempPoster}
                        title="You might also like"
                        isDark={false}
                    />
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div>
                    <PosterSlider
                        config={settings}
                        images={TempPoster}
                        title="BMS XCLUSIV"
                        isDark={false}
                    />
                </div>
            </div>
        </>
    )
}
export default MoviePage;