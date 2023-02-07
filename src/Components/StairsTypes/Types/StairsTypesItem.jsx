import s from "../../Materials/Materials.module.css";
import React from "react";

function StairsTypesItem(props) {
    let isActive
    ( props.id === props.selectedId ? isActive = true : isActive = false )

    const containerTypeClass = isActive ? s.containerTypeActive : s.containerType
    return (
        <div key={props.id} className={containerTypeClass} onClick={() => props.onTypeChange(props.price, props.id)}>
            <div className={s.parent}>
                <img src={props.img}/>
                <div className={s.child}>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className={s.nameStair}>
                <h2>{props.name}</h2>
            </div>
        </div>
    )
}

export default StairsTypesItem