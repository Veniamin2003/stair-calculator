import React from "react";
import {
    updateHeightStagesAC, updateLedgeAC,
    updateLengthStagesAC, updateStringAC,
    updateThickAC,
    updateWidthStagesAC
} from "../../redux/types-reducer";
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
            let action = updateWidthStagesAC(count);
            dispatch(action);
        },
        updateHeightStages: (count) => {
            let action = updateHeightStagesAC(count);
            dispatch(action);
        },
        updateLengthStages: (count) => {
            let action = updateLengthStagesAC(count);
            dispatch(action);
        },
        updateThick: (count) => {
            let action = updateThickAC(count);
            dispatch(action);
        },
        updateLedge: (count) => {
            let action = updateLedgeAC(count);
            dispatch(action);
        },
        updateString: (count) => {
            let action = updateStringAC(count);
            dispatch(action);
        }
    }
}

const CountStagesContainer = connect(mapStateToProps, mapDispatchToProps) (CountStages);

export default CountStagesContainer;