import React from 'react'
import {Link} from "react-router-dom";

function TaskBlock() {
    return (
        <div>
            <div>
                <p>Для того, чтобы войти в "Мои заявки", необходимо авторизоваться</p>
                <Link to={"/login"}>Авторизоваться</Link>
            </div>
        </div>
    )
}

export default TaskBlock;