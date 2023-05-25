import React from "react";
import {updateAnderStageAC} from "../../redux/types-reducer";
import {connect} from "react-redux";
import AnderStage from "./AnderStage/AnderStage";


let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateAnderStage: (price, selectedId, name) => {
            let action = updateAnderStageAC(price, selectedId, name);
            dispatch(action);
        }
    }
}

const AnderStageContainer = connect(mapStateToProps, mapDispatchToProps) (AnderStage);

export default AnderStageContainer;