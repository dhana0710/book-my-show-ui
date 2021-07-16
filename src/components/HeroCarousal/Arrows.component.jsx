import React from "react";

export const NextArrow = (props) => {
    //className
    //style
    //onClick
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, backgroundColor: "gray" }}
                onClick={props.onClick} />
        </>
    );
};


export const PrevArrow = (props) => {
    return (
        <>
            <div className={props.className}
                style={{ ...props.style, backgroundColor: "gray" }}
                onClick={props.onClick} />
        </>
    );
};
