import React, {useRef} from "react";
import s from "./AdminPanel.module.css"
import img from "../Images/Admin/1.png"
import {useNavigate} from "react-router-dom";

function AdminPanel(props) {
    let state = props.typesPage;

    const navigate = useNavigate();

    let isOriginal = false;

    let paramsArr;
    let paramACName;


    let nameParam = React.createRef();
    let priceParam = React.createRef();
    let descParam = React.createRef();
    let photoParam = React.createRef();
    let viewImgParam = React.createRef();

    const addParam = () => {
        let selectedParam = document.getElementById('selectedParams').value;

        if (selectedParam === "rail"){
            paramsArr = state.railTypes;
            paramACName = "Rail";
        }
        else if (selectedParam === "wallMaterial"){
            paramsArr = state.wallMaterials;
            paramACName = "wallMaterial";
        }
        else if (selectedParam === "stair-type"){
            paramsArr = state.stairsTypes;
            paramACName = "stair-type";
        }

        for (const param of paramsArr) {
            if (param.name !== nameParam.current.value) {
                isOriginal = true;
            } else {
                isOriginal = false;
                break
            }
        }

        if (isOriginal) {
            let id = paramsArr.length + 1;

            if(paramACName === "Rail")
            {
                props.addParamRail(id, nameParam.current.value, +priceParam.current.value, descParam.current.value, photoParam.current.value);
            }
            else if(paramACName === "wallMaterial")
            {
                props.addParamWallMaterial(id, nameParam.current.value, +priceParam.current.value, descParam.current.value, photoParam.current.value);
            }
            else if(paramACName === "stair-type")
            {
                props.addParamStairType(id, nameParam.current.value, +priceParam.current.value, descParam.current.value, photoParam.current.value, viewImgParam.current.value);
            }
            alert("Параметры успешно добавлены");
            nameParam.current.value = "";
            priceParam.current.value = "";
            descParam.current.value = "";
            photoParam.current.value = "";
            debugger
            console.log(state.railTypes)
        } else {
            alert("Параметр с таким названием уже есть");
        }
    };

    const openDelete = () => {
        navigate('/calc/delete-panel');
    }

    const openTasks = () => {
        navigate('/calc/show-tasks-admin');
    }


    return (
        <div className={s.admin_container}>
            <div className={s.admin_block}>
                <h2>Панель администратора</h2>
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

                        <div className={s.params__block}>
                            <p>Название параметра</p>
                            <input ref={nameParam} type="text" required />
                        </div>
                        <div className={s.params__block}>
                            <p>Цена за 1 ед. измерения (руб)</p>
                            <input ref={priceParam} type="number" required />
                        </div>
                        <div className={s.params__block_desc}>
                            <p>Описание</p>
                            <textarea ref={descParam} rows="2" maxLength={150} required  />
                        </div>
                        <div className={s.params__block}>
                            <p>Ссылка на фотографию</p>
                            <input ref={photoParam} type="text" required />
                            <input ref={viewImgParam} type="text" required />
                        </div>

                        <button onClick={addParam} className={s.btn}>Добавить</button>
                        <button onClick={openDelete} className={s.btn__delete}>Перейти в панель удаления</button>
                        <button onClick={openTasks} className={s.btn__task}>Посмотреть активные заявки</button>
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