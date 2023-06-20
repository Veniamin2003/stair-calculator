import React from 'react'
import s from './Results.module.css'
import ResultsView from "./ResultsView";
import Contact from "../Contact/Contact";

function Results(props) {
    let addTask = (id, allSum, stairsHeight, stairsWidth, stairsLength, stairsThick,
                   stairsLedge, stairsString, countStages, stairTypeName,
                   materialName, underStageType, paintTypeName, railTypeName, wallMaterialTypeName, nameClient, lnameClient) => {
        props.addTask(id, allSum, stairsHeight, stairsWidth, stairsLength, stairsThick,
            stairsLedge, stairsString, countStages, stairTypeName,
            materialName, underStageType, paintTypeName, railTypeName, wallMaterialTypeName, nameClient, lnameClient);
    }
    return (
        <div className={s.typesLayer}>
            <Contact state={props.typesPage} addTask={addTask}/>

        </div>
    )
}

export default Results;