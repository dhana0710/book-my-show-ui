import React from 'react'

const Cast = (props) => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <div className="w-28 md:w-32 h-28 md:h-32">
                    <img
                        src={props.image}
                        alt="crew man"
                        className="w-full h-full rounded-full"
                    />
                </div>
                <h1 className="text-md md:text-lg text-gray-800">{props.castName}</h1>
                <h5 className="text-sm  text-gray-500">as {props.role}</h5>
            </div>
        </div>
    )
}

export default Cast;

