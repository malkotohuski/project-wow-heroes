import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import '../Login/Login.css'




export const Login = () => {
    const { onLoginSubmit } = useContext(UserContext);


    /*  const chancheLoginMode = () => {
       setLoginMode(loginMode === "login" ? "newRegistration" : "login")
     } */

    //if (loginMode === "login") {
    return (

        <div className="login-bar">
        <section id="login-page" className="auth">
      
            <form id="login" onSubmit={onLoginSubmit}>
                    
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="malkotohuski@gmail.com" />

                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
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
        /* <Fragment>
    <div className="Login-form-container">
        <form className="Login-form" >
            <div className="Login-form-content">
                <h3 className="Login-form-title">Login</h3>
                <div className="text-center">
                    Not registered yet?{" "}
                    <span className="link-primary" onSubmit={onLoginSubmit}>
                        New Registration
                    </span>
                </div>
                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                    />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p className="text-center mt-2">
                    Forgot <Link to="#">password?</Link>
                </p>
            </div>
        </form>
    </div>
</Fragment>
)
}
*/
