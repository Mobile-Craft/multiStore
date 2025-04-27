import React from "react";
import ProductCard from "../src/components/ProductCard";

import type { Product } from "../types/Product";

interface ProductsProps {
    currentCategory: string;
    products: Product[];
}

const Products: React.FC<ProductsProps> = ({ currentCategory, products }) => {
    const filtered =
        currentCategory === "Todos los productos"
            ? products
            : products.filter((p) => p.categoryId === currentCategory);

    return (
        <section id="products" className="mt-10">
            <div className="mb-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Resultados para: <span className="text-blue-600">{currentCategory}</span>
                </h2>
                <p className="text-gray-500 mt-2">
                    {filtered.length} producto{filtered.length !== 1 ? "s" : ""} encontrado
                    {filtered.length !== 1 ? "s" : ""}
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.imageUrl}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                    // buttonColor={product.buttonColor}
                    // priceColor={product.priceColor}
                    />


                ))}
            </div>
        </section>
    );
};

export default Products;
