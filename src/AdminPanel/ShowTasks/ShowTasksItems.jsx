import React from "react";
import s from "./ShowTaskItem.module.css"
import * as XLSX from "xlsx";

function TasksItem(props) {
    let state = props.state;
    let test = [
        {
            id: 1,
            name: "Высота",
            description: `${state.stairsHeight}`
        },
        {
            id: 2,
            name: "Ширина",
            description: `${state.stairsWidth}`
        },
        {
            id: 3,
            name: "Длина проема",
            description: `${state.stairsLength}`
        },
        {
            id: 4,
            name: "Толщина ступеней",
            description: `${state.stairsThick}`
        },
        {
            id: 5,
            name: "Выступ от края ступени",
            description: `${state.stairsLedge}`
        },
        {
            id: 6,
            name: "Толщина тетивы",
            description: `${state.stairsString}`
        },
        {
            id: 7,
            name: "Кол-во ступеней",
            description: `${state.countStages}`
        },
        {
            id: 8,
            name: "Форма лестницы",
            description: `${state.stairTypeName}`
        },
        {
            id: 9,
            name: "Материал изготовления",
            description: `${state.materialName}`
        },
        {
            id: 10,
            name: "Подступенок",
            description: `${state.underStageType}`
        },
        {
            id: 11,
            name: "Лакокрасочное покрытие",
            description: `${state.paintTypeName}`
        },
        {
            id: 12,
            name: "Наличие перил",
            description: `${state.railTypeName}`
        },
        {
            id: 13,
            name: "Примерная стоимость",
            description: `${state.allSum}`
        },
    ]

    const handleOnExport = () => {
        let wb = XLSX.utils.book_new(),
            ws = XLSX.utils.json_to_sheet(test);

        XLSX.utils.book_append_sheet(wb, ws, "Параметры");

        XLSX.writeFile(wb, "StairCalculator.xlsx")
    }

    return (
        <div key={props.id} className={s.task_item}>
            <h2>Заявка на расчет лестницы с типом: {props.stairTypeName}, от пользователя {props.nameClient} {props.lnameClient}</h2>
            <div className={s.first_block}>
                <div className={s.child}>
                    <div><b>Высота :</b> {props.stairsHeight}</div>
                    <div><b>Ширина:</b> {props.stairsWidth}</div>
                    <div><b>Длина:</b> {props.stairsLength}</div>
                </div>
                <div className={s.child}>
                    <div><b>Толщина ступеней:</b> {props.stairsThick}</div>
                    <div><b>Выступ края ступеней:</b> {props.stairsLedge}</div>
                    <div><b>Толщина тетивы:</b> {props.stairsString}</div>
                </div>
                <div className={s.child}>
                    <div><b>Кол-во ступеней:</b> {props.countStages}</div>
                    <div><b>Материал лестницы:</b>{props.materialName}</div>
                    <div><b>Наличие подступенка:</b>{props.underStageType}</div>
                </div>
                <div className={s.child}>
                    <div><b>Лакокрасочное покрытие:</b>{props.paintTypeName}</div>
                    <div><b>Перила:</b>{props.railTypeName}</div>
                    <div><b>Материал стен:</b>{props.wallMaterialTypeName}</div>
                </div>
            </div>
            <div className={s.second__main_block}>
                <div className={s.second__block}>
                    <div className={s.child_second}><b>Общая примерная сумма:</b> {props.taskSum} рублей</div>
                </div>
                <div className={s.second__block}>
                    <button className={s.btn_ex} onClick={handleOnExport}>Выгрузить в Excel</button>
                </div>
            </div>
            {/*<div className={s.second__block}>
                <button className={s.btn} >Отменить заявку</button>
            </div>*/}

        </div>
    )
}

export default TasksItem;