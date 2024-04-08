import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import "./Pagination.css";

function PaginationWrapper() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const fetchProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=1000`);
        const data = await res.json();

        if (data && data.products) {
            setProducts(data.products);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            {products.length > 0 && (
                <div className="products">
                    {products.slice(page * 10 - 10, page * 10).map((prod) => {
                        return (
                            <span className="products__single" key={prod.id}>
                                <img src={prod.thumbnail} alt={prod.title} /> {/* alt is imp */}
                                <span>{prod.title}</span>
                            </span>
                        );
                    })}
                </div>
            )}

            {products.length > 0 && (
                <Pagination products={products} page={page} setPage={setPage} />
            )}
        </div>
    );
}

export default PaginationWrapper;
