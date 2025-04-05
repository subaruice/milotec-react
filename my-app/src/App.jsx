import { useState } from "react";
import "../src/styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { SearchProvider } from "./components/context/context";
function App() {
    return (
        <SearchProvider>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </SearchProvider>
    );
}

export default App;
