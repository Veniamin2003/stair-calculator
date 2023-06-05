import {CgSmartHomeRefrigerator} from "react-icons/cg";
import {GiWoodPile} from "react-icons/gi";
import React, {Component} from "react";
import "./NavCalc.css"
/*import q from "../../Images/All/menu-bg-one.png"*/

class NavCalc extends Component {
    state= {
        clicked: false,
        active: false
    };
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    menuItemClick = () => {
        this.setState({active: !this.state.active})
    }


    render () {
        return (
            <>
                <div className="navbar__calc">
                    <a href="tel:89085712253" className="phone__nav_main">
                        +7(992)503-64-01
                        {/*<CgSmartHomeRefrigerator className="logo_navbar"/>*/}
                    </a >
                    <a className="nav_main_desc">
                        <GiWoodPile className="logo_navbar"/>
                    </a>

                    <div>
                        <div id="click" onClick={this.handleClick}  className={this.state.clicked ? "#click active" : "#click"}></div>

                        <ul id="navbar" onClick={this.handleClick}  className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            {/*<li><a href="/fridge-price">Ремонт холодильников</a></li>
                            <li><a href="/wash-price">Ремонт стиральных машин</a></li>
                            <li><a href="/condit-price">Ремонт кондиционеров</a></li>*/}

                            {/*<li><a href="#price_photos">Фото работ</a></li>
                            <li><a href="#contact">Контакты</a></li>*/}
                            <li><a href="http://remonthold74.tilda.ws/srair-calculator">Перейти на сайт</a></li>
                            <li className="nav_phone_mbl" >
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