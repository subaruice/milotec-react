import React from "react";
import { Route, Routes } from 'react-router-dom';
import { RoutesList } from './../router/index';

const AppRouter = () => {
    return (
        <Routes>
            {RoutesList.map((item, index) => (
                <Route key={index} path={item.path} element={item.element} />
            ))}
        </Routes>
    );
};

export default AppRouter;
