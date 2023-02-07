import React from 'react'
import s from './CountStages.module.css'
import photo from "../../Images/StairsTypes/size/size.jpg"

function CountStages(props) {
    let state = props.typesPage

    let newCountElementOne = React.createRef();
    let newCountElementTwo = React.createRef();

    let onWidthPagesChange = () => {
        debugger
        let count = newCountElementOne.current.value;
        props.updateWidthStages(count);
    }

    let onHeightPagesChange = () => {
        debugger
        let count = newCountElementTwo.current.value;
        props.updateHeightStages(count);
    }

    return (
        <div className={s.typesLayer}>
            <div className={s.containerType}>
                <div className={s.parent}>
                    <img src={photo}/>
                    <div className={s.child}>
                        <div>
                            <p>Ширина ступени</p>
                            <textarea onBlur={onWidthPagesChange}
                                      ref={newCountElementOne}/>
                        </div>
                        <div>
                            <p>Высота проема</p>
                            <textarea onBlur={onHeightPagesChange}
                                      ref={newCountElementTwo}/>
                        </div>
                    </div>
                    <div className={s.name}>
                        <h2>Размеры</h2>
                    </div>
                </div>
            </div>
        </div>

        /*<div className={s.typesLayer}>
            <div><h2>Выберите размер</h2></div>
            <div>
                <div className={s.back}>
                    <img src={photo}/>
                </div>
                <div className={s.blockContainer}>
                    <div className={s.textareaBlock}>
                         <textarea onBlur={onWidthPagesChange}
                                   ref={newCountElementOne}
                             /!*value={state.stairsWidth}*!//>
                        <p>(см)</p>
                    </div>
                    <div className={s.textareaBlock}>
                        <textarea onBlur={onHeightPagesChange}
                                  ref={newCountElementTwo}
                            /!*value={state.stairsHeight}*!//>
                        <p>(см)</p>
                    </div>
                </div>
            </div>
        </div>*/
    )
}

export default CountStages