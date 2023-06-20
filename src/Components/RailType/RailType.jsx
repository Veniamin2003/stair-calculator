import React, {useEffect, useState} from 'react'
import RailTypeItem from "./RailTypeItem";
import s from './../ContainerCSSModule/Container.module.css'
import axios from "axios";

function RailType(props) {
    let state = props.typesPage

    let updateRailType = (price, selectedId, name) => {
        props.updateRailTypeId(price, selectedId, name);
    }

    /*const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/Veniamin2003/stair-calc-json/railTypes')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])*/

    /*let send = () => {
        axios.post('https://my-json-server.typicode.com/Veniamin2003/stair-calc-json/railTypes',
            {
                id: 3,
                name: "Открытая, без перил",
                img: "https://lestnici-na-zakaz.kiev.ua/wp-content/uploads/2020/11/stairway-idea-design_37.jpg",
                price: "0",
                description: "Описание прямой лестницы"
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }*/

    return (

        <div className={s.typesLayer}>
            {state.railTypes.map(el => <RailTypeItem id={el.id} img={el.img} name={el.name} description={el.description}
                                                    price={el.price} paintTypeSum={state.paintTypeSum}
                                                    selectedId={state.selectedRailId}
                                                    updateRailType={updateRailType}/>)}

            {/*{data.map(el => <RailTypeItem id={el.id} img={el.img} name={el.name} description={el.description}
                                                    price={el.price} paintTypeSum={state.paintTypeSum}
                                                    selectedId={state.selectedRailId}
                                                    updateRailType={updateRailType}/>)}*/}
        </div>

    )
}

export default RailType;