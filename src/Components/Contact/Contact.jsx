import React, {useRef} from "react"
import {useNavigate} from 'react-router-dom';

import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {FaTelegramPlane} from "react-icons/fa"
import {ImWhatsapp} from "react-icons/im"
import emailjs from "emailjs-com"

const Contact = (props) => {
    const form = useRef();

    const navigate = useNavigate();
    let state = props.state


    let textTask = `Параметры моей лестницы: 
    \nВысота: ${state.stairsHeight}см; 
    \nШирина: ${state.stairsWidth}см;
    \nДлина проема: ${state.stairsLength}см; 
    \nТолщина ступеней: ${state.stairsThick}см;  
    \nВыступ от края ступени: ${state.stairsLedge}см;  
    \nТолщина тетивы: ${state.stairsString}см;  
    \nКол-во ступеней ≈ ${state.countStages}; 
    \n\nФорма лестницы: ${state.stairTypeName}; 
    \nМатериал изготовления: ${state.materialName}; 
    \nПодступенок: ${state.underStageType}; 
    \nЛакокрасочное покрытие: ${state.paintTypeName}; 
    \nНаличие перил: ${state.railTypeName}; 
    \nМатериал стен: ${state.wallMaterialTypeName}; 
    \n\nПримерная стоимость = ${state.allSum}.`;

    let addTask = () => {
        debugger
        let id = state.tasks.length + 1;
        props.addTask(
            id, state.allSum, state.stairsHeight, state.stairsWidth,
            state.stairsLength, state.stairsThick, state.stairsLedge, state.stairsString, state.countStages, state.stairTypeName,
            state.materialName, state.underStageType, state.paintTypeName, state.railTypeName, state.wallMaterialTypeName, state.nameClient, state.lnameClient);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        //emailjs.sendForm('service_w6mi3gs', 'template_lrpzhbf', form.current, 'kwzRAgWDedV5MOCo-') // на veniapetrov941@gmail.com
        emailjs.sendForm('service_w6mi3gs', 'template_b3e10fs', form.current, 'kwzRAgWDedV5MOCo-') // на info@veniamin-petrov.ru

        e.target.reset();

        addTask();
    };

    return (
        <section id="contact" className="contact">
            <div className="header__text__fridge">
                <h3>Оставьте заявку на полный расчет прямо сейчас</h3>
            </div>

            <div className="container contact__container">

                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>resume@veniamin-petrov.ru</h5>
                        <a href="mailto:resume@veniamin-petrov.ru" target="_blank">Отправить сообщение</a>
                    </article>

                    <article className="contact__option">
                        <FaTelegramPlane className="contact__option-icon"/>
                        <h4>Telegram</h4>
                        <h5>@spainvenk</h5>
                        <a href="https://msngr.link/tg/@spainvenk" target="_blank">Написать в Telegram</a>

                    </article>

                    <article className="contact__option">
                        <ImWhatsapp className="contact__option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+7(992)503-64-01</h5>
                        <a href="https://msngr.link/wa/79925036401>" target="_blank">Написать в WhatsApp</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder={state.nameClient} required />
                    <input type="phone" name="phone" placeholder={state.phoneClient} required />
                    <textarea name="comment" rows="2" placeholder="Оставьте комментарий" required  />
                    <textarea name="message" rows="15" placeholder="Опишите параметры вашей лестницы" value={textTask} required  />
                    <button type="submit" className="btn btn-primary">Жду вашего звонка</button>

                </form>
            </div>
        </section>
    )
}

export default Contact