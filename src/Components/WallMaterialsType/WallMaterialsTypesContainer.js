import React from "react";
import {updateWallMaterialAC} from "../../redux/types-reducer";
import {connect} from "react-redux";
import WallMaterial from "./WallMaterial";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateWallMaterial: (price, selectedId, name) => {
            let action = updateWallMaterialAC(price, selectedId, name);
            dispatch(action);
        }
    }
}

const WallMaterialsTypesContainer = connect(mapStateToProps, mapDispatchToProps) (WallMaterial);

export default WallMaterialsTypesContainer;