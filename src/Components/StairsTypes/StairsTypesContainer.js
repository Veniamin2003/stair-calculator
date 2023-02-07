import React from "react";
import {updateTypeAC} from "../../redux/types-reducer";
import {connect} from "react-redux";
import StairsTypes from "./StairsTypes";

let mapStateToProps = (state) => {
    debugger
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateType: (price, selectedId) => {
            debugger
            let action = updateTypeAC(price, selectedId);
            dispatch(action);
        }
    }
}

const StairsTypesContainer = connect(mapStateToProps, mapDispatchToProps) (StairsTypes);

export default StairsTypesContainer;