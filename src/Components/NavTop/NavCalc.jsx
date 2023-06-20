import {CgSmartHomeRefrigerator} from "react-icons/cg";
import {GiWoodPile} from "react-icons/gi";
import React, {Component} from "react";
import "./NavCalc.css"
import s from "../Navbar/Navbar.module.css";
import {Link, NavLink, useNavigate} from "react-router-dom";

/*import q from "../../Images/All/menu-bg-one.png"*/

class NavCalc extends Component {
    state = {
        clicked: false,
        active: false
    };
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    menuItemClick = () => {
        this.setState({active: !this.state.active})
    }

    render() {
        return (
            <>
                <div className="navbar__calc">
                    <a href="tel:89085712253" className="phone__nav_main">
                        +7(992)503-64-01
                        {/*<CgSmartHomeRefrigerator className="logo_navbar"/>*/}
                    </a>
                    <a className="nav_main_desc">
                        {/*<GiWoodPile className="logo_navbar"/>*/}
                        <Link to={"/calc/"}>ЛЕСТНИЧНЫЙ КАЛЬКУЛЯТОР</Link>
                    </a>

                    <div>
                        <div id="click" onClick={this.handleClick}
                             className={this.state.clicked ? "#click active" : "#click"}></div>

                        <ul id="navbar" onClick={this.handleClick}
                            className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li>
                                <NavLink to='/calc/add'>
                                    <div className={s.text}>Панель администратора</div>
                                </NavLink>
                            </li>
                            <li><Link to={"/calc/"}>Перейти на сайт</Link></li>
                            <li className="nav_phone_mbl">
                                <a href="tel:89085712253">+7(992)503-64-01</a>
                                <p>Звонок бесплатный по РФ</p>
                            </li>

                            <li className="nav_phone_desc">
                                <h3>+7(992)503-64-01</h3>
                                <p>Звонок бесплатный по РФ</p>
                            </li>
                        </ul>
                    </div>

                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
            </>
        )
    }
}

export default NavCalc;