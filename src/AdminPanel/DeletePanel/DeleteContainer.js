import React from "react";
import {connect} from "react-redux";
import {
    deleteRailTypeAC, deleteStairTypeAC, deleteWallMatTypeAC,
    updateActiveArrRailAC,
    updateActiveArrWallMatAC, updateActiveStairTypeAC,
    updateActiveUserAC
} from "../../redux/types-reducer";
import DeletePanel from "./DeletePanel";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        deleteRailType: (id) => {
            let action = deleteRailTypeAC(id);
            dispatch(action);
        },
        deleteWallMatType: (id) => {
            let action = deleteWallMatTypeAC(id);
            dispatch(action);
        },
        deleteStairType: (id) => {
            let action = deleteStairTypeAC(id);
            dispatch(action);
        },


        updateActiveArrRail: (name) => {
            let action = updateActiveArrRailAC(name);
            dispatch(action);
        },
        updateActiveArrWallMat: (name) => {
            let action = updateActiveArrWallMatAC(name);
            dispatch(action);
        },
        updateActiveStairType: (name) => {
            let action = updateActiveStairTypeAC(name);
            dispatch(action);
        },
    }
}

const DeleteContainer = connect(mapStateToProps, mapDispatchToProps) (DeletePanel);

export default DeleteContainer;