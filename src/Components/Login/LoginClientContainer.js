import React from "react";
import {connect} from "react-redux";
import LoginClient from "./LoginClient";
import {updateActiveClientAC} from "../../redux/types-reducer";
import AdminPanelContainer from "../../AdminPanel/AdminPanelContainer";
import Login from "../../AdminPanel/Login/Login";
import TasksContainer from "../Tasks/TasksContainer";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateActiveClient: (id, name, lname, phone, login, password) => {
            let action = updateActiveClientAC(id, name, lname, phone, login, password);
            dispatch(action);
        },
    }
}

function IsLogged(props) {
    let state = props.typesPage;
    const userActiveName = state.nameClient;
    if (userActiveName !== "") {
        return <TasksContainer state={state}/>
    }
    return <LoginClient state={state} updateActiveClient={props.updateActiveClient}/>
}

const LoginClientContainer = connect(mapStateToProps, mapDispatchToProps) (IsLogged);

export default LoginClientContainer;