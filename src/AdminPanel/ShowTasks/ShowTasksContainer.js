import React from "react";
import {connect} from "react-redux";
import ShowTasks from "./ShowTasks";
import {deleteRailTypeAC} from "../../redux/types-reducer";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const ShowTasksContainer = connect(mapStateToProps, mapDispatchToProps)(ShowTasks);

export default ShowTasksContainer;