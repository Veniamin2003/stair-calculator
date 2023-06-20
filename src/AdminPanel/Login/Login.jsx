import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {BiShowAlt} from "react-icons/bi"
import s from "./Login.module.css"


function Login(props) {
    const navigate = useNavigate();

    let state = props.state;

    let users = state.users;
    let login = React.createRef();
    let password = React.createRef();


    const handleClick = () => {
        let isLogin = false;

        for (const user of users) {
            if (user.login === login.current.value && user.password === password.current.value) {
                let id = user.id;
                let name = user.name;
                let surname = user.surname;
                let login = user.login;
                let password = user.password;

                props.updateActiveUser(id, name, surname, login, password);
                navigate('/calc/admin-panel');
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
                    <div>
                        <div className={s.header}>
                            <h2>Подтвердите, что вы администратор</h2>
                        </div>
                        <div>
                            <p>Логин</p>
                            <input ref={login}/>
                        </div>
                        <p>Пароль</p>
                        <div className={s.pass__block}>
                            <input ref={password} type={passwordShown ? "text" : "password"}/>
                            <BiShowAlt className={s.login_icon} onClick={togglePassword}/>
                        </div>
                        <div className={s.btn__block}>
                            <button className={s.btn} onClick={handleClick}>Перейти к работе</button>
                            <Link className={s.btn2} to={"/registration"}>Назад</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;