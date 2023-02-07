import React from 'react'
import AnderStageItem from "./AnderStageItem/AnderStageItem";
import s from './../../ContainerCSSModule/Container.module.css'

function AnderStage(props) {
    debugger
    let state = props.typesPage

    let updateAnderStage = (price, selectedId) => {
        debugger
        props.updateAnderStage(price, selectedId);
    }
    return (
        <div className={s.typesLayer}>
            {state.anderStage.map(el => <AnderStageItem id={el.id} img={el.img} name={el.name} price={el.price} description={el.description}
                                                      selectedId={state.selectedAnderStageId} updateAnderStage={updateAnderStage}/>)}
        </div>
    )
}

export default AnderStage