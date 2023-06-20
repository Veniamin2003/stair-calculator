import React from "react";
import {connect} from "react-redux";
import Reg from "./Reg";
import {addUserAC} from "../../../redux/types-reducer";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addUser: (nameUser, lnameUser, phoneClient, loginUser, passwordUser) => {
            let action = addUserAC(nameUser, lnameUser, phoneClient, loginUser, passwordUser);
            dispatch(action);
        }
    }
}

const RegContainer = connect(mapStateToProps, mapDispatchToProps) (Reg);

export default RegContainer;