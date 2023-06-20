import React from "react";
import s from "./DeleteItem.module.css"

function DeleteItem(props) {
    return (
        <div key={props.id} className={s.delete__container}>
            <div className={s.del__block}>
                <div className={s.delete__name}>
                    <p>{props.name}</p>
                </div>
                <div>
                    <button className={s.btn} onClick={() => props.deleteParam(props.id)}>Удалить</button>
                </div>
            </div>
        </div>)
}

export default DeleteItem;