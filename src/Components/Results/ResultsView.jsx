import React from 'react'
import icon from '../../Images/StairsTypes/Result/icon.png'
import s from './Results.module.css'
import Contact from "../Contact/Contact";


function ResultsView(props) {
    let state = props.state
    let text = `Параметры моей лестницы: 
    \nВысота: ${state.stairsHeight}см, Ширина: ${state.stairsWidth}см, Кол-во ступеней ≈ ${state.countStages}, 
    \nФорма лестницы: ${state.stairTypeName}, 
    \nМатериал изготовления: ${state.materialName}, 
    \nПодступенок: ${state.underStageType}, 
    \nЛакокрасочное покрытие: ${state.paintTypeName}, 
    \nПримерная стоимость = ${state.allSum}`


    return (
        <div className={s.typesLayer}>
            <Contact text={text}/>
        </div>
    )
}

export default ResultsView