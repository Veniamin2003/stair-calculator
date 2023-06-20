import React, {useState} from 'react'
import s from "./LoginClient.module.css"
import {Link, useNavigate} from 'react-router-dom';
import {BiShowAlt} from "react-icons/bi"


function LoginClient(props) {
    const navigate = useNavigate();

    let state = props.state;

    let users = state.usersClient;
    let login = React.createRef();
    let password = React.createRef();


    const handleClick = () => {
        let isLogin = false;
debugger
        console.log(state.usersClient)
        for (const user of users) {
            if (user.login === login.current.value && user.password === password.current.value) {
                let id = user.id;
                let name = user.name;
                let lname = user.lname;
                let phone = user.phone;
                let login = user.login;
                let password = user.password;

                props.updateActiveClient(id, name, lname, phone, login, password);
                navigate('/calc/my-tasks');
                isLogin = true;
                break;
            }
        }

        if (!isLogin) {
            alert("Неправильный логин или пароль")
        }
    }

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className={s.loginContainer}>
            <div className={s.loginForm}>
                <div className={s.content}>
                    <h2>Авторизация</h2>
                    <div>
                        <div>
                            <p>Логин</p>
                            <input ref={login}/>
                        </div>
                        {/*<div>
                            <p>Пароль</p>
                            <textarea ref={password}/>
                        </div>*/}
                        <p>Пароль</p>
                        <div className={s.pass__block}>
                            <input ref={password} type={passwordShown ? "text" : "password"}/>
                            <BiShowAlt className={s.login_icon} onClick={togglePassword}/>
                        </div>
                        <div className={s.btn__block}>
                            <button className={s.btn} onClick={handleClick}>Войти</button>
                            <Link className={s.btn2} to={"/calc/registration"}>Зарегестрироваться</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginClient;