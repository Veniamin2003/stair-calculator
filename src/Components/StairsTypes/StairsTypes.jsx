import React from 'react'
import s from './../ContainerCSSModule/Container.module.css'
import StairsTypesItem from "./Types/StairsTypesItem";
import Data from "../../DataBase/StairTypes.json"

function StairsTypes(props) {
    let state = props.typesPage

    let onTypeChange = (price, selectedId, name) => {
        props.updateType(price, selectedId, name);
    }

    return (
        <div className={s.typesLayer}>
            {state.stairsTypes.map(el => <StairsTypesItem id={el.id} img={el.img} description={el.description}
                                                          name={el.name} price={el.price}
                                                          selectedId={state.selectedStairsTypesId} onTypeChange={onTypeChange}/>)}

            {/*{Data.stairsTypes.map(el => <StairsTypesItem id={el.id} img={el.img} description={el.description}
                                                          name={el.name} price={el.price}
                                                          selectedId={state.selectedStairsTypesId} onTypeChange={onTypeChange}/>)}*/}
        </div>
    )
}

export default StairsTypes