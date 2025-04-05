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
        categories: ["Интерьер", "Экстерьер", "Акссесуары"],
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
    const [openModel, setOpenModel] = useState(null);

    const toggleModel = (modelName) => {
        setOpenModel((active) => (active === modelName ? null : modelName));
    };

    return (
        <div className="sidebar">
            <h4>Каталог Skoda</h4>
            <ul>
                {models.map((model) => (
                    <li
                        onClick={() => {
                            toggleModel(model.name);
                        }}
                        className={`models ${openModel === model.name ? 'active': ''}`}
                        key={model.name}
                    >
                        {model.name}
                        {openModel === model.name && (
                            <ul className="submodels">
                                {model.categories.map((cat, index) => (
                                    <li key={index} className="submodel">
                                        {cat}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
