import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, F as Fragment$1 } from '../chunks/astro/server_6fDOc6EM.mjs';
import 'kleur/colors';
import { H as Header, $ as $$Layout, a as $$Hero } from '../chunks/Layout_B8_O9d4x.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const ProductCard = ({
  image,
  name,
  description,
  price,
  priceColor,
  buttonColor,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const handleAdd = () => {
    if (onAddToCart) onAddToCart(quantity);
  };
  return /* @__PURE__ */ jsxs("div", { className: "border border-gray-300 rounded-lg shadow-sm p-4 flex flex-col gap-4 bg-white", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: image,
        alt: name,
        className: "w-full h-48 object-cover rounded-md"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800", children: name }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 line-clamp-2", children: description }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("p", { className: `text-xl font-bold ${priceColor}`, children: [
          "$",
          price
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 min-w-[90px] justify-end", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setQuantity((q) => Math.max(1, q - 1)),
              className: "px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300",
              children: "-"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "w-6 text-center text-sm font-medium", children: quantity }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setQuantity((q) => q + 1),
              className: "px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300",
              children: "+"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleAdd,
        className: `mt-2 w-full ${buttonColor} hover:${buttonColor} text-white font-semibold py-2 px-4 rounded-md transition`,
        children: "Agregar al carrito"
      }
    )
  ] });
};

const Products = ({ currentCategory, products }) => {
  const filtered = currentCategory === "Todos los productos" ? products : products.filter((p) => p.categoryId === currentCategory);
  return /* @__PURE__ */ jsxs("section", { id: "products", className: "mt-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold text-gray-800", children: [
        "Resultados para: ",
        /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: currentCategory })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-500 mt-2", children: [
        filtered.length,
        " producto",
        filtered.length !== 1 ? "s" : "",
        " encontrado",
        filtered.length !== 1 ? "s" : ""
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: filtered.map((product) => /* @__PURE__ */ jsx(
      ProductCard,
      {
        image: product.imageUrl,
        name: product.name,
        description: product.description,
        price: product.price
      },
      product.id
    )) })
  ] });
};

const ProductLayout = ({ header, products }) => {
  const [currentCategory, setCurrentCategory] = useState("Todos los productos");
  const [searchQuery, setSearchQuery] = useState("");
  const enrichedProducts = products.items.map((p) => ({
    ...p,
    buttonColor: (
      //  p.buttonColor 
      //  ?? 
      products.buttonColor
    ),
    priceColor: (
      // p.priceColor 
      // ??
      products.priceColor
    )
  }));
  const filteredProducts = enrichedProducts.filter((product) => {
    const matchesCategory = currentCategory === "Todos los productos" || product.categoryId === currentCategory;
    const matchesSearch = product.name?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Header,
      {
        ...header,
        onSearch: (q) => setSearchQuery(q),
        onFilterByCategory: setCurrentCategory
      }
    ),
    /* @__PURE__ */ jsx("main", { className: "px-4 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl", children: /* @__PURE__ */ jsx(Products, { currentCategory, products: filteredProducts }) })
  ] });
};

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const url = new URL(Astro2.request.url);
  const slug = url.pathname.split("/")[1] || "default";
  console.log("slug:", slug);
  let storeData = null;
  let error = null;
  try {
    const res = await fetch(`https://showby.marcospd.ninja/catalog/${slug}`);
    if (!res.ok) {
      throw new Error("No se encontr\xF3 la tienda");
    }
    storeData = await res.json();
    console.log("Respuesta de la API:", storeData);
  } catch (err) {
    console.error(err);
    error = err;
  }
  const enrichedProducts = storeData ? {
    buttonColor: "bg-green-500",
    priceColor: "text-green-600",
    items: (storeData.categories ?? []).flatMap(
      (category) => (category.products ?? []).map((product) => ({
        ...product,
        categoryId: category.name
      }))
    )
  } : {
    buttonColor: "",
    priceColor: "",
    items: []
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Tienda Online", "title": storeData?.name ?? "Tienda", "canonical": "./favicon.svg" }, { "default": async ($$result2) => renderTemplate`${error || !storeData ? renderTemplate`${maybeRenderHead()}<div class="text-center p-10 text-red-500">
No se encontró la tienda o hubo un error.
</div>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment$1, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, { "logoUrl": storeData.logoUrl ?? "./bg-imagen.webp", "name": storeData.name ?? "Tienda", "description": storeData.description ?? "" })} ${renderComponent($$result3, "ProductLayout", ProductLayout, { "client:load": true, "header": {
    storeName: storeData.name ?? "Tienda",
    logoUrl: storeData.logoUrl ?? "",
    categories: [
      "Todos los productos",
      ...(storeData.categories ?? []).map(
        (c) => c.name ?? ""
      )
    ],
    selectStyle: "bg-green-500 text-white"
  }, "products": enrichedProducts, "client:component-hydration": "load", "client:component-path": "/Users/eldertavarez/Desktop/mobil_craft/multiStore/sections/ProductsLayaout", "client:component-export": "default" })} ` })}`}` })}`;
}, "/Users/eldertavarez/Desktop/mobil_craft/multiStore/src/pages/[...slug].astro", void 0);

const $$file = "/Users/eldertavarez/Desktop/mobil_craft/multiStore/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
