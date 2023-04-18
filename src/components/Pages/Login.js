import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import '../Login/Login.css'

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

export const Login = () => {
    const { onLoginSubmit } = useContext(UserContext);
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return (

        <div className="login-bar">
            <section id="login-page" className="auth">

                <form id="login" method="POST" onSubmit={onSubmit}>

                    <div className="container">
                        <h1>Login</h1>
                        <label htmlFor="email">Email:</label>
                        <input type="email"
                            id="email"
                            name={LoginFormKeys.Email}
                            placeholder="malkotohuski@gmail.com"
                            value={values[LoginFormKeys.Email]}
                            onChange={changeHandler}
                        />

                        <label htmlFor="login-pass">Password:</label>
                        <input type="password"
                            id="login-password"
                            name={LoginFormKeys.Password}
                            value={values[LoginFormKeys.Password]}
                            onChange={changeHandler}
                        />
                        <input type="submit" className="btn submit" value="Login" />
                        <p className="field">
                            <span>If you don't have profile click <Link to='/register'>here</Link></span>
                        </p>
                    </div>
                </form>
            </section>
        </div>
    )
}
       