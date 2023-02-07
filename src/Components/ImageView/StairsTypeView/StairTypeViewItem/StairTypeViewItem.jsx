import s from "../StairTypeView.module.css";
import React from "react";

const StairTypeViewItem = (props) => {
    debugger
    return (
        <div key={props.id} className={s.viewBlock}>
            <div>
                <img src={props.img} className={s.imageBlock}/>
            </div>
        </div>
    )
}

export default StairTypeViewItem