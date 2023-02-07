import React from "react";
import {connect} from "react-redux";
import StairTypeView from "../StairTypeView";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}
let mapDispatchToProps = (dispatch) => {

}

const StairTypeViewContainer = connect(mapStateToProps, mapDispatchToProps) (StairTypeView);

export default StairTypeViewContainer;
