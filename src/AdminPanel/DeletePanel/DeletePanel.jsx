import React, {useRef} from "react";
import s from "./DeletePanel.module.css"
import img from "../../Images/Admin/2.png"
import {useNavigate} from "react-router-dom";
import DeleteItem from "./DeleteItem";

function AdminPanel(props) {
    let state = props.typesPage;

    let activeDelArr = state.activeDelArr;

    const navigate = useNavigate();



    let paramsArr;

    if (activeDelArr === "stair-type"){
        paramsArr = state.stairsTypes;
    }
    else if (activeDelArr === "rail" || activeDelArr === ""){
        paramsArr = state.railTypes;
    }
    else if (activeDelArr === "wallMaterial"){
        paramsArr = state.wallMaterials;
    }


    let deleteParam = (id) => {
        if (activeDelArr === "stair-type") {
            props.deleteStairType(id);
            alert("Параметр успешно удален");
        }
        else if (activeDelArr === "wallMaterial") {
            props.deleteWallMatType(id);
            alert("Параметр успешно удален");
        }
        else if (activeDelArr === "rail") {
            props.deleteRailType(id);
            alert("Параметр успешно удален");
        }
    };

    let getActiveArr = () => {
        debugger
        let selectedParam = document.getElementById('selectedParams').value;

        console.log(activeDelArr);
        if (selectedParam === "rail") {
            props.updateActiveArrRail(selectedParam);
        } else if (selectedParam === "wallMaterial") {
            props.updateActiveArrWallMat(selectedParam);
        }else if (selectedParam === "stair-type") {
            props.updateActiveStairType(selectedParam);
        }
    }
    const toBack = () => {
        navigate('/calc/admin-panel');
    }

    return (
        <div className={s.admin_container}>
            <div className={s.admin_block}>
                <h2>Панель удаления данных</h2>
                <div className={s.form__block}>
                    <div className={s.form__content}>
                        <h3>Выберите тип параметра</h3>
                        <p>Тип параметра</p>
                        <select name="params" id="selectedParams">
                            <option value="stair-type">Форма лестницы</option>
                            <option value="rail">Перила</option>
                            <option value="wallMaterial">Материал стен</option>
                            <option value="material-type">Материал лестницы</option>
                            <option value="paint-type">Лакокрасочное покрытие</option>
                        </select>
                        <button onClick={getActiveArr} className={s.btn__delete}>Показать</button>


                        <div className={s.params__block}>
                            {paramsArr.map(el => <DeleteItem id={el.id} name={el.name} deleteParam={deleteParam}/>)}
                        </div>

                        <button onClick={toBack} className={s.btn__delete}>Назад</button>
                    </div>
                    <div className={s.img__block}>
                        <img src={img}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel;