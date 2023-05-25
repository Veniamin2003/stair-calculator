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
        updateType: (price, selectedId, name) => {
            let action = updateTypeAC(price, selectedId, name);
            dispatch(action);
        }
    }
}

const StairsTypesContainer = connect(mapStateToProps, mapDispatchToProps) (StairsTypes);

export default StairsTypesContainer;