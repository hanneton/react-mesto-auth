import React, { useState } from "react";


function Login(props) {
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
        props.onSignIn(password, email);
    }
    return (
        <div className="auth">
            <h2 className="auth__title">Вход</h2>
            <form onSubmit={handleSubmit} className="auth__form">
                <input onChange={handleEmailChange} value={email} className="auth__input" placeholder="Email"></input>
                <input onChange={handlePasswordChange} value={password} className="auth__input" placeholder="Пароль"></input>
                <button className="auth__btn" type="submit">Войти</button>
            </form>
        </div>
    )
}

export default Login;