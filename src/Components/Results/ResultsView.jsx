import React from 'react'
import icon from '../../Images/StairsTypes/Result/icon.png'
import s from './Results.module.css'


function ResultsView(props) {
    debugger
    let state = props.state

    return (
        <div className={s.typesLayer}>
            <div>
                <p>Основываясь на выбранные вами параметры, была расчитана примерная стоимость монтажа лестничной
                    конструкции.
                    При расчете были учтены основные моменты. Для уточнения более точной суммы
                    и тонкостей расчета вам следует связаться с нами любым удобным для вас способом.</p>
                <p>При расчете были учтены: </p>
                <ul>
                    <li>Тип лестничной конструкции</li>
                    <li>Материал изготовления</li>
                    <li>Наличие подступенка</li>
                    <li>Лакокрасочное покрытие</li>
                    <li>Размеры конструкции: Высота - {state.stairsHeight}, Ширина - {state.stairsWidth}</li>
                </ul>
                <p> Количество ступеней ≈ {state.countStages}</p>
                <p> Высота проема между ступенями ≈ 14 см</p>
            </div>
            <div>Итоговая стоимость = {state.allSum}</div>
        </div>
    )
}

export default ResultsView