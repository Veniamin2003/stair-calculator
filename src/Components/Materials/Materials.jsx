import React from 'react'
import s from './../ContainerCSSModule/Container.module.css'
import MaterialsItem from "./MaterialsItem";

function Materials(props) {
    debugger
    let state = props.typesPage

    let updateMaterial = (price, selectedId) => {
        debugger
        props.updateMaterial(price, selectedId);
    }
    return (
        <div className={s.typesLayer}>
            {state.materials.map(el => <MaterialsItem id={el.id} img={el.img} name={el.name} description={el.description}
                                                      price={el.price} materialSum={state.materialSum}
                                                      selectedId={state.selectedMaterialId} updateMaterial={updateMaterial}/>)}
        </div>
    )
}

export default Materials