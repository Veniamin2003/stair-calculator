import React from "react"
import './footer.css'
import {MdOutlineEmail} from "react-icons/md"
import {FaTelegramPlane} from "react-icons/fa"
import {ImWhatsapp} from "react-icons/im"

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <a href="#" className="footer__logo">VENIAMIN</a>

                <ui className="permalinks">
                    <li><a href="#">Домой</a></li>
                    {/*<li><a href="#">Обо мне</a></li>
                    <li><a href="#">Мой опыт</a></li>
                    <li><a href="#">Мои навыки</a></li>
                    <li><a href="#">Портфолио</a></li>
                    <li><a href="#">Отзывы</a></li>
                    <li><a href="#">Контакты</a></li>*/}
                </ui>

                <div className="footer__social">
                    <a href="mailto:resume@veniamin-petrov.ru"><MdOutlineEmail /></a>
                    <a href="https://msngr.link/wa/79925036401>"><ImWhatsapp /></a>
                    <a href="https://msngr.link/tg/@spainvenk"><FaTelegramPlane /></a>
                </div>

                <div className="footer__copyright">
                    <small>&copy; Veniamin. Frontend React-Redux Developer.</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer