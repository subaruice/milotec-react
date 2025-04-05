import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState({
        email: "",
        password: "",
    });
    
    const validEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleBlur = (e) => {
        const {name, value} = e.target
        if(name === 'password' && value.length < 6){
            setError((errors) => ({...errors, [name]:'Пароль должен содержать больше 6 символов!'}))
            console.log(error.password);
        }
        if(name === 'email' && !validEmail(value)){
            setError((errors) => ({...errors, [name]: 'Некоректный email'}))
        }

    }
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((data) => ({ ...data, [name]: value }));
        setError((error) => ({...error, [name]: ''}))
    };

    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        
    }
    

    return (
        <div className="wrapper-log">
            <form onSubmit={handleSubmit}>
                <h2 className="wrapper-login">
                    Введите ваши данные, чтобы продолжить!
                </h2>
                <h5>Введите ваш email*</h5>
                <p style={{color:"red", fontSize: 14}}>{error.email}</p> 
                <input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    type="text"
                    placeholder=""
                />
                <h5>Введите ваш пароль*</h5>
                <p style={{color:"red", fontSize: 14}}>{error.password}</p> 
                <input
                    onBlur={handleBlur}
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                    type="password"
                    placeholder=""
                />
                
                <button type="submit">Войти</button>
                <div className="reg">
                    <Link to={"/registration"}>Регистрация</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
