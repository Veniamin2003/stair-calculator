import React from 'react'
import s from './../ContainerCSSModule/Container.module.css'
import WallMaterialsItem from "./Types/WallMaterialsItem";

function WallMaterial(props) {
    let state = props.typesPage

    let onTypeChange = (price, selectedId, name) => {
        props.updateWallMaterial(price, selectedId, name);
    }

    return (
        <div className={s.typesLayer}>
            {state.wallMaterials.map(el => <WallMaterialsItem id={el.id} img={el.img} description={el.description}
                                                              name={el.name} price={el.price}
                                                              selectedId={state.selectedWallMaterialId} onTypeChange={onTypeChange}/>)}
        </div>
    )
}

export default WallMaterial