/* empty css                                  */
import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_xalE_caR.mjs';
import 'kleur/colors';
import { $ as $$Layout, H as Header, a as $$Hero, P as ProductLayout } from '../chunks/Layout_niJGAMGN.mjs';
export { renderers } from '../renderers.mjs';

const mockData3 = {
  header: {
    storeName: "MultiStore RD",
    logoUrl: "/logo.png",
    categories: [
      "Home",
      "Servicios",
      "Suscriopciones",
      "Nosotros"
    ],
    selectStyle: "bg-green-500 text-white"
  },
  hero: {
    backgroundImage: "/bg-imagen.webp",
    title: "MultiStore RD te da la bienvenida",
    subtitle: "Muestra tus productos sin complicaciones"
  },
  products: {
    buttonColor: "bg-green-500 text-white",
    priceColor: "text-green-600",
    items: [
      {
        id: 4,
        name: "Drone DJI Mini 2",
        price: 38900,
        description: "Drone compacto y potente con cámara 4K y control remoto incluido.",
        image: "/nike2.jpg",
        category: "Electrónica"
      },
      {
        id: 5,
        name: "Zapatos deportivos Nike Air",
        price: 6200,
        description: "Comodidad y estilo para tu día a día o entrenamiento.",
        image: "/nike.jpeg",
        category: "Ropa"
      },
      {
        id: 6,
        name: "Juego de mesa Uno",
        price: 350,
        description: "El clásico juego de cartas para toda la familia.",
        image: "/nike2.jpg",
        category: "Juguetes"
      }
    ]
  }
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { header, hero, products } = mockData3;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Tienda Online", "title": "MultiStore", "canonical": "./favicon.svg" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "logoUrl": header.logoUrl, "storeName": header.storeName, "categories": header.categories, "onSearch": (query) => console.log("Search query:", query), "onFilterByCategory": (category) => console.log("Filter by category:", category), "selectStyle": "default", "client:component-hydration": "load", "client:component-path": "/Users/eldertavarez/Desktop/mobil_craft/multiStore/src/components/Header", "client:component-export": "default" })} ${renderComponent($$result2, "Hero", $$Hero, { "logoUrl": hero.backgroundImage, "name": hero.title, "description": hero.subtitle })} ${renderComponent($$result2, "ProductLayout", ProductLayout, { "client:load": true, "header": header, "products": products, "client:component-hydration": "load", "client:component-path": "/Users/eldertavarez/Desktop/mobil_craft/multiStore/sections/ProductsLayaout", "client:component-export": "default" })} ` })}`;
}, "/Users/eldertavarez/Desktop/mobil_craft/multiStore/src/pages/index.astro", void 0);

const $$file = "/Users/eldertavarez/Desktop/mobil_craft/multiStore/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
