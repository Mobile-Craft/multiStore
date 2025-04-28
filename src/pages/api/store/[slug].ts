import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params }) => {
    const slug = params.slug;

    if (!slug) {
        return new Response(
            JSON.stringify({ error: "No slug provided" }),
            { status: 400 }
        );
    }

    try {
        const response = await fetch(`https://showby.marcospd.ninja/catalog/${slug}`);

        if (!response.ok) {
            return new Response(
                JSON.stringify({ error: "Store not found" }),
                { status: 404 }
            );
        }

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Proxy API Error:', error);
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500 }
        );
    }
};
