import React from "react";
import { getPagesArray } from "./../utils/index";

const Pagination = ({ totalPages, changePage, page }) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className="pagination">
            {pagesArray.map((p) => (
                <button
                    onClick={() => changePage(p)}
                    className={page === p ? "page page__current" : "page"}
                    key={p}
                >
                    {p}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
