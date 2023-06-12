import React from "react";
import {connect} from "react-redux";
import {ExportExcel} from "./ExportExcel";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const ExportExcelContainer = connect(mapStateToProps, mapDispatchToProps)(ExportExcel);

export default ExportExcelContainer;