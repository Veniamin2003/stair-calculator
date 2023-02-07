import React from "react";
import s from './../../../Materials/Materials.module.css'

function AnderStageItem(props) {
    let isActive
    ( props.id === props.selectedId ? isActive = true : isActive = false )

    const containerTypeClass = isActive ? s.containerTypeActive : s.containerType

    return (
        <div key={props.id} className={containerTypeClass} onClick={() => props.updateAnderStage(props.price, props.id)}>
            <div className={s.parent}>
                <img src={props.img}/>
                <div className={s.child}>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className={s.name}>
                <h2>{props.name}</h2>
            </div>
        </div>
    )
}

export default AnderStageItem