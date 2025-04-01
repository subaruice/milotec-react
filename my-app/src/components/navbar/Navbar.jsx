import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import basket from "../../assets/free-icon-basket-7086260.png";
import imgLogin from "../../assets/icon-log.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img className="logo-img"
                    src="https://static.golemos.com/lukasdubina/milotec/img/logo.png"
                    alt=""
                />
            </div>
            <div className="search-panel">
                <input type="text" placeholder="Введите текст..." />
            </div>
            <div className="auth">
                <div className="checkout">
                    <div className="login">
                        <img className="login-img" src={imgLogin} alt="" />
                        <Link to={"/Login"}>Войти</Link>
                        <Link to={"/Registration"}>Регистрация</Link>
                    </div>
                    <img className="basket-img" src={basket} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
