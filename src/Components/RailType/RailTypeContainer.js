import React from "react";
import {connect} from "react-redux";
import {updateRailTypeAC} from "../../redux/types-reducer";
import RailType from "./RailType";


let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateRailTypeId: (price, selectedId, name) => {
            let action = updateRailTypeAC(price, selectedId, name);
            dispatch(action);
        }
    }
}

const RailTypeContainer = connect(mapStateToProps, mapDispatchToProps) (RailType);

export default RailTypeContainer;