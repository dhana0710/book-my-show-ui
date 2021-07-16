import React from 'react'
import Slider from 'react-slick';



//component
import Poster from '../Poster/poster.component';


const Premier = () => {
    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0,
        responsive: [
            {
                breakpoints: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoints: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    InitialSlide: 1,
                },
            },
            {
                breakpoints: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    const PremierImage = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-epjvjxmnab-portrait.jpg",
            alt: "Zack",
            title: "King Kong",
            subtitle: "english"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-epjvjxmnab-portrait.jpg",
            alt: "Zack",
            title: "King Kong",
            subtitle: "english"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-epjvjxmnab-portrait.jpg",
            alt: "Zack",
            title: "King Kong",
            subtitle: "english"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-epjvjxmnab-portrait.jpg",
            alt: "Zack",
            title: "King Kong",
            subtitle: "english"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-epjvjxmnab-portrait.jpg",
            alt: "Zack",
            title: "King Kong",
            subtitle: "english"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-epjvjxmnab-portrait.jpg",
            alt: "Zack",
            title: "King Kong",
            subtitle: "english"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-epjvjxmnab-portrait.jpg",
            alt: "Zack",
            title: "King Kong",
            subtitle: "english"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-epjvjxmnab-portrait.jpg",
            alt: "Zack",
            title: "King Kong",
            subtitle: "english"
        },
    ]

    return (
        <>
            <div className="flex flex-col item-start text-white ">
                <h3 className="text-xl font-bold">
                    Premiers
                </h3>
                <p className="text-sm">
                    Brand new release every Friday
                </p>
            </div>
            <Slider {...settings}>
                {PremierImage.map((image) => (
                    <Poster {...image} isDark="true" />
                ))}

            </Slider>
        </>
    )
}

export default Premier;

