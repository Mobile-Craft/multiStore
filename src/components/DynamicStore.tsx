import { useEffect, useState } from "react";
import type { Catalog } from "../../types/Product";

export default function DynamicStore() {
    const [storeData, setStoreData] = useState<Catalog | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const path = window.location.pathname.slice(1); // elimina la `/`
        console.log(path);

        if (path) {
            fetch(`https://showby.marcospd.ninja/catalog/${path}`)
                .then((res) => res.json())
                .then((data) => setStoreData(data))
                .catch(() => setError(true));
            console.log(storeData);

        }
    }, []);

    console.log(storeData);
    console.log(error);


    if (!storeData && !error) {
        return <div>Cargando tienda...</div>;
    }

    if (error) {
        return (
            console.log(error),

            <div>No se encontró la tienda. {error}</div>
        )
    }

    return (
        <div>
            <h1>{storeData ? storeData.name : 'error bro'}</h1>
            {/* Aquí tu Hero, productos, etc */}
        </div>
    );
}
