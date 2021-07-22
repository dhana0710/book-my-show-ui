import React from "react";




const Poster = (props) => {
    return (
        <>
            <div className="flex flex-col items-start gap-2 px-1 md:px-3 ">
                <div className="sm:h-40 md:h-96 ">
                    <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-md" />
                </div>
                <h3 className={`text-md md:text-lg font-bold  ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.original_title}</h3>
                <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.subtitle}</p>
            </div>
        </>
    );

};


export default Poster;
