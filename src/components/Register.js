import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "./Authorization";

function Register(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(props.onSignUp);
        props.onSignUp(password, email);
    }

    return (
        <div className="auth">
            <h2 className="auth__title">Регистрация</h2>
            <form onSubmit={handleSubmit} className="auth__form">
                <input onChange={handleEmailChange} value={email} className="auth__input" placeholder="Email" />
                <input onChange={handlePasswordChange} value={password} className="auth__input" placeholder="Пароль" />
                <button className="auth__btn" type="submit">Зарегистрироваться</button>
            </form>
            <Link to="/sign-in" className="auth__caption">Уже зарегистрированы? Войти</Link>
        </div>
    )
}

export default Register;