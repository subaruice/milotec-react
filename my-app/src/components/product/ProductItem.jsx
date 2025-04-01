import React from "react";
import "./productItem.css";

const ProductItem = (props) => {
    return (
        <div className="item">
            <img
                src="https://www.milotec.net/fotky72500/fotos/gen320/gen__vyr_1408_11-057-22_3.webp"
                alt=""
            />
            <div className="item__title">{props.title}</div>
            <div className="item__buy">
                <div className="priceTag">
                    <span className="isAvailable">В наличии</span>
                    <span className="price">1 000 UAH</span>
                </div>
                <button>В корзину</button>
            </div>
        </div>
    );
};

export default ProductItem;
