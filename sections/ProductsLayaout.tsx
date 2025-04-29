import { useState } from "react";
import Header from "../src/components/Header";
import Products from "./Products";
import type { Product } from "../types/Product";


interface Props {
    header: any;
    // products: {
    //     items: Product[];
    //     buttonColor: string;
    //     priceColor: string;
    // };
}

const ProductLayout: React.FC<Props> = ({ header }) => {
    const [currentCategory, setCurrentCategory] = useState("Todos los productos");
    const [searchQuery, setSearchQuery] = useState("");

    // Fusionamos los colores globales dentro de cada item si no están definidos
    // const enrichedProducts = products.items.map((p) => ({
    //     ...p,
    //     buttonColor:
    //         //  p.buttonColor 
    //         //  ?? 
    //         products.buttonColor,
    //     priceColor:
    //         // p.priceColor 
    //         // ??
    //         products.priceColor,
    // }));

    // const filteredProducts = enrichedProducts.filter((product) => {
    //     const matchesCategory =
    //         currentCategory === "Todos los productos" || product.categoryId === currentCategory;
    //     const matchesSearch = product.name?.toLowerCase().includes(searchQuery.toLowerCase());
    //     return matchesCategory && matchesSearch;
    // });

    return (
        <>
            <Header
                {...header}
                onSearch={(q) => setSearchQuery(q)}
                onFilterByCategory={setCurrentCategory}
            />

            <main className="px-4 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
                {/* <Products currentCategory={currentCategory} products={filteredProducts} /> */}
            </main>
        </>
    );
};


export default ProductLayout;