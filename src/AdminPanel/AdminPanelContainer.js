import React from "react";
import {connect} from "react-redux";
import AdminPanel from "./AdminPanel";
import {addParamRailAC, addParamStairTypeAC, addParamWallMaterialAC} from "../redux/types-reducer";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addParamRail: (id, name, price, desc, photo) => {
            let action = addParamRailAC(id, name, price, desc, photo);
            dispatch(action);
        },
        addParamWallMaterial: (id, name, price, desc, photo) => {
            let action = addParamWallMaterialAC(id, name, price, desc, photo);
            dispatch(action);
        },
        addParamStairType: (id, name, price, desc, photo, viewImg) => {
            let action = addParamStairTypeAC(id, name, price, desc, photo, viewImg);
            dispatch(action);
        },
    }
}

const AdminPanelContainer = connect(mapStateToProps, mapDispatchToProps) (AdminPanel);

export default AdminPanelContainer;