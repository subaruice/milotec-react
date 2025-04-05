import React, { useState } from "react";
import "./sidebar.css";

const models = [
    {
        name: "Škoda Octavia",
        categories: ["Интерьер", "Экстерьер"],
    },
    {
        name: "Škoda Octavia II",
        categories: ["Интерьер", "Экстерьер"],
    },
    {
        name: "Škoda Octavia III",
        categories: ["Интерьер", "Экстерьер"],
    },
    {
        name: "Škoda Octavia IV",
        categories: ["Интерьер", "Экстерьер"],
    },
    {
        name: "Škoda Superb",
        categories: ["Интерьер", "Экстерьер"],
    },
    {
        name: "Škoda Kodiaq",
        categories: ["Интерьер", "Экстерьер"],
    },
    {
        name: "Škoda Fabia",
        categories: ["Интерьер", "Экстерьер"],
    },
    {
        name: "Škoda Karoq",
        categories: ["Интерьер", "Экстерьер"],
    },
    {
        name: "Škoda Kamiq",
        categories: ["Интерьер", "Экстерьер"],
    },
];

const Sidebar = () => {
    const [activeModel, setActiveModel] = useState(null);

    return (
        <div className="sidebar">
            <h4>Каталог Skoda</h4>
            <ul>
                {models.map((model) => (
                    <li className="models" key={model.name}>
                        {model.name}
                        {}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
