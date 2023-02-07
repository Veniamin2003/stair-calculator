import React from 'react'
import s from './../ContainerCSSModule/Container.module.css'
import PaintTypeItem from "./PaintTypeItem";



function PaintType(props) {
    debugger
    let state = props.typesPage

    let updatePaintType = (price, selectedId) => {
        debugger
        props.updatePaintTypeId(price, selectedId);
    }
    return (
        <div>
            <div className={s.typesLayer}>
                {state.paintType.paintTypeItems.map(el => <PaintTypeItem id={el.id} img={el.img} name={el.name} description={el.description}
                                                          price={el.price} paintTypeSum={state.paintTypeSum}
                                                          selectedId={state.selectedPaintTypeId} updatePaintType={updatePaintType}/>)}
            </div>

        </div>
    )
}

export default PaintType