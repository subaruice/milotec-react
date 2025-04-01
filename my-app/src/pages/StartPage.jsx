import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "../components/product/ProductList";
import Sidebar from "../components/sidebar/Sidebar";

const StartPage = () => {
    return (
        <div>
            <Sidebar/>
            <ProductList />
        </div>
    );
};

export default StartPage;
