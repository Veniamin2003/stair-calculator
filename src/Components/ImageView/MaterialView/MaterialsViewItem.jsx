import m from "../MaterialView/MaterialView.module.css";
import React from "react";

const MaterialsViewItem = (props) => {
    debugger
    return (
        <div key={props.id} className={m.borderBlock}>
            <div className={m.imageBlock}>
                <img src={props.img} />
            </div>
            <div className={m.desc}>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default MaterialsViewItem