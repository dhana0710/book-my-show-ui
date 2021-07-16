import React from "react";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";

//components
import Navbar from "../components/Navbar/navbar.component";


const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <HeroCarousal />
            {/*{props.children}*/}
        </>

    );

};
export default DefaultLayout;