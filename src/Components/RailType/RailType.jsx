import React from 'react'
import RailTypeItem from "./RailTypeItem";
import s from './../ContainerCSSModule/Container.module.css'
import Data from "../../DataBase/RailTypes.json"

function RailType(props) {
    let state = props.typesPage

    let updateRailType = (price, selectedId, name) => {
        props.updateRailTypeId(price, selectedId, name);
    }
    debugger
    return (

        <div className={s.typesLayer}>
            {/*{Data.railTypes.map(el => <RailTypeItem id={el.id} img={el.img} name={el.name} description={el.description}
                                                    price={el.price} paintTypeSum={state.paintTypeSum}
                                                    selectedId={state.selectedRailId}
                                                    updateRailType={updateRailType}/>)}*/}

            {state.railTypes.map(el => <RailTypeItem id={el.id} img={el.img} name={el.name} description={el.description}
                                                    price={el.price} paintTypeSum={state.paintTypeSum}
                                                    selectedId={state.selectedRailId}
                                                    updateRailType={updateRailType}/>)}
        </div>

    )
}

export default RailType;