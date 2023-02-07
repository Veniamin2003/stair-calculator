import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item1}>
                <NavLink to='/stair-types' className={navData => navData.isActive ? s.active : s.item}>Форма лестницы</NavLink>
            </div>

            <div className={s.item1}>
                <NavLink to='/stair-material' className={navData => navData.isActive ? s.active : s.item}>Материал лестницы</NavLink>
            </div>

            <div className={s.item1}>
                <NavLink to='/ander-stage-type' className={navData => navData.isActive ? s.active : s.item}>Наличие подступенка</NavLink>
            </div>

            <div className={s.item1}>
                <NavLink to='/paint-type' className={navData => navData.isActive ? s.active : s.item}>Лакокрасочное покрытие</NavLink>
            </div>

            <div className={s.item1}>
                <NavLink to='/stair-size' className={navData => navData.isActive ? s.active : s.item}>Размеры</NavLink>
            </div>

            <div className={s.item1}>
                <NavLink to='/results' className={navData => navData.isActive ? s.active : s.item}>Результаты</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;