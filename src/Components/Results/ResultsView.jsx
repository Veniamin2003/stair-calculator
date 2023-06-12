import React from 'react'
/*import icon from '../../Images/StairsTypes/Result/icon.png'*/
import s from './Results.module.css'
import Contact from "../Contact/Contact";


function ResultsView(props) {
    let state = props.state
    let text = `Параметры моей лестницы: 
    \nВысота: ${state.stairsHeight}см; 
    \nШирина: ${state.stairsWidth}см;
    \nДлина проема: ${state.stairsLength}см; 
    \nТолщина ступеней: ${state.stairsThick}см;  
    \nВыступ от края ступени: ${state.stairsLedge}см;  
    \nТолщина тетивы: ${state.stairsString}см;  
    \nКол-во ступеней ≈ ${state.countStages}; 
    \n\nФорма лестницы: ${state.stairTypeName}; 
    \nМатериал изготовления: ${state.materialName}; 
    \nПодступенок: ${state.underStageType}; 
    \nЛакокрасочное покрытие: ${state.paintTypeName}; 
    \nНаличие перил: ${state.railTypeName}; 
    \nПримерная стоимость = ${state.allSum}.`;

    return (
        <div className={s.typesLayer}>
            <Contact text={text}/>
        </div>
    )
}

export default ResultsView