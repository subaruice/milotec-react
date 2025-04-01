import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const [items, setItems] = useState([]);
    const [image, setImage] = useState([]);
    const GetImage = async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/albums/1/photos"
        );
        setImage(response.data);
    };
    const GetAll = async (limit = 20, page = 1) => {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/`, {
                params: {
                    _limit: limit,
                    _page: page
                }
            }
        );
        setItems(response.data);
    };

    useEffect(() => {
        GetAll();
        GetImage();
    }, []);

    return (
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px'}}>
            {items.map((item) => (
                <ProductItem key={item.id} title={item.title} />
            ))}
        </div>
    );
};

export default ProductList;
