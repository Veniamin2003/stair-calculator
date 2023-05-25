import React from "react";
import {connect} from "react-redux";
import {countAllSumAC} from "../../redux/types-reducer";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        countAllSum: () => {
            let action = countAllSumAC();
            dispatch(action);
        }
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;