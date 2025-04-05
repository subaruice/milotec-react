import React from 'react';
import './productItem.css'
import Slider from '../slider/slider';
import ProductList from './ProductList';

const ProductPage = () => {
    return (
       <div>
           <Slider/>
           <ProductList/>
       </div>
    );
};

export default ProductPage ;