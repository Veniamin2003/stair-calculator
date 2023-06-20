import React from 'react'
import ReactDOM from "react-dom/client";
import TasksItems from "./TasksItems";
import Tasks from "./Tasks";
import TaskBlock from "./TaskBlock/TaskBlock";

function IsLogged(props) {
    const isLoggedIn = props.isLogin;
    if (isLoggedIn) {
        return <Tasks/>
    }
    return <TaskBlock/>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <IsLogged />,
    document.getElementById('root')
)

export default IsLogged;