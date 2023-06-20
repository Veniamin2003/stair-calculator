import React from 'react';
import StairTypeViewContainer from "./Components/ImageView/StairsTypeView/StairTypeViewContainer/StairTypeViewContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";

export const Layout = ({children}) => {
    return (
        <div className='app-wrapper'>
            <StairTypeViewContainer />
            <NavbarContainer/>
            {children}
        </div>
    );
};
