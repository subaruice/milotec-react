import React, { useState } from "react";
import "./registration.css";
import { Link } from "react-router-dom";

const Registration = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });

    const [error, setError] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });

    const validEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    
    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (name === "password" && value.length < 6) {
            setError((errors) => ({
                ...errors,
                [name]: "Пароль должен содержать больше 6 символов!",
            }));
            console.log(error.password);
        }
        if (name === "email" && !validEmail(value)) {
            setError((errors) => ({ ...errors, [name]: "Некоректный email" }));
        }
        if(name === 'confirmPass' && formData.password !== formData.confirmPass ){
            setError((errors) => ({...errors, [name]:'Пароли не совпадают'}))
        }
        
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({ ...data, [name]: value }));
        setError((error) => ({ ...error, [name]: "" }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    
    

    return (
        <div className="wrapper-reg">
            <form onSubmit={handleSubmit}>
                <h2 className="wrapper-registration">
                    Введите ваши данные для регистрации!
                </h2>
                <h5>Введите ваш email*</h5>
                <p style={{ color: "red", fontSize: 14 }}>{error.email}</p>
                <input
                    name="email"
                    value={formData.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="text"
                    placeholder=""
                />
                <h5>Введите ваш пароль*</h5>
                <p style={{ color: "red", fontSize: 14 }}>{error.password}</p>
                <input
                    name="password"
                    value={formData.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    placeholder=""
                />
                <h5>Введите ваш пароль повторно*</h5>
                <p style={{ color: "red", fontSize: 14 }}>{error.confirmPass}</p>
                <input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="confirmPass"
                    value={formData.confirmPass}
                    type="password"
                    placeholder=""
                />
                <button type="submit">Регистрация</button>
                <div className="log">
                    <Link to={"/login"}>Уже есть аккаунт?</Link>
                </div>
            </form>
        </div>
    );
};

export default Registration;
