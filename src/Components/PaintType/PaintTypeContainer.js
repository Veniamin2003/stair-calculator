import React from "react";
import {updateMaterialAC} from "../../redux/types-reducer";
import {connect} from "react-redux";
import {updatePaintTypeAC} from "../../redux/types-reducer";
import PaintType from "./PaintType";


let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePaintTypeId: (price, selectedId, name) => {
            let action = updatePaintTypeAC(price, selectedId, name);
            dispatch(action);
        }
    }
}

const PaintTypeContainer = connect(mapStateToProps, mapDispatchToProps) (PaintType);

export default PaintTypeContainer;