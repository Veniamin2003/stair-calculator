import React from "react"
import s from "./ExportExcel.module.css"
import IMG from "../../Images/Export/lestn.png"
import * as XLSX from "xlsx";


export const ExportExcel = (props) => {
    let state = props.typesPage;

    let resultExcel = state.results;

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
        <div className={s.export_container}>
            <div className={s.content}>
                <h3>Экспорт в Эксель</h3>
                <p>Для того, чтобы получить выбранные Вами параметры в формате эксель, нажмите на кнопку ниже</p>
                <img src={IMG}/>
                <div className={s.btn_block}>
                    <button className={s.btn} onClick={handleOnExport}>Вывести мои параметры в Excel</button>
                </div>
            </div>
        </div>
    );
}