import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import basket from "../../assets/free-icon-basket-7086260.png";
import imgLogin from "../../assets/icon-log.png";
import { SearchContext } from "../context/context";

const Navbar = () => {
    const { query, setQuery } = useContext(SearchContext);

    return (
        <div className="navbar">
            <div className="logo">
                <Link to={'/'}> 
                <img
                    className="logo-img"
                    src="https://static.golemos.com/lukasdubina/milotec/img/logo.png"
                    alt=""
                />
                </Link>
            </div>
            <div className="search-panel">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Введите текст..."
                />
            </div>
            <div className="auth">
                <div className="checkout">
                    <div className="login">
                        <img className="login-img" src={imgLogin} alt="" />
                        <Link to={"/Login"}>Войти</Link>
                        <Link to={"/Registration"}>Регистрация</Link>
                    </div>
                    <div className="basket">
                        <img className="basket-img" src={basket} alt="" />
                        <span>0 шт.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
