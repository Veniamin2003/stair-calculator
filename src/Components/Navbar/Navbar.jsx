import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    let countAllSum = () => {
        props.countAllSum();
    }

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/calc/stair-types' className={navData => navData.isActive ? s.active : s.item}>Форма лестницы</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/calc/stair-material' className={navData => navData.isActive ? s.active : s.item}>Материал лестницы</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/calc/ander-stage-type' className={navData => navData.isActive ? s.active : s.item}><div className={s.text}>Наличие подступенка</div></NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/calc/paint-type' className={navData => navData.isActive ? s.active : s.item}><div className={s.text}>Лакокрасочное покрытие</div></NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/calc/rails' className={navData => navData.isActive ? s.active : s.item}>Перила</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/calc/wall-materials' className={navData => navData.isActive ? s.active : s.item}>Материал стен</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/calc/stair-size' className={navData => navData.isActive ? s.active : s.item}><div className={s.text}>Размеры</div></NavLink>
            </div>

            <div className={s.item} onClick={countAllSum}>
                <NavLink to='/calc/form' className={navData => navData.isActive ? s.active : s.item }><div className={s.text}>Заявка на рассчет стоимости</div></NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/calc/export' className={navData => navData.isActive ? s.active : s.item }><div className={s.text}>Экспорт в Эксель</div></NavLink>
            </div>
        </nav>
    )
}

export default Navbar;