import { useState } from "react";
import Counter from "./Counter";

interface ProductCardProps {
    image?: string;
    name?: string;
    description?: string;
    price?: string;
    priceColor?: string;
    buttonColor?: string;
    onAddToCart?: (quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    name,
    description,
    price,
    priceColor,
    buttonColor,
    onAddToCart,
}) => {
    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
        if (onAddToCart) onAddToCart(quantity);
    };

    return (
        <div className="border border-gray-300 rounded-lg shadow-sm p-4 flex flex-col gap-4 bg-white">
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover rounded-md"
            />

            <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
                <div className="flex justify-between items-center">
                    <p className={`text-xl font-bold ${priceColor}`}>${price}</p>
                    <div className="flex items-center gap-2 min-w-[90px] justify-end">
                        <button
                            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                            className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
                        >
                            -
                        </button>
                        <span className="w-6 text-center text-sm font-medium">{quantity}</span>
                        <button
                            onClick={() => setQuantity((q) => q + 1)}
                            className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            <button
                onClick={handleAdd}
                className={`mt-2 w-full ${buttonColor} hover:${buttonColor} text-white font-semibold py-2 px-4 rounded-md transition`}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ProductCard;
