import { useState } from "react";

const Counter = () => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-2 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
                -
            </button>
            <span className="px-3 text-sm font-medium">{quantity}</span>
            <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-2 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
                +
            </button>
        </div>
    );
};

export default Counter;
