import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "../components/product/ProductList";
import Sidebar from "../components/sidebar/Sidebar";
import ProductPage from "../components/product/ProductPage";

const StartPage = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}} className="layout">
            <Sidebar/>
            <ProductPage />
        </div>
    );
};

export default StartPage;
