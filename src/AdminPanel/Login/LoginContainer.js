import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {updateActiveUserAC} from "../../redux/types-reducer";
import AdminPanelContainer from "../AdminPanelContainer";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateActiveUser: (id, name, surname, login, password) => {
            let action = updateActiveUserAC(id, name, surname, login, password);
            dispatch(action);
        },
    }
}

function IsLogged(props) {
    let state = props.typesPage;
    const userActiveName = state.nameAU;
    if (userActiveName !== "") {
        return <AdminPanelContainer state={state}/>
    }
    return <Login state={state} updateActiveUser={props.updateActiveUser}/>
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps) (IsLogged);

export default LoginContainer;