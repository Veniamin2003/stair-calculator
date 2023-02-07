import React from "react";
import {connect} from "react-redux";
import {countAllSumAC} from "../../redux/types-reducer";
import Results from "./Results";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        countAllSum: () => {
            debugger
            let action = countAllSumAC();
            dispatch(action);
        }
    }
}

const ResultsContainer = connect(mapStateToProps, mapDispatchToProps)(Results);

export default ResultsContainer;