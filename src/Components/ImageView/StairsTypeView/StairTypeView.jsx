import React from 'react'
import s from './StairTypeView.module.css'
import m from "./../MaterialView/MaterialView.module.css";

import StairTypeViewItem from "./StairTypeViewItem/StairTypeViewItem";
import MaterialsViewItem from "../MaterialView/MaterialsViewItem";

function StairTypeView(props) {

    let state = props.typesPage
    debugger
    return (
        <div className={s.allBlock}>
            <div className={m.imageBlock}>
                {state.paintType.paintTypeItems.map(el => {
                    if (el.id === state.selectedPaintTypeId) {
                        return (<MaterialsViewItem id={el.id} img={el.viewImg} name={el.name}/>)
                    }
                })}
            </div>

            <div className={s.imageBlock}>
                {state.stairsTypes.map(el => {
                    if (el.id === state.selectedStairsTypesId) {
                        return (<StairTypeViewItem id={el.id} img={el.viewImg}/>)
                    }
                })}
            </div>
            <div>
                <div className={m.imageBlock}>
                    {state.materials.map(el => {
                        if (el.id === state.selectedMaterialId) {
                            return (<MaterialsViewItem id={el.id} img={el.viewImg} name={el.name}/>)
                        }
                    })}
                </div>
                <div className={m.imageBlock}>
                    {state.anderStage.map(el => {
                        if (el.id === state.selectedAnderStageId) {
                            return (<MaterialsViewItem id={el.id} img={el.viewImg} name={el.name}/>)
                        }
                    })}
                </div>
            </div>

        </div>
    )
}

export default StairTypeView