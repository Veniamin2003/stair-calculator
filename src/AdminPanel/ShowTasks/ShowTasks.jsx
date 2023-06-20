import React from 'react'
import s from "./ShowTask.module.css"
import ShowTasksItems from "./ShowTasksItems";

function ShowTasks(props) {
    /*let mocData = [
        {   id: 1,
            taskSum: "123456",
            stairsHeight: "Параметр",
            stairsWidth: "Параметр",
            stairsLength: "Параметр",
            stairsThick: "Параметр",
            stairsLedge: "Параметр",
            stairsString: "Параметр",
            countStages: "Параметр",
            stairTypeName: "Параметр лестницы",
            materialName: "Параметр",
            underStageType: "Параметр",
            paintTypeName: "Параметр",
            railTypeName: "Параметр",
            wallMaterialTypeName: "Параметр",
        },
        {   id: 1,
            taskSum: "123456",
            stairsHeight: "Параметр",
            stairsWidth: "Параметр",
            stairsLength: "Параметр",
            stairsThick: "Параметр",
            stairsLedge: "Параметр",
            stairsString: "Параметр",
            countStages: "Параметр",
            stairTypeName: "Параметр лестницы",
            materialName: "Параметр",
            underStageType: "Параметр",
            paintTypeName: "Параметр",
            railTypeName: "Параметр",
            wallMaterialTypeName: "Параметр",
        },
    ]*/
    let state = props.typesPage;


    return (
        <div className={s.task__container}>
            <div className={s.name_block}>
                <h2>Текущие заявки</h2>
            </div>
            <div>
                {/*{mocData.map(el => <TasksItems
                    id={el.id}
                    taskSum={el.taskSum}
                    stairsHeight={el.stairsHeight}
                    stairsWidth={el.stairsWidth}
                    stairsLength={el.stairsLength}
                    stairsThick={el.stairsThick}
                    stairsLedge={el.stairsLedge}
                    stairsString={el.stairsString}
                    countStages={el.countStages}
                    materialName={el.materialName}
                    underStageType={el.underStageType}
                    paintTypeName={el.paintTypeName}
                    railTypeName={el.railTypeName}
                    wallMaterialTypeName={el.wallMaterialTypeName}
                />)}*/}
                {state.tasks.map(el => <ShowTasksItems
                    state={state}
                    id={el.id}
                    taskSum={el.taskSum}
                    stairsHeight={el.stairsHeight}
                    stairsWidth={el.stairsWidth}
                    stairsLength={el.stairsLength}
                    stairsThick={el.stairsThick}
                    stairsLedge={el.stairsLedge}
                    stairsString={el.stairsString}
                    countStages={el.countStages}
                    stairTypeName={el.stairTypeName}
                    materialName={el.materialName}
                    underStageType={el.underStageType}
                    paintTypeName={el.paintTypeName}
                    railTypeName={el.railTypeName}
                    wallMaterialTypeName={el.wallMaterialTypeName}
                    nameClient={ el.nameClient }
                    lnameClient={el.lnameClient}
                   />)}
            </div>
        </div>
    )
}

export default ShowTasks;