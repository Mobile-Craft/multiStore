import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_6fDOc6EM.mjs';
import 'kleur/colors';
import { $ as $$Layout, H as Header, a as $$Hero } from '../chunks/Layout_B8_O9d4x.mjs';
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
    ]},
  hero: {
    backgroundImage: "/bg-imagen.webp",
    title: "MultiStore RD te da la bienvenida",
    subtitle: "Muestra tus productos sin complicaciones"
  }};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { header, hero} = mockData3;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Tienda Online", "title": "MultiStore", "canonical": "./favicon.svg" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "logoUrl": header.logoUrl, "storeName": header.storeName, "categories": header.categories, "onSearch": (query) => console.log("Search query:", query), "onFilterByCategory": (category) => console.log("Filter by category:", category), "selectStyle": "default", "client:component-hydration": "load", "client:component-path": "/Users/eldertavarez/Desktop/mobil_craft/multiStore/src/components/Header", "client:component-export": "default" })} ${renderComponent($$result2, "Hero", $$Hero, { "logoUrl": hero.backgroundImage, "name": hero.title, "description": hero.subtitle })}  ` })}`;
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
