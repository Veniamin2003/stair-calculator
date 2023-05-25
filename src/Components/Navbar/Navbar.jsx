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
                <NavLink to='/stair-types' className={navData => navData.isActive ? s.active : s.item}>Форма лестницы</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/stair-material' className={navData => navData.isActive ? s.active : s.item}>Материал лестницы</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/ander-stage-type' className={navData => navData.isActive ? s.active : s.item}><div className={s.text}>Наличие подступенка</div></NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/paint-type' className={navData => navData.isActive ? s.active : s.item}><div className={s.text}>Лакокрасочное покрытие</div></NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/stair-size' className={navData => navData.isActive ? s.active : s.item}><div className={s.text}>Размеры</div></NavLink>
            </div>

            <div className={s.item} onClick={countAllSum}>
                <NavLink to='/results' className={navData => navData.isActive ? s.active : s.item }><div className={s.text}>Заявка на рассчет стоимости</div></NavLink>
            </div>
        </nav>
    )
}

export default Navbar;