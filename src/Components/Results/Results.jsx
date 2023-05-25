import React from 'react'
import s from './Results.module.css'
import ResultsView from "./ResultsView";

function Results(props) {
    return (
        <div className={s.typesLayer}>
            <ResultsView state={props.typesPage}/>

        </div>
    )
}

export default Results;