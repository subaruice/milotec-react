import React, { useContext, useMemo, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import ProductItem from "./ProductItem";
import PostService from "../../API/PostService";
import Pagination from "../Pagination";
import { getTotalPages } from "./../../utils/index";
import IsLoading from "../UI/loading/isLoading";
import { useFetching } from "./../../hooks/useFetching";
import { SearchContext } from "../context/context";
import Slider from "../slider/slider";

const ProductList = () => {
    const { query } = useContext(SearchContext);

    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, SetTotalPages] = useState(0);
    const [limit, setLimit] = useState(20);
    const [fetchPosts, isItemsLoading, isError] = useFetching(async () => {
        const response = await PostService.GetAll(limit, page);
        setItems(response.data);
        const totalCount = response.headers["x-total-count"];
        SetTotalPages(getTotalPages(totalCount, limit));
    });

    const searchedItems = useMemo(() => {
        return items.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );
    }, [items, query]);

    const changePage = (page) => {
        setPage(page);
    };

    useEffect(() => {
        fetchPosts();
    }, [page]);

    if (isItemsLoading) {
        return <IsLoading />;
    }
    if (searchedItems.length === 0 && items.length > 0) {
        return <h1>Net sovpadeni...</h1>;
    }

    return (
        <div className="wrapper">
            {isError && <h1>{isError}</h1>}
            <div
                className="fr"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "10px",
                }}
            >
                {searchedItems.map((item) => (
                    <ProductItem key={item.id} title={item.title} />
                ))}
            </div>
            <Pagination
                changePage={changePage}
                page={page}
                totalPages={totalPages}
            />
        </div>
    );
};

export default ProductList;
