import React from "react";
import {updateHeightStagesAC, updateWidthStagesAC} from "../../redux/types-reducer";
import {connect} from "react-redux";
import CountStages from "./CountStages";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateWidthStages: (count) => {
            debugger
            let action = updateWidthStagesAC(count);
            dispatch(action);
        },

        updateHeightStages: (count) => {
            debugger
            let action = updateHeightStagesAC(count);
            dispatch(action);
        }
    }
}

const CountStagesContainer = connect(mapStateToProps, mapDispatchToProps) (CountStages);

export default CountStagesContainer;