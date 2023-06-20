import React from "react";
import {connect} from "react-redux";
import Results from "./Results";
import {addTaskAC} from "../../redux/types-reducer";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addTask: (id, allSum, stairsHeight, stairsWidth, stairsLength, stairsThick, stairsLedge, stairsString, countStages, stairTypeName, materialName, underStageType, paintTypeName, railTypeName, wallMaterialTypeName, nameClient, lnameClient) => {
            let action = addTaskAC(id, allSum, stairsHeight, stairsWidth, stairsLength, stairsThick, stairsLedge, stairsString, countStages, stairTypeName, materialName, underStageType, paintTypeName, railTypeName, wallMaterialTypeName, nameClient, lnameClient);
            dispatch(action);
        }
    }
}

const ResultsContainer = connect(mapStateToProps, mapDispatchToProps)(Results);

export default ResultsContainer;