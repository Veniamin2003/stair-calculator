import React from "react";
import {connect} from "react-redux";
import Tasks from "./Tasks";
import TaskCheck from "./TaskCheck";
import TaskBlock from "./TaskBlock/TaskBlock";
import {deleteTaskAC} from "../../redux/types-reducer";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => {
            let action = deleteTaskAC(id);
            dispatch(action);
        },
    }
}

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default TasksContainer;