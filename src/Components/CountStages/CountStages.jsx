import React from 'react'
import s from './CountStages.module.css'
import photo from "../../Images/Size/1.png"

function CountStages(props) {
    let state = props.typesPage

    let width = React.createRef();
    let height = React.createRef();
    let length = React.createRef();
    let thickStage = React.createRef();
    let ledge = React.createRef();
    let string = React.createRef();

    let onWidthChange = () => {
        let count = width.current.value;
        props.updateWidthStages(count);
    }
    let onHeightChange = () => {
        let count = height.current.value;
        props.updateHeightStages(count);
    }
    let onLengthChange = () => {
        let count = length.current.value;
        props.updateLengthStages(count);
    }

    let onThickStageChange = () => {
        let count = thickStage.current.value;
        props.updateThick(count);
    }
    let onLedgeChange = () => {
        let count = ledge.current.value;
        props.updateLedge(count);
    }
    let onStringChange = () => {
        let count = string.current.value;
        props.updateString(count);
    }
    return (
        <div className={s.typesLayer}>
            <div className={s.containerType}>
                <div className={s.parent}>
                    <div>
                        <div className={s.child}>
                            <div>
                                <p>Ширина ступени, см</p>
                                <textarea onBlur={onWidthChange}
                                          ref={width}/>
                            </div>
                            <div>
                                <p>Высота проема, см</p>
                                <textarea onBlur={onHeightChange}
                                          ref={height}/>
                            </div>
                            <div>
                                <p>Длина проема, см</p>
                                <textarea onBlur={onLengthChange}
                                          ref={length}/>
                            </div>

                            <div>
                                <p>Толщина ступеней, см</p>
                                <textarea onBlur={onThickStageChange}
                                          ref={thickStage}/>
                            </div>
                            <div>
                                <p>Выступ края ступеней, см</p>
                                <textarea onBlur={onLedgeChange}
                                          ref={ledge}/>
                            </div>
                            <div>
                                <p>Толщина тетивы, см</p>
                                <textarea onBlur={onStringChange}
                                          ref={string}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={photo}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CountStages